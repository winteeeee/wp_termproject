const express = require("express");
const router = express.Router();

const ownerPageRouter = (form_data, db) => {
    //DB 조회가 완료된 후 send 해야하므로 비동기 처리 필수
    //비동기 처리하지 않으면 빈배열만 보내게 됨
    router.get("/stats", async (req, res) => {
        let result = {};
        let idx = 0;

        const pizzaName = [];
        let nameMap = {};
        await db.collection("pizza").find().sort({"name": 1}).forEach((r) => {
            const curName = r.name;

            pizzaName.push(curName);
            nameMap = {...nameMap, [curName]: idx++}
        });

        const amounts = [];
        await db.collection("orderHistory").find().forEach((r) => {
            const data = r.data.sort((a, b) => {
                if (a.menu > b.menu) {
                    return 1;
                } else if (a.menu < b.menu) {
                    return -1;
                } else {
                    return 0;
                }
            });

            data.map((e) => {
                amounts[nameMap[e.menu]] = isNaN(amounts[nameMap[e.menu]]) ? e.amount : amounts[nameMap[e.menu]] + e.amount;
            })
        });

        idx = 0;
        const sales = [];
        const dayOfTheWeek = [];
        const dayOfTheWeekMap = {
            0: "일요일",
            1: "월요일",
            2: "화요일",
            3: "수요일",
            4: "목요일",
            5: "금요일",
            6: "토요일"
        }

        db.collection("orderHistory").find({"ownerID": "ownerID"}).sort({"date": -1}).toArray().then((r) => {
            let curDay = new Date();
            let curDayString = `${curDay.getFullYear()}-${curDay.getMonth() + 1}-${curDay.getDate()}`;

            if (r.length > 0) {
                let resultIdx = 6;
                let elementIdx = 0;

                for (; resultIdx >= 0 && elementIdx < r.length; elementIdx++) {
                    let day = r[elementIdx].date.split(" ")[0];
                    let date = r[elementIdx].dayOfTheWeek;

                    if (day === curDayString) { //이전 날짜와 똑같으면 합산만
                        if (isNaN(sales[resultIdx])) {
                            sales[resultIdx] = Number(r[elementIdx].totalPrice);
                        } else {
                            sales[resultIdx] += Number(r[elementIdx].totalPrice);
                        }
                        dayOfTheWeek[resultIdx] = dayOfTheWeekMap[date];
                        continue;
                    }

                    curDay.setDate(curDay.getDate() - 1);
                    curDayString = `${curDay.getFullYear()}-${curDay.getMonth() + 1}-${curDay.getDate()}`;
                    resultIdx--;

                    if (day === curDayString) {
                        dayOfTheWeek[resultIdx] = dayOfTheWeekMap[date];
                        sales[resultIdx] = Number(r[elementIdx].totalPrice);
                    } else {
                        elementIdx--;
                    }
                }

                result = {result, pizzaName: pizzaName, amounts: amounts, sales: sales, dayOfTheWeek: dayOfTheWeek};
            } else {
                result = {result, pizzaName: pizzaName, amounts: amounts};
            }
            return res.json(result);
        });

    })

    router.post("/menuReg", form_data.single("img"), (req, res) => {
        db.collection("pizza").insertOne({...req.body, img: req.file}).then(() => {
            console.log("데이터 삽입 성공");
        });
    })

    return router;
}

module.exports = ownerPageRouter;
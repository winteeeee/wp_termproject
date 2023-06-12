const express = require("express");
const router = express.Router();

const isSameDate = (d1, d2) => {
    return d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();
}

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
            let resultIdx = 6;
            let elementIdx = 0;

            for (; resultIdx >= 0 && elementIdx < r.length; elementIdx++) {
                const day = new Date(r[elementIdx].date.split("T")[0]);

                if (isSameDate(day, curDay)) {
                    if (isNaN(sales[resultIdx])) {
                        sales[resultIdx] = Number(r[elementIdx].totalPrice);
                    } else {
                        sales[resultIdx] += Number(r[elementIdx].totalPrice);
                    }
                } else {
                    curDay.setDate(curDay.getDate() - 1);
                    resultIdx--;
                    if (isSameDate(day, curDay)) {
                        sales[resultIdx] = Number(r[elementIdx].totalPrice);
                    } else {
                        elementIdx--;
                    }
                }

                if (dayOfTheWeek[resultIdx] === undefined) {
                    dayOfTheWeek[resultIdx] = dayOfTheWeekMap[curDay.getDay()];
                }
            }

            for (; resultIdx >= 0; resultIdx--, curDay.setDate(curDay.getDate() - 1)) {
                if (dayOfTheWeek[resultIdx] === undefined) {
                    dayOfTheWeek[resultIdx] = dayOfTheWeekMap[curDay.getDay()];
                }
            }

            result = {result, pizzaName: pizzaName, amounts: amounts, sales: sales, dayOfTheWeek: dayOfTheWeek};
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
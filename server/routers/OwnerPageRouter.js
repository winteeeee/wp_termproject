const express = require("express");
const router = express.Router();

const ownerPageRouter = (form_data, db) => {
    //DB 조회가 완료된 후 send 해야하므로 비동기 처리 필수
    //비동기 처리하지 않으면 빈배열만 보내게 됨
    router.get("/stats", async (req, res) => {
        let result = {};
        let idx = 0;

        const pizzaName = [];
        await db.collection("pizza").find().sort({"name": 1}).forEach((r) => {
            pizzaName.push(r.name);
        });

        const amounts = [];
        await db.collection("orderHistory").find({"ownerID": "ownerID"}).sort({"menu": 1}).forEach((r) => {
            idx = amounts[idx] === undefined ? idx + 1 : idx;
            amounts.splice(idx, 0, amounts[idx] ? amounts[idx] + 1 : 1);
        });

        idx = 0;
        const sales = [];
        const dayOfTheWeek = [];
        await db.collection("orderHistory").find({"ownerID": "ownerID"}).sort({"date": 1}).forEach((r) => {
            const date = r.date.split(" ");

            if (idx !== 0) {
                if (dayOfTheWeek[idx - 1] !== date[0]) {
                    dayOfTheWeek[idx] = date[0];
                    sales[idx++] = Number(r.price);
                } else {
                    sales[idx - 1] += Number(r.price);
                }
            } else {
                dayOfTheWeek[idx] = date[0];
                sales[idx++] = Number(r.price);
            }

        });

        result = {result, pizzaName: pizzaName, amounts: amounts, sales: sales, dayOfTheWeek: dayOfTheWeek};
        return res.json(result);
    })

    router.post("/menuReg", form_data.single("img"), (req, res) => {
        db.collection("pizza").insertOne({...req.body, img: req.file}).then(() => {
            console.log("데이터 삽입 성공");
        });
    })

    /*router.post("/tempDummyInsert", form_data.any(), (req, res) => {
    console.log(req.body);
    db.collection("orderHistory").insertOne(req.body).then(() => {
        console.log("데이터 삽입 성공");
    });
})*/

    return router;
}

module.exports = ownerPageRouter;
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
        await db.collection("orderHistory").find({"ownerNumber": "1"}).sort({"menu": 1}).forEach((r) => {
            idx = amounts[idx] === undefined ? idx + 1 : idx;
            amounts.splice(idx, 0, amounts[idx] ? amounts[idx] + 1 : 1);
        });

        idx = 0;
        const sales = [];
        const dayOfTheWeek = [];
        await db.collection("orderHistory").find({"ownerNumber": "1"}).sort({"date": 1}).forEach((r) => {
            if (idx !== 0) {
                if (dayOfTheWeek[idx - 1] !== r.date) {
                    dayOfTheWeek[idx] = r.date;
                    sales[idx++] = Number(r.amount);
                } else {
                    sales[idx - 1] += Number(r.amount);
                }
            } else {
                dayOfTheWeek[idx] = r.date;
                sales[idx++] = Number(r.amount);
            }

        });

        result = {result, pizzaName: pizzaName, amounts: amounts, sales: sales, dayOfTheWeek: dayOfTheWeek};
        return res.json(result);
    })

    router.post("/menuReg", form_data.single("img"), (req, res) => {
        db.collection("pizza").insertOne({...req.body, img: req.file}).then(() => {
            console.log("데이터 삽입 성공");
        });
        return res.json(req.body);
    })

    /*router.post("/tempDummyInsert", form_data.any(), (req, res) => {
    console.log(req.body);
    db.collection("orderHistory").insertOne(req.body).then(() => {
        console.log("데이터 삽입 성공");
    });
    return res.json(req.body);
})*/

    return router;
}

module.exports = ownerPageRouter;
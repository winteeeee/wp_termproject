const express = require("express");
const router = express.Router();

const myPageRouter = (db) => {
    router.get("/loadInfo/:id", async (req, res) => {
        const {id} = req.params;

        await db.collection("user").find({"id": id}).forEach((r) => {
            return res.json(r);
        })
    })

    router.get("/loadOrderHistory/:id", async (req, res) => {
        const result = [];
        const {id} = req.params;

        await db.collection("orderHistory").find({"userID": id}).sort({"date": 1}).forEach((r) => {
            result.push(r);
        })

        return res.json(result);
    })

    router.post("/userUpdate", async (req, res) => {
        await db.collection("user").updateOne({id: req.body.id}, {$set:{address: req.body.address, detailed_address: req.body.detailed_address}}).then(() => {
            console.log("유저 업데이트 성공");
        });
    })

    router.post("/reviewInsert", async (req, res) => {
        await db.collection("review").insertOne({...req.body}).then(() => {
            console.log("리뷰 등록 성공");
        });
    })

    return router;
}

module.exports = myPageRouter
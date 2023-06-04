const express = require("express");
const router = express.Router();

const myPageRouter = (db) => {
    router.get("/load/:id", async (req, res) => {
        const {id} = req.params;

        await db.collection("user").find({"id": id}).forEach((r) => {
            return res.json(r);
        })
    })

    router.post("/update", async (req, res) => {
        db.collection("user").updateOne({id: req.body.id}, {$set:{address: req.body.address, detailed_address: req.body.detailed_address}}).then(() => {
            console.log("유저 업데이트 성공");
        });

        return res.json(req.body);
    })

    return router;
}

module.exports = myPageRouter
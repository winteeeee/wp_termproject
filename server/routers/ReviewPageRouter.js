const express = require("express");
const router = express.Router();

const ReviewPageRouter = (db) => {

    router.get("/api/loadReview", async (req, res) => {
        let result = [];
        const response = req.query.name;
        const regexPattern = new RegExp(response);

        const data = await db
            .collection("Review")
            .find({
                "name": regexPattern
            })
            .toArray();

        result = data.map((review) => ({
            name: review.name,
            rate: review.rate,
            context: review.context,
            writer: review.writer
        }));
        console.log(data);
        return res.json(result);
    })
    return router;
}

module.exports = ReviewPageRouter;
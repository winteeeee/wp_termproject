const express = require("express");
const router = express.Router();

const ReviewPageRouter = (db) => {

    router.get("/api/loadReview", async (req, res) => {
        let result = [];
        const response = req.query.name;

        const data = await db
            .collection("Review")
            .find({
                "name": response
            })
            .toArray();

        result = data.map((review) => ({
            name: review.name,
            rate: review.rate,
            context: review.context,
            writer: review.writer
        }));
        return res.json(result);
    })
    return router;
}

module.exports = ReviewPageRouter;
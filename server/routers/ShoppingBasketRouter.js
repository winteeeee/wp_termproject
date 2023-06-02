const express = require("express");
const router = express.Router();

const ShoppingBasketRouter = (db) => {
    router.get("/test", async (req, res) => {
        let result = [];
        await db.collection("pizza").find().forEach((r) => {
            result.push({pizzaImg: r.img, pizzaName: r.name, pizzaPrice: r.priceL, pizzaOption: "테스트"});
        })
        //TODO 피자 컬렉션이 아니라 장바구니 컬렉션에서 조회하기
        return res.json(result);
    })

    return router;
}

module.exports = ShoppingBasketRouter;
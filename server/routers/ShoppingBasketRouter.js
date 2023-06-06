const express = require("express");
const router = express.Router();

const ShoppingBasketRouter = (db) => {
    router.get("/loadData", async (req, res) => {
        let result = [];
        await db.collection("shoppingBasket").find().forEach((r) => {
            result.push({pizzaImg: r.img, pizzaName: r.name, pizzaPrice: r.price, pizzaOption: "L, 오리지널"});
        })
        return res.json(result);
    })

    router.get("/deleteAll/:id", async (req, res) => {
        const {id} = req.params;

        await db.collection("shoppingBasket").deleteMany({userID: id}).then(() => {
            console.log("장바구니 전체 삭제 완료");
        })
    })

    router.get("/orderCount", async (req, res) => {
        return res.json(await db.collection("orderHistory").countDocuments());
    })

    router.post("/deleteData", async (req, res) => {
        await db.collection("shoppingBasket").deleteOne({userID: req.body.userID, name: req.body.pizzaName}).then(() => {
            console.log("장바구니 삭제 완료");
        })
    })

    router.post("/orderInsert", async (req, res) => {
        const data = {
            ...req.body,
            dest: "금오공과대학교",
            store: "구미도량봉곡점",
            storePhoneNumber: "054-454-8495",
        }

        await db.collection("orderHistory").insertOne(data).then(() => {
            console.log("주문 완료");
        })
    })

    return router;
}

module.exports = ShoppingBasketRouter;
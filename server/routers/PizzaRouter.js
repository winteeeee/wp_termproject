const express = require("express");
const router = express.Router();

const PizzaRouter = (db) => {
    router.get("/api/loadPizzaData", async (req, res) => {
        const pizzaType = req.query.type || "전체";
        const pizzaSelectedSort = parseInt(req.query.sort) || 3;
        const currentPage = parseInt(req.query.currentPage) || 1;
        const perPage = 2; // 한 페이지 당 보여질 피자 개수
    
        let findOption = (pizzaType === "전체") ? {} : {kind:`${pizzaType}`}
    
        let sortOption = {};
        if(pizzaSelectedSort === 2) sortOption = {priceL: 1};
        else if(pizzaSelectedSort === 1) sortOption = {priceL: -1};
    
        const pizzaList = await db
            .collection("pizza")
            .find(findOption)
            .sort(sortOption)
            .skip((currentPage - 1) * perPage)
            .limit(perPage)
            .toArray();
    
        const result = pizzaList.map((pizza) => ({
            name: pizza.name,
            img: pizza.img,
            description: pizza.description,
            kind: pizza.kind,
            priceL: pizza.priceL,
            priceR: pizza.priceR,
            topping1: pizza.topping1,
            topping2: pizza.topping2,
            topping3: pizza.topping3,
          }));
    
        return res.json(result);
    })
    
    router.get("/api/PizzaDataCount", async (req, res) => {
        let pizzaType = req.query.type || "전체";
        let findOption = (pizzaType === "전체") ? {} : {kind:`${pizzaType}`}
    
        const count = await db
            .collection("pizza")
            .countDocuments(findOption); // 총 데이터 개수
    
        return res.json(count);
    })
    
    return router;
}

module.exports = PizzaRouter;
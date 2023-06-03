const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const cors = require("cors");
const yaml = require("js-yaml");
const path = require('path');
const fs = require("fs");
const mongoose= require("mongoose");

const app = express();
const form_data = multer();

const config = yaml.load(fs.readFileSync("config.yml", 'utf8'));
const hostname = config["Server"]["Host"];
const port = config["Server"]["Port"];
const dbHost = config["MongoDB"]["Host"];
const dbPort = config["MongoDB"]["Port"];
const dbName = config["MongoDB"]["Database"];

mongoose.connect(`mongodb://${dbHost}:${dbPort}/${dbName}`).then(() => {
    console.log("DB 연결 성공");
});
const db = mongoose.connection;

app.use(express.json());
app.use(cors({
    origin: "*",
    credential: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/loadPizzaData", async (req, res) => {
    const pizzaType = req.query.type || "전체";
    const pizzaSelectedSort = parseInt(req.query.sort) || 3;
    const currentPage = parseInt(req.query.currentPage) || 1;
    const perPage = 2; // 한 페이지 당 보여질 피자 개수

    let findOption = (pizzaType === "전체") ? {} : {kind:`${pizzaType}`}

    let sortOption = {};
    if(pizzaSelectedSort === 2) sortOption = {priceL: 1};
    else if(pizzaSelectedSort === 1) sortOption = {priceL: -1};

    const pizzaList = await db
        .collection("PizzaData")
        .find(findOption)
        .sort(sortOption)
        .skip((currentPage - 1) * perPage)
        .limit(perPage)
        .toArray();

    const result = pizzaList.map((pizza) => ({
        name: pizza.name,
        imgPath: pizza.imgPath,
        nameEnglish: pizza.nameEnglish,
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

app.get("/api/PizzaDataCount", async (req, res) => {
    const pizzaType = req.query.type || "전체";
    let findOption = (pizzaType === "전체") ? {} : {kind:`${pizzaType}`}

    const count = await db
        .collection("PizzaData")
        .countDocuments(findOption); // 총 데이터 개수

    return res.json(count);
})

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
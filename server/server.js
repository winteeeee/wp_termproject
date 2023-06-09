const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const cors = require("cors");
const yaml = require("js-yaml");
const fs = require("fs");
const mongoose= require("mongoose");
const ownerPage = require("./routers/OwnerPageRouter");
const shoppingBasket = require("./routers/ShoppingBasketRouter");
const pizzaPage = require("./routers/PizzaRouter");
const myPage = require("./routers/MyPageRouter");
const ReviewPageRouter = require("./routers/ReviewPageRouter");

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

app.use(express.json({
    limit: "50mb"
}));
app.use(cors({
    origin: "*",
    credential: true
}));
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({
    limit: "50mb",
    extended: true
}));

app.use("/ownerPage", ownerPage(form_data, db));
app.use("/shoppingBasket", shoppingBasket(db));
app.use("/pizzaPage", pizzaPage(db));
app.use("/myPage", myPage(db));
app.use("/reviewPage", ReviewPageRouter(db));

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
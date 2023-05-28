const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const cors = require("cors");
const yaml = require("js-yaml");
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


app.get("/", (req, res) => {
    return res.send("서버 구동중");
});

//DB 조회가 완료된 후 send 해야하므로 비동기 처리 필수
//비동기 처리하지 않으면 빈배열만 보내게 됨
app.get("/Stats/loadData", async (req, res) => {
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

app.post("/MenuReg", form_data.single("img"), (req, res) => {
    db.collection("pizza").insertOne({...req.body, img: req.file}).then(() => {
        console.log("데이터 삽입 성공");
    });
    return res.json(req.body);
})

/*app.post("/tempDummyInsert", form_data.any(), (req, res) => {
    console.log(req.body);
    db.collection("orderHistory").insertOne(req.body).then(() => {
        console.log("데이터 삽입 성공");
    });
    return res.json(req.body);
})*/

app.get("/test", async (req, res) => {
    let result = [];
    let pizzaImg = [];
    let pizzaName = [];
    let pizzaPrice = [];
    let pizzaOption = [];

    await db.collection("pizza").find().forEach((r) => {
        pizzaImg.push(r.img);
        pizzaName.push(r.name);
        pizzaPrice.push(r.priceL);
        pizzaOption.push("테스트");
    })

    result = {pizzaImg: pizzaImg, pizzaName: pizzaName, pizzaPrice: pizzaPrice, pizzaOption: pizzaOption};
    console.log(result);
    return res.json(result);
})

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
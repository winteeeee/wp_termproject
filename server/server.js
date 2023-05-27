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

app.post("/MenuReg", form_data.single("img"), (req, res) => {
    db.collection("pizza").insertOne({...req.body, img: req.file}).then(() => {
        console.log("데이터 삽입 성공");
    });
    return res.json(req.body);
})

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
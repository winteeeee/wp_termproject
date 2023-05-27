const express = require("express");
const app = express();
const hostname = "127.0.0.1";
const port = 4000;
const bodyParser = require("body-parser");
const multer = require("multer");
const cors = require("cors");
const form_data = multer();
const mongoose= require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/wp_termproject").then(() => {
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
    return res.send("hello worlds");
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
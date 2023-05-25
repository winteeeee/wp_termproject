const express = require("express");
const app = express();const hostname = "127.0.0.1";
const port = 4000;
const bodyParser = require("body-parser");
const multer = require("multer");
const form_data = multer();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(form_data.array());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
}); //CORS 세팅


app.get("/", (req, res) => {
    return res.send("hello worlds");
});

app.post("/MenuReg", (req, res) => {
    console.log(req.body);
    return res.json(req.body);
})

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
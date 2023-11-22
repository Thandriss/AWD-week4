

const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const send = require("send");
let listValue = [];

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


app.get("/recipe/:food", (req, res) => {
    let FoodId = req.params.id;
    let el = {
        name: FoodId, 
        instructions: ["mix", "roll", "eat"],
        ingredients: ["cheese", "flour"]
    };
    res.json(el);
})

app.post("/recipe/", (req, res) => {
    res.json(req.body);
})


app.listen(port, () => console.log("Server listen"))
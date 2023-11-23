

const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const send = require("send");
let listValue = [];
const images = [];
app.use(bodyParser.json()) ;
app.use(bodyParser.urlencoded({ extended: true })) ;

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });

app.use(express.static(path.join(__dirname, "public")));


app.get("/recipe/:food", (req, res) => {
    let FoodId = req.params.food;
    console.log(req.params.food);
    let el = {
        name: FoodId, 
        instructions: ["mix", "roll", "eat"],
        ingredients: ["cheese", "flour"]
    };
    console.log(el);
    res.send(el);
})

app.post("/recipe/", (req, res) => {
    listValue.push(req.body);
    // console.log(listValue);
    res.send(req.body);
})

app.post("/images", (req, res) => {
    images.push(req.body)
    console.log(req.body);
    res.send("Hi");
})


app.listen(port, () => console.log("Server listen"))
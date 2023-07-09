const express = require("express");
const app =express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
let weight;
let height;
let bmi;
app.get("/bmicalculator", function(req, res){

    res.sendFile(__dirname + "/bmiCalculator.html");
})
app.post("/bmicalculator", function(req, res){
    height = req.body.height;
    weight = req.body.weight;
    bmi = weight/(height*height);
    res.send("Your bmi is "+bmi);
})
app.listen(3000, function(){
    console.log("App running on port 3000");
})
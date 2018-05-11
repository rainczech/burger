// import express
const express = require("express");
// import burger.js
const burger = require("../models/burger.js");

// create router

app.get("/", function(req, res){
    burger.all(function(data){
    res.render("index", {
        burgers: data
    })
})
})

app.post("/api/burgers", function(req, res){
    burger.create(function)
})
// export router
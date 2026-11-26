const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send("Hello World");
});

app.get("/add/:a/:b", function(req, res) {
    const sum = Number(req.params.a) + Number(req.params.b);
    res.json({ result: sum });
});

module.exports = app;
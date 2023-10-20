const express = require("express");
const path = require("path");
const app = express();

var nodesRouter = require("./routers/getnodes");
var loginRouter = require("./routers/login");
var updatenodesRouter = require("./routers/updatenodes");
var execconfigRouter = require("./routers/execconfig");
var getcurrentnodeRouter = require("./routers/getcurrentnode");
var subscribeRouter = require("./routers/subscribe");

app.all("*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
    next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/getnodes", nodesRouter);
app.use("/login", loginRouter);
app.use("/updatenodes", updatenodesRouter);
app.use("/execconfig", execconfigRouter);
app.use("/getcurrentnode", getcurrentnodeRouter);
app.use("/subscribe", subscribeRouter);

app.use(function (req, res, next) {
    res.send("404");
    next();
});
app.listen("8002", () => {
    console.log("serve is runing !!");
});
module.exports = app;

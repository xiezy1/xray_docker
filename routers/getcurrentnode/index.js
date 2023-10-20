const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const { startXray } = require("../../utils");

router.get("/", function (req, res, next) {
    let info = fs.readFileSync(path.join(process.cwd(), "routers", "getcurrentnode", "currentnode.json"), "utf-8");
    if (info.uuid) {
        res.send({
            status: 200,
            message: "获取成功",
            currentName: info.nodename,
            nodeuuid: uuid,
        });
    } else {
        res.send({
            status: 201,
            message: "获取失败",
        });
    }
});

function start() {
    let info = fs.readFileSync(path.join(process.cwd(), "routers", "getcurrentnode", "currentnode.json"), "utf-8");
    if (info.uuid) {
        startXray();
    }
}
start();
module.exports = router;

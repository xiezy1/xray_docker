const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");
const { stopXray, statusXray, startXray } = require("../../utils");

router.post("/exec", function (req, res, next) {
    let { uuid } = req.body;
    let list = JSON.parse(fs.readFileSync(path.join(process.cwd(), "routers", "getnodes", "configList.json")));
    let result = [];
    for (let item in list) {
        result = result.concat(list[item]);
    }
    try {
        let { config, nodename } = result.find((item) => {
            return uuid == item.uuid;
        });
        execConfig(config);
        res.send({
            status: 200,
            message: "执行成功等待生效",
        });
        fs.writeFileSync(path.join(process.cwd(), "routers", "getcurrentnode", "currentnode.json"), JSON.stringify({ nodename, uuid }), "utf-8");
    } catch (error) {
        console.log(error);
        res.send({
            status: 201,
            message: "执行失败",
        });
    }
});

router.get("/getStatus", function (req, res, next) {
    try {
        statusXray((statua) => {
            res.send({
                status: 200,
                xrayStatus: statua,
                message: "获取成功",
            });
        });
    } catch (error) {
        res.send({
            status: 201,
            message: "获取失败",
        });
    }
});

router.get("/stopXray", function (req, res, next) {
    stopXray();
    res.send({
        status: 200,
        message: "已经停止",
    });
});

router.get("/startXray", function (req, res, next) {
    startXray();
    res.send({
        status: 200,
        message: "已经停止",
    });
});

router.get("/restartXray", function (req, res, next) {
    startXray();
    res.send({
        status: 200,
        message: "已经停止",
    });
});

function execConfig(config) {
    startXray(config);
}

module.exports = router;

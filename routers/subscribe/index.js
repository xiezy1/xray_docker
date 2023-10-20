const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const { getsubscriptList } = require("../../utils");

router.post("/add", async function (req, res, next) {
    let { subscribename, subscribeurl, isupdate } = req.body;
    isupdate ? isupdate : true;
    try {
        let list = getsubscriptList();
        let uuid = uuidv4();
        list.push({ subscribename, subscribeurl, uuid, isupdate });
        savesubscriptList(list);
    } catch (error) {
        let list = [];
        let uuid = uuidv4();
        list.push({ subscribename, subscribeurl, uuid, isupdate });
        savesubscriptList(list);
    }
    res.send({
        status: 200,
        message: "添加成功",
    });
});

router.post("/del", async function (req, res, next) {
    let { actionArr } = req.body;
    try {
        let list = getsubscriptList() || [];
        actionArr.forEach((value) => {
            list = list.filter((item) => {
                return item.uuid != value.uuid;
            });
        });
        savesubscriptList(list);
    } catch (error) {
        let list = [];
        savesubscriptList(list);
    }
    res.send({
        status: 200,
        message: "删除成功",
    });
});

router.post("/update", async function (req, res, next) {
    let { subscribename, subscribeurl, uuid, isupdate } = req.body;
    try {
        let list = getsubscriptList();
        isupdate ? isupdate : true;
        list = list.map((item) => {
            if (item.uuid == uuid) return { subscribename, subscribeurl, uuid, isupdate };
            else return item;
        });
        savesubscriptList(list);
    } catch (error) {
        let list = [];
        savesubscriptList(list);
    }
    res.send({
        status: 200,
        message: "更新成功",
    });
});

router.get("/get", async function (req, res, next) {
    let list = getsubscriptList();
    res.send({
        status: 200,
        message: "获取成功",
        list,
    });
});

function savesubscriptList(list) {
    fs.writeFileSync(path.join(process.cwd(), "routers", "subscribe", "subscribes.json"), JSON.stringify(list), "utf-8");
}
module.exports = router;

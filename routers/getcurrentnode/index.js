const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

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

module.exports = router;

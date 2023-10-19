const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");

router.post("/", function (req, res, next) {
    let { account, password } = req.body;
    let { account: laccount, password: lpassword } = getAccountInfo();
    if (account == laccount && password == lpassword) {
        res.send({
            status: 200,
            message: "登录成功",
        });
    } else {
        res.send({
            status: 201,
            message: "密码或用户名不正确",
        });
    }
});

function getAccountInfo() {
    return JSON.parse(fs.readFileSync(path.join(process.cwd(), "routers", "login", "user.json"), "utf-8"));
}

module.exports = router;

const express = require("express");
const router = express.Router();
const axios = require("axios").default;
const path = require("path");
const fs = require("fs");

router.get("/", async function (req, res, next) {
    res.send(fs.readFileSync(path.join(process.cwd(), "routers", "getnodes", "configList.json")));
});

module.exports = router;

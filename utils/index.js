const execs = require("child_process").exec;
const fs = require("fs");
const path = require("path");

function stopXray() {
    execs("ps -a", (err, so, se) => {
        let result = so.split("\n").find((item) => item.includes("xray"));
        console.log(result);
        if (!result) return;
        let pid = result.split(" ")[1];
        console.log(pid);
        execs(`kill -9 ${pid}`, (err, so, se) => {});
    });
}

function statusXray(cb) {
    execs("ps -a", (err, so, se) => {
        let result = so.split("\n").find((item) => item.includes("xray"));
        if (result) cb(true);
        else cb(false);
    });
}

function startXray(config) {
    stopXray();
    fs.writeFileSync("/usr/local/Xray/config.json", JSON.stringify(config), "utf-8");
    execs("/usr/local/Xray/xray", (err, so, se) => {});
}

function getsubscriptList() {
    try {
        return JSON.parse(fs.readFileSync(path.join(process.cwd(), "routers", "subscribe", "subscribes.json"), "utf-8"));
    } catch (error) {
        return [];
    }
}

module.exports = {
    stopXray,
    statusXray,
    startXray,
    getsubscriptList,
};

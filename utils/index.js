const execs = require("child_process").exec;
const fs = require("fs");
function stopXray() {
    execs("ps -a", (err, so, se) => {
        let result = so.split("\n").find((item) => item.includes("xray"));
        if (!result) return;
        let pid = result.split(" ")[1];
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

module.exports = {
    stopXray,
    statusXray,
    startXray,
};

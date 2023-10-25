const execs = require("child_process").exec;
const fs = require("fs");
const path = require("path");

function stopXray() {
    execs("ps -a", (err, so, se) => {
        let result = so.split("\n").find((item) => item.includes("xray"));
        if (!result) return;
        let strArr = result.split(" ");
        let pid = strArr[strArr.findIndex((item) => item.includes("pts")) - 1];
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
    if (config) fs.writeFileSync("/usr/local/Xray/config.json", JSON.stringify(config), "utf-8");
    else console.log("使用默认config：/usr/local/Xray/config.json");
    const spawn = require("child_process").spawn;
    const ls = spawn("/usr/local/Xray/xray");

    ls.stdout.on("data", (data) => {
        console.log(`stdout: ${data}`);
    });

    ls.stderr.on("data", (data) => {
        console.error(`stderr: ${data}`);
    });

    ls.on("close", (code) => {
        console.log(`child process exited with code ${code}`);
    });
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

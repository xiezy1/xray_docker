const express = require("express");
const router = express.Router();
const axios = require("axios").default;
const path = require("path");
const fs = require("fs");
const Xray_config = require("../updatenodes/formate_xray_config");

router.get("/", async function (req, res, next) {
    res.send({
        status: 200,
        message: "后台更新中...",
    });
    let allConfiglist = {};
    let allNodesNamelist = {};
    for (let { name, url, isUpdate } of sss) {
        if (!isUpdate) return;
        let nodes = await getnodes(url);
        let configlist = [];
        let nodesnamelist = [];
        nodes.forEach((item) => {
            let [protocol, node] = item.split("://");
            if (protocol == "trojan") return;
            let nodeInfo = new Xray_config(protocol, node).formate();
            let { nodename, config, uuid } = nodeInfo;
            if (/过期|时间|流量|套餐|到期|剩余/g.test(nodename.trim())) return;
            nodesnamelist.push({
                name: nodename,
                uuid,
            });
            configlist.push({
                name: nodename,
                uuid,
                config,
            });
        });
        allConfiglist[name] = configlist;
        allNodesNamelist[name] = nodesnamelist;
    }
    fs.writeFileSync(path.join(process.cwd(), "routers", "getnodes", "configList.json"), JSON.stringify(allConfiglist), "utf-8");
    fs.writeFileSync(path.join(process.cwd(), "routers", "getnodes", "nodesNameList.json"), JSON.stringify(allNodesNamelist), "utf-8");
});

function getnodes(url) {
    return axios.get(url).then((res) =>
        Buffer.from(res.data, "base64")
            .toString("utf-8")
            .split("\n")
            .filter((item) => item.trim() != "")
    );
}

let sss = [
    {
        name: "peiqian",
        isUpdate: true,
        url: "https://pqjc.site/api/v1/client/subscribe?token=e5ad721768f5ce6f362cff754c71970e",
    },
    {
        name: "ikuuu",
        isUpdate: true,
        url: "https://api.sub-300.club/link/aouVZVLBtQnd4nL3?sub=3&extend=1",
    },
];
module.exports = router;

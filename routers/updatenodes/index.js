const express = require("express");
const router = express.Router();
const axios = require("axios").default;
const path = require("path");
const fs = require("fs");
const Xray_config = require("../updatenodes/formate_xray_config");
const { getsubscriptList } = require("../../utils");

router.get("/", async function (req, res, next) {
    res.send({
        status: 200,
        message: "后台更新中...",
    });

    let allConfiglist = {};
    let allNodesNamelist = {};
    let subscriptList = getsubscriptList();
    for (let { subscribename, subscribeurl, isupdate } of subscriptList) {
        if (!isupdate) return;
        let nodes = await getnodes(subscribeurl);
        let configlist = [];
        let nodesnamelist = [];
        nodes.forEach((item) => {
            let [protocol, node] = item.split("://");
            let nodeInfo = new Xray_config(protocol, node).formate();
            let { nodename, config, uuid } = nodeInfo;
            if (/过期|时间|流量|套餐|到期|剩余/g.test(nodename.trim())) return;
            nodesnamelist.push({
                nodename,
                uuid,
            });
            configlist.push({
                nodename,
                uuid,
                config,
            });
        });
        allConfiglist[subscribename] = configlist;
        allNodesNamelist[subscribename] = nodesnamelist;
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

module.exports = router;

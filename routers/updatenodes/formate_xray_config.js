const { v4: uuidv4 } = require("uuid");

module.exports = class Xray_config {
    constructor(protocol, node) {
        this.protocol = protocol;
        this.node = node;
    }

    getVlessBaseConfig() {
        return {
            policy: {
                system: {
                    statsOutboundUplink: true,
                    statsOutboundDownlink: true,
                },
            },
            log: {
                access: "",
                error: "",
                loglevel: "warning",
            },
            inbounds: [
                {
                    tag: "socks",
                    port: 10808,
                    listen: "0.0.0.0",
                    protocol: "socks",
                    sniffing: {
                        enabled: true,
                        destOverride: ["http", "tls"],
                        routeOnly: false,
                    },
                    settings: {
                        auth: "noauth",
                        udp: true,
                        allowTransparent: false,
                    },
                },
                {
                    tag: "http",
                    port: 10809,
                    listen: "0.0.0.0",
                    protocol: "http",
                    sniffing: {
                        enabled: true,
                        destOverride: ["http", "tls"],
                        routeOnly: false,
                    },
                    settings: {
                        auth: "noauth",
                        udp: true,
                        allowTransparent: false,
                    },
                },
                {
                    tag: "api",
                    port: 1435,
                    listen: "127.0.0.1",
                    protocol: "dokodemo-door",
                    settings: {
                        udp: false,
                        address: "127.0.0.1",
                        allowTransparent: false,
                    },
                },
            ],
            outbounds: [
                {
                    tag: "proxy",
                    protocol: "vless",
                    settings: {
                        vnext: [
                            {
                                address: "",
                                port: 0,
                                users: [
                                    {
                                        id: "",
                                        alterId: 0,
                                        email: "t@t.tt",
                                        security: "auto",
                                        encryption: "",
                                        flow: "",
                                    },
                                ],
                            },
                        ],
                    },
                    streamSettings: {
                        network: "",
                        security: "",
                        realitySettings: {
                            serverName: "",
                            fingerprint: "",
                            show: false,
                            publicKey: "",
                            shortId: "",
                            spiderX: "",
                        },
                    },
                    mux: {
                        enabled: false,
                        concurrency: -1,
                    },
                },
                {
                    tag: "direct",
                    protocol: "freedom",
                    settings: {},
                },
                {
                    tag: "block",
                    protocol: "blackhole",
                    settings: {
                        response: {
                            type: "http",
                        },
                    },
                },
            ],
            stats: {},
            api: {
                tag: "api",
                services: ["StatsService"],
            },
            routing: {
                domainStrategy: "AsIs",
                domainMatcher: "linear",
                rules: [
                    {
                        type: "field",
                        inboundTag: ["api"],
                        outboundTag: "api",
                        enabled: true,
                    },
                    {
                        id: "5573544321473649449",
                        type: "field",
                        outboundTag: "direct",
                        domain: ["geosite:steam@cn", "geosite:category-games@cn", "alist.xiezy.top", "bt.xiezy.top"],
                        enabled: true,
                    },
                    {
                        id: "5608343126673784991",
                        type: "field",
                        outboundTag: "block",
                        domain: ["geosite:category-ads-all"],
                        enabled: true,
                    },
                    {
                        id: "5328669631602965697",
                        type: "field",
                        outboundTag: "direct",
                        domain: ["geosite:cn", "ql.xiezy.top"],
                        enabled: true,
                    },
                    {
                        id: "5331706993570040446",
                        type: "field",
                        outboundTag: "direct",
                        ip: ["geoip:private", "geoip:cn"],
                        enabled: true,
                    },
                    {
                        id: "5762839362648766503",
                        type: "field",
                        port: "0-65535",
                        outboundTag: "proxy",
                        domain: ["geosite:geolocation-!cn"],
                        enabled: true,
                    },
                ],
            },
        };
    }

    getVmessBaseConfig() {
        return {
            policy: {
                system: {
                    statsOutboundUplink: true,
                    statsOutboundDownlink: true,
                },
            },
            log: {
                access: "",
                error: "",
                loglevel: "warning",
            },
            inbounds: [
                {
                    tag: "socks",
                    port: 10808,
                    listen: "0.0.0.0",
                    protocol: "socks",
                    sniffing: {
                        enabled: true,
                        destOverride: ["http", "tls"],
                        routeOnly: false,
                    },
                    settings: {
                        auth: "noauth",
                        udp: true,
                        allowTransparent: false,
                    },
                },
                {
                    tag: "http",
                    port: 10809,
                    listen: "0.0.0.0",
                    protocol: "http",
                    sniffing: {
                        enabled: true,
                        destOverride: ["http", "tls"],
                        routeOnly: false,
                    },
                    settings: {
                        auth: "noauth",
                        udp: true,
                        allowTransparent: false,
                    },
                },
                {
                    tag: "api",
                    port: 1349,
                    listen: "127.0.0.1",
                    protocol: "dokodemo-door",
                    settings: {
                        udp: false,
                        address: "127.0.0.1",
                        allowTransparent: false,
                    },
                },
            ],
            outbounds: [
                {
                    tag: "proxy",
                    protocol: "vmess",
                    settings: {
                        vnext: [
                            {
                                address: "",
                                port: "",
                                users: [
                                    {
                                        id: "",
                                        alterId: 1,
                                        email: "t@t.tt",
                                        security: "auto",
                                    },
                                ],
                            },
                        ],
                    },
                    streamSettings: {
                        network: "tcp",
                        security: "tls",
                        tlsSettings: {
                            allowInsecure: false,
                            show: false,
                        },
                    },
                    mux: {
                        enabled: false,
                        concurrency: -1,
                    },
                },
                {
                    tag: "direct",
                    protocol: "freedom",
                    settings: {},
                },
                {
                    tag: "block",
                    protocol: "blackhole",
                    settings: {
                        response: {
                            type: "http",
                        },
                    },
                },
            ],
            stats: {},
            api: {
                tag: "api",
                services: ["StatsService"],
            },
            routing: {
                domainStrategy: "AsIs",
                domainMatcher: "linear",
                rules: [
                    {
                        type: "field",
                        inboundTag: ["api"],
                        outboundTag: "api",
                        enabled: true,
                    },
                    {
                        id: "5573544321473649449",
                        type: "field",
                        outboundTag: "direct",
                        domain: ["geosite:steam@cn", "geosite:category-games@cn", "alist.xiezy.top", "bt.xiezy.top"],
                        enabled: true,
                    },
                    {
                        id: "5608343126673784991",
                        type: "field",
                        outboundTag: "block",
                        domain: ["geosite:category-ads-all"],
                        enabled: true,
                    },
                    {
                        id: "5328669631602965697",
                        type: "field",
                        outboundTag: "direct",
                        domain: ["geosite:cn", "ql.xiezy.top"],
                        enabled: true,
                    },
                    {
                        id: "5331706993570040446",
                        type: "field",
                        outboundTag: "direct",
                        ip: ["geoip:private", "geoip:cn"],
                        enabled: true,
                    },
                    {
                        id: "5762839362648766503",
                        type: "field",
                        port: "0-65535",
                        outboundTag: "proxy",
                        domain: ["geosite:geolocation-!cn"],
                        enabled: true,
                    },
                ],
            },
        };
    }

    splitVmess() {
        return JSON.parse(Buffer.from(this.node, "base64").toString("utf-8"));
    }

    splitVless() {
        let node = decodeURIComponent(this.node);
        let temp = node.split("#");
        let nodename = temp[1];
        temp = temp[0].split("@");
        let userId = temp[0];
        temp = temp[1].split("?");
        let [address, port] = temp[0].split(":");
        temp = temp[1].split("&");

        let [type, encryption, security, flow, sni, pbk, sid, headerType, fp] = temp.map((item) => {
            return item.split("=")[1];
        });
        return {
            type,
            encryption,
            security,
            flow,
            sni,
            pbk,
            sid,
            headerType,
            fp,
            userId,
            address,
            port,
            nodename,
        };
    }

    formate() {
        if (this.protocol == "vmess") {
            return this.editConfig(this.getVmessBaseConfig(), this.splitVmess());
        } else if (this.protocol == "vless") {
            return this.editConfig(this.getVlessBaseConfig(), this.splitVless());
        }
    }
    editConfig(config, dataObject) {
        let nodename;
        let uuid = uuidv4();
        if (this.protocol == "vmess") {
            for (let key in dataObject) {
                if (key == "ps") {
                    nodename = dataObject[key];
                } else if (key == "net") {
                    config["outbounds"][0]["streamSettings"]["network"] = dataObject[key];
                } else if (key == "tls") {
                    config["outbounds"][0]["streamSettings"]["security"] = dataObject[key];
                } else if (key == "add") {
                    config["outbounds"][0]["settings"]["vnext"][0]["address"] = dataObject[key];
                } else if (key == "port") {
                    config["outbounds"][0]["settings"]["vnext"][0]["port"] = Number(dataObject[key]);
                } else if (key == "aid") {
                    config["outbounds"][0]["settings"]["vnext"][0]["alterId"] = Number(dataObject[key]);
                } else if (key == "id") {
                    config["outbounds"][0]["settings"]["vnext"][0]["id"] = dataObject[key];
                }
            }
        } else if (this.protocol == "vless") {
            for (let key in dataObject) {
                if (key == "type") {
                    config["outbounds"][0]["streamSettings"]["network"] = dataObject[key];
                } else if (key == "encryption") {
                    config["outbounds"][0]["settings"]["vnext"][0]["users"][0]["encryption"] = dataObject[key];
                } else if (key == "userId") {
                    config["outbounds"][0]["settings"]["vnext"][0]["users"][0]["id"] = dataObject[key];
                } else if (key == "flow") {
                    config["outbounds"][0]["settings"]["vnext"][0]["users"][0]["flow"] = dataObject[key];
                } else if (key == "address") {
                    config["outbounds"][0]["settings"]["vnext"][0]["address"] = dataObject[key];
                } else if (key == "port") {
                    config["outbounds"][0]["settings"]["vnext"][0]["port"] = Number(dataObject[key]);
                } else if (key == "security") {
                    config["outbounds"][0]["streamSettings"]["security"] = dataObject[key];
                } else if (key == "sni") {
                    config["outbounds"][0]["streamSettings"]["realitySettings"]["serverName"] = dataObject[key];
                } else if (key == "pbk") {
                    config["outbounds"][0]["streamSettings"]["realitySettings"]["publicKey"] = dataObject[key];
                } else if (key == "sid") {
                    config["outbounds"][0]["streamSettings"]["realitySettings"]["shortId"] = dataObject[key];
                } else if (key == "fp") {
                    config["outbounds"][0]["streamSettings"]["realitySettings"]["fingerprint"] = dataObject[key];
                } else if (key == "nodename") {
                    nodename = dataObject[key];
                }
            }
        }
        // console.log(config["outbounds"][0]["settings"]["vnext"][0]["users"]);
        return {
            nodename,
            config,
            uuid,
        };
    }
};

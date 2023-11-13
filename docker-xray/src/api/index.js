import axios from "axios";

let http = axios.create({
    baseURL: "http://192.168.1.211:8002",
    // baseURL: "http://127.0.0.1:8002",
});
export function getNodesList() {
    return http.get("/getnodes").then((res) => res.data);
}

export function updateConfig(data) {
    return http.post("/execconfig/exec", data).then((res) => res.data);
}

export function getXrayStatus() {
    return http.get("/execconfig/getStatus").then((res) => res.data);
}

export function stopXray(data) {
    return http.get("/execconfig/stopXray", data).then((res) => res.data);
}

export function startXray() {
    return http.get("/execconfig/startXray").then((res) => res.data);
}

export function restartXray(data) {
    return http.get("/execconfig/restartXray", data).then((res) => res.data);
}

export function getCurrentNode(data) {
    return http.get("/getcurrentnode", data).then((res) => res.data);
}

export function updateSubscribe(data) {
    return http.get("/updatenodes", data).then((res) => res.data);
}

export function getSubscribe() {
    return http.get("/subscribe/get").then((res) => res.data);
}
export function addSubscribe(data) {
    return http.post("/subscribe/add", data).then((res) => res.data);
}
export function delSubscribe(data) {
    return http.post("/subscribe/del", data).then((res) => res.data);
}
export function editSubscribe(data) {
    return http.post("/subscribe/update", data).then((res) => res.data);
}

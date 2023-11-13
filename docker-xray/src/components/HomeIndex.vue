<template>
    <div class="content">
        <el-form ref="form" label-width="80px">
            <el-form-item label="运行状态">
                <div class="xray_status">
                    <span :class="xrayStatus ? 'green' : 'gary'">{{ xrayStatus ? "运行中" : "未运行" }}</span>
                </div>
            </el-form-item>
            <el-form-item label="xray操作">
                <el-row>
                    <el-col :span="4">
                        <el-button type="danger" @click="stopXray">关闭</el-button>
                    </el-col>
                    <el-col :span="4">
                        <el-button type="success" @click="startXray">开启</el-button>
                    </el-col>
                    <el-col :span="4">
                        <el-button type="warning" @click="restartXray">重启</el-button>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item label="当前节点">
                <div class="xray_status">{{ currentnode }}</div>
            </el-form-item>
            <el-form-item label="选择节点">
                <el-select v-model="value" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.uuid" :label="item.nodename" :value="item.uuid"> </el-option>
                </el-select>
            </el-form-item>
        </el-form>
        <el-row>
            <el-col :span="4" :offset="16">
                <el-button type="primary" @click="updateConfig">确定执行</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import { getNodesList, updateConfig, getXrayStatus, getCurrentNode, stopXray, startXray, restartXray } from "../api";
export default {
    data() {
        return {
            options: [],
            value: "",
            xrayStatus: true,
            currentnode: "",
        };
    },
    methods: {
        getNodeslist() {
            getNodesList().then((res) => {
                for (let item in res) {
                    this.options = this.options.concat(res[item]);
                }
            });
        },
        updateConfig() {
            updateConfig({
                uuid: this.value,
            })
                .then((res) => {
                    console.log(res);
                })
                .finally(() => {
                    this.getXrayStatus();
                });
        },
        getXrayStatus() {
            getXrayStatus().then((res) => {
                this.xrayStatus = res.xrayStatus;
            });
        },

        getCurrentNode() {
            getCurrentNode().then((res) => {
                if (res.status == 200) this.currentnode = res.currentName;
                else this.currentnode = "未获取到";
            });
        },

        stopXray() {
            stopXray();
            this.getXrayStatus();
        },

        startXray() {
            startXray();
            this.getXrayStatus();
        },

        restartXray() {
            restartXray();
            this.getXrayStatus();
        },
    },
    mounted() {
        this.getNodeslist();
        this.getXrayStatus();
        this.getCurrentNode();
    },
};
</script>

<style scoped>
.green {
    color: green;
    font-weight: 900;
}
.gary {
    color: gary;
    font-weight: 900;
}
</style>

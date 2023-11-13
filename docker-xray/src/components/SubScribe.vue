<template>
    <div class="sub">
        <el-row :gutter="20" style="margin-bottom: 20px">
            <el-col :span="4">
                <el-button type="primary" @click="centerDialogVisible = true">添加</el-button>
            </el-col>
            <el-col :span="4">
                <el-button type="danger" @click="delSubscribe">删除</el-button>
            </el-col>
            <el-col :span="4">
                <el-button type="warning" @click="updateSubscribe">更新订阅</el-button>
            </el-col>
        </el-row>
        <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @select="select" @select-all="selectAll">
            <el-table-column type="selection" width="55"> </el-table-column>
            <el-table-column prop="subscribename" label="订阅别名" width="80"> </el-table-column>
            <!-- <el-table-column prop="subscribeurl" label="订阅地址" width="200"></el-table-column> -->
            <el-table-column prop="subscribeurl" label="订阅地址" width="200">
                <template slot-scope="scope">
                    <div class="subscribeurl">{{ scope.row.subscribeurl }}</div>
                </template>
            </el-table-column>
            <el-table-column prop="isupdate" label="启用更新">
                <template slot-scope="scope">
                    {{ scope.row.isupdate }}
                </template>
            </el-table-column>
            <el-table-column fixed="right" label="操作">
                <template slot-scope="scope">
                    <el-button type="text" size="small" @click="editSubscribe(scope.row)">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-dialog title="xray" :visible.sync="centerDialogVisible" width="40%" center>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="订阅别名" prop="subscribename">
                    <el-input v-model="ruleForm.subscribename"></el-input>
                </el-form-item>
                <el-form-item label="订阅地址" prop="subscribeurl">
                    <el-input v-model="ruleForm.subscribeurl"></el-input>
                </el-form-item>
                <el-form-item label="启用更新" prop="isupdate">
                    <el-switch v-model="ruleForm.isupdate"></el-switch>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
import { updateSubscribe, delSubscribe, getSubscribe, addSubscribe, editSubscribe } from "../api";
export default {
    data() {
        return {
            tableData: [
                {
                    isupdate: true,
                    uuid: "1",
                    subscribename: "ikuuu",
                    subscribeurl: "http://www.baidu.com",
                },
                {
                    isupdate: true,
                    uuid: "2",
                    subscribename: "ikuuu",
                    subscribeurl: "http://www.baidu.com",
                },
            ],
            needActionArr: [],
            centerDialogVisible: false,
            ruleForm: {
                subscribename: "",
                subscribeurl: "",
                isupdate: true,
            },
            rules: {
                subscribename: [
                    { required: true, message: "请输入订阅别名", trigger: "blur" },
                    { min: 2, max: 10, message: "长度大于2字符", trigger: "blur" },
                ],
                subscribeurl: [
                    { required: true, message: "请输入订阅地址", trigger: "blur" },
                    { min: 2, max: 100, message: "订阅地址地址过长请简化地址", trigger: "blur" },
                ],
            },
            actionType: "add",
        };
    },
    methods: {
        select(currentarr, current) {
            if (
                this.needActionArr.length > 0 &&
                this.needActionArr.findIndex(({ uuid }) => {
                    current.uuid == uuid;
                })
            )
                return;
            else this.needActionArr.push(current);
        },
        selectAll(currentarr) {
            this.needActionArr = currentarr;
        },
        updateSubscribe() {
            updateSubscribe()
                .then((res) => {
                    this.$message.info(res.message);
                })
                .finally(() => {
                    setTimeout(() => {
                        this.getSubscribe();
                    }, 2000);
                });
        },
        getSubscribe() {
            getSubscribe().then((res) => {
                if (res.status == 200) {
                    this.tableData = res.list;
                } else {
                    this.$message.error(res.message);
                }
            });
        },
        delSubscribe() {
            if (!this.needActionArr.length) return this.$message.info("未选择要删除的项");
            delSubscribe({ actionArr: this.needActionArr })
                .then((res) => {
                    this.$message.success(res.message);
                })
                .catch((res) => {
                    this.$message.error(res.message);
                })
                .finally(() => {
                    this.getSubscribe();
                });
        },
        editSubscribe(row) {
            if (!this.needActionArr) return this.$message.info("未选择要编辑的项");
            this.ruleForm = row;
            this.actionType = "edit";
            this.centerDialogVisible = true;
        },

        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid && this.actionType == "add") {
                    addSubscribe(this.ruleForm)
                        .then((res) => {
                            this.$message.success(res.message);
                        })
                        .catch((res) => {
                            this.$message.error(res.message);
                        })
                        .finally(() => {
                            this.centerDialogVisible = false;
                            this.getSubscribe();
                            this.ruleForm = {
                                subscribename: "",
                                subscribeurl: "",
                                isupdate: true,
                            };
                        });
                } else if (valid && this.actionType == "edit") {
                    editSubscribe(this.ruleForm)
                        .then((res) => {
                            this.$message.success(res.message);
                        })
                        .catch((res) => {
                            this.$message.error(res.message);
                        })
                        .finally(() => {
                            this.centerDialogVisible = false;
                            this.getSubscribe();
                            this.ruleForm = {
                                subscribename: "",
                                subscribeurl: "",
                                isupdate: true,
                            };
                        });
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
    },
    mounted() {
        this.getSubscribe();
    },
};
</script>

<style scoped>
.subscribeurl {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 200px;
}
</style>

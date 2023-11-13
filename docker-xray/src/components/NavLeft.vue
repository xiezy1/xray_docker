<template>
    <div class="nav">
        <el-menu :default-active="$route.path" class="el-menu-vertical-demo" router>
            <el-menu-item index="/home">
                <i class="el-icon-menu"></i>
                <span slot="title">节点&xray</span>
            </el-menu-item>
            <el-menu-item index="/subScribe">
                <i class="el-icon-menu"></i>
                <span slot="title">节点订阅</span>
            </el-menu-item>
            <el-menu-item index="/setting">
                <i class="el-icon-document"></i>
                <span slot="title">高级设置</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
};
</script>

<style scoped>
.nav >>> ul {
    border: none;
}
</style>

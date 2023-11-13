<template>
    <div class="ss">
        <el-header>
            <div class="header">xray status</div>
        </el-header>
        <el-container>
            <el-aside class="aside" width="200px"><NavLeftVue /></el-aside>
            <el-main>
                <router-view />
            </el-main>
        </el-container>
    </div>
</template>

<script>
import NavLeftVue from "./components/NavLeft.vue";

export default {
    name: "App",
    components: {
        NavLeftVue,
    },
};
</script>

<style>
body {
    padding: 0;
    margin: 0 auto;
    width: 800px;
}

.header {
    text-align: center;
    line-height: 60px;
    width: 100%;
    font-size: 30px;
}
.aside {
    height: 100vh;
}
</style>

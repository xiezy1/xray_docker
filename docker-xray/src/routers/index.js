import Vue from "vue";
import VueRouter from "vue-router";

const routes = [
    { path: "/subScribe", component: () => import("@/components/SubScribe.vue"), name: "SubScribe" },
    { path: "/home", component: () => import("@/components/HomeIndex.vue"), name: "Home" },
    { path: "/setting", component: () => import("@/components/ConfigOption.vue"), name: "ConfigOption" },
    { path: "/", redirect: "/home" },
];

const router = new VueRouter({
    routes,
});
Vue.use(VueRouter);

export default router;

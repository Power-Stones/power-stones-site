import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import homeSite from "../pages/home.vue";
import visualNovel from "../pages/visualNovel.vue";

const routes = [
    {
        path: '/',
        component: homeSite
    },
    {
        path: "/visual-novel",
        component: visualNovel
    }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import homeSite from "../pages/home.vue";

const routes = [
    {
        path: '/',
        component: homeSite
    }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;
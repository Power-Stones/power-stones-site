import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import homeSite from "../pages/home.vue";
import visualNovel from "../pages/visualNovel.vue";
import loginPage from "../pages/loginPage.vue";
import registerPage from "../pages/registerPage.vue";

const routes = [
    {
        path: '/',
        component: homeSite
    },
    {
        path: "/visual-novel",
        component: visualNovel
    },
    {
        path: "/login",
        component: loginPage
    },
    {
        path: "/register",
        component: registerPage
    }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;
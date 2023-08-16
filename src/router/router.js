import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import homeSite from "../pages/home.vue";
import visualNovel from "../pages/visualNovel.vue";
import loginPage from "../pages/loginPage.vue";
import registerPage from "../pages/registerPage.vue";
import profilePage from "../pages/profilePage.vue";
import adminPage from "../pages/adminPage.vue";
import listChaptersAndScenes from "../components/listChaptersAndScenes.vue";
import createChapter from "../components/createChapter.vue";

import testeComponent from "../pages/testeComponent.vue";

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
    },
    {
        path: "/profile",
        component: profilePage
    },
    {
        path: "/admin",
        component: adminPage,
        children: [
            {
                path: '',
                component: listChaptersAndScenes
            },
            {
                path: "create-chapter:id?",
                component: createChapter
            }
        ]
    },

    
    {
        path: "/teste",
        component: testeComponent
    }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;
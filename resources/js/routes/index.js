import Vue from "vue";
import VueRouter from "vue-router";
import { Home, Login, Register, Dashboard } from "../modules";
import Store from "../stores/index";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: Home,
        name: "home"
    },
    {
        path: "/login",
        component: Login,
        name: "auth.login"
    },
    {
        path: "/register",
        component: Register,
        name: "auth.register"
    },
    {
        path: "/dashboard",
        component: Dashboard,
        meta: {
            requiresAuth: true
        }
    }
];

const router = new VueRouter({
    routes,
    mode: "history"
});

export default router;

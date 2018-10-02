import Vue from "vue";
import VueRouter from "vue-router";
import { Home, Login, Register, Dashboard } from "../modules";
import Store from "./../stores";

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

router.beforeEach((to, from, next) => {
    console.log(Store.getters["global/isLoggedIn"]);
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const isLoggedIn = Store.getters["global/isLoggedIn"];

    if (requiresAuth && !isLoggedIn) {
        next("/login");
    } else if (
        (to.path === "/login" && isLoggedIn) ||
        (to.path === "/register" && isLoggedIn)
    ) {
        next("/dashboard");
    } else {
        next();
    }
});

export default router;

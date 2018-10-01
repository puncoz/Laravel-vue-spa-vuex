require("./bootstrap");

import Vue from "vue";
import MainApp from "./MainApp";
import stores from "./stores/index";
import Router from "./routes";

// Router.beforeEach((to, from, next) => {
//     console.log(stores.state.global.isLoggedIn);

//     let requiresAuth = to.matched.some(record => record.meta.requiresAuth);
//     // console.log(requiresAuth);
//     // if (requiresAuth && !currentUser) next("login");
//     // else if (!requiresAuth && currentUser) next("admin");
//     // else next();
// });

const app = new Vue({
    el: "#app",

    router: Router,
    store: stores,

    render: h => h(MainApp)
});

require("./bootstrap");

import Vue from "vue";
import MainApp from "./MainApp";
import stores from "./stores/index";
import Router from "./routes";

const app = new Vue({
    el: "#app",

    router: Router,
    store: stores,

    render: h => h(MainApp)
});

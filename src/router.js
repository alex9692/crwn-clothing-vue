import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Homepage from "./views/Homepage.vue";

const routes = [{ path: "/", component: Homepage }];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;

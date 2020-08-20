import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Homepage from "./views/Homepage.vue";
const Shoppage = () => import("./views/Shop.vue");
const Authpage = () => import("./views/Authenticate.vue");

const routes = [
  { path: "/", component: Homepage },
  { path: "/shop", component: Shoppage },
  { path: "/auth", component: Authpage },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;

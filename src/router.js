import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Homepage from "./views/Homepage.vue";
import Hatspage from "./views/Hatspage.vue";

const routes = [
  { path: "/", component: Homepage },
  { path: "/shop/hats", component: Hatspage },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;

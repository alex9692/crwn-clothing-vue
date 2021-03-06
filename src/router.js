import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import store from "./store";
import Homepage from "./views/Homepage.vue";

const Shoppage = () => import("./views/Shop.vue");
const Authpage = () => import("./views/Authenticate.vue");
const Checkout = () => import("./views/Checkout.vue");
const Collection = () => import("./views/Collection.vue");
const CollectionOverview = () =>
  import("./components/CollectionOverview.component.vue");

const routes = [
  { path: "/", component: Homepage },
  {
    path: "/shop",
    component: Shoppage,
    children: [
      {
        path: "",
        component: CollectionOverview,
      },
      {
        path: ":collectionId",
        component: Collection,
      },
    ],
  },
  {
    path: "/auth",
    component: Authpage,
    beforeEnter: (to, from, next) => {
      if (!store.getters["user/isAuth"]) {
        const watcher = store.watch(
          (state) => {
            return state.user.currentUser;
          },
          (currentUser) => {
            watcher();
            if (currentUser) {
              next("/");
            } else {
              next();
            }
          }
        );
      }
      next();
    },
  },
  { path: "/checkout", component: Checkout },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;

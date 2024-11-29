import Vue from "vue";
import Router from "vue-router";
import Catalog from "../pages/Catalog.vue";

Vue.use(Router);

const routes = [
  {
    path: "/catalog",
    name: "Catalog",
    component: Catalog,
  },
  {
    path: "/",
    redirect: "/catalog",
  },
];

const router = new Router({
  mode: "history",
  routes,
});

export default router;

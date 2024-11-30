import Vue from "vue";
import Router from "vue-router";
import Catalog from "../pages/Catalog.vue";
import Delivery from "@/pages/Delivery.vue";

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
  {
    path: "/delivery",
    name: "Delivery",
    component: Delivery,
  },
];

const router = new Router({
  mode: "history",
  routes,
});

export default router;

import Vue from "vue";
import Router from "vue-router";
import HomePage from "../pages/HomePage.vue";

Vue.use(Router);

const routes = [
  {
    path: "/homepage",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/",
    redirect: "/homepage",
  },
];

const router = new Router({
  mode: "history",
  routes,
});

export default router;

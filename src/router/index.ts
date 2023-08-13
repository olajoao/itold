import { createRouter, createWebHistory } from "vue-router";
import AppHome from "../views/AppHome.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: AppHome,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

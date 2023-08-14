import { createRouter, createWebHistory } from "vue-router";
import AppHome from "../views/AppHome.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: AppHome,
  },
  {
    path: "/movie/:id",
    name: "movie",
    component: () => import("@views/movies/Movie.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "ErrorPage",
    component: () => import("@views/ErrorPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

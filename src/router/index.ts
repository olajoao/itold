import { createRouter, createWebHistory } from "vue-router";
import AppHome from "../views/AppHome.vue";
import Movie from "../views/movies/Movie.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: AppHome,
  },
  {
    path: "/movie/:id",
    name: "movie",
    component: Movie,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

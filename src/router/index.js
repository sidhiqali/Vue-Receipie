import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: DefaultLayout,
      children: [
        {
          path: "/",
          name: "home",
          component: Home,
        },
        {
          path: "/by-name/:name?",
          name: "byname",
          component: () => import("../views/Search.vue"),
        },
        {
          path: "/by-letter/:letter?",
          name: "byletter",
          component: () => import("../views/Letter.vue"),
        },
        {
          path: "/incredient",
          name: "incredient",
          component: () => import("../views/incredients.vue"),
        },
        {
          path: "/by-incredient/:ingredient",
          name: "byIngredient",
          component: () => import("../views/ByIncredient.vue"),
        },
        {
          path: "/meal/:id",
          name: "mealDetails",
          component: () => import("../views/Meal.vue"),
        },
      ],
    },
  ],
});

export default router;

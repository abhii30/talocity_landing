import { createRouter, createWebHistory } from "vue-router";
import Landing from "../components/Landing.vue";
import LandingBrand from "../components/LandingBrand.vue";
import About from "../components/AboutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Landing,
    },
    {
      path: "/:brand",
      name: "brand",
      component: LandingBrand,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
  ],
});

export default router;

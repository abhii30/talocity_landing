import { createRouter, createWebHistory } from "vue-router";
import Landing from "../UI/Landing.vue";
import LandingBrand from "../UI/LandingBrand.vue";
// import About from "../UI/AboutView.vue";

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
    // {
    //   path: "/about",
    //   name: "about",
    //   component: About,
    // },
  ],
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import Landing from "../UI/Landing.vue";
import LandingBrand from "../UI/LandingBrand.vue";
// import About from "../UI/AboutView.vue";
// import ProgressBar from "../components/ProgressBar.vue";
// import Draft from "../components/Draft.vue";
import Drafts from "../UI/Drafts.vue";

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
      component: Drafts,
    },
  ],
});

export default router;

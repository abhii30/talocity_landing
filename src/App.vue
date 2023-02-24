<script>
import { RouterLink, RouterView } from "vue-router";
import Landing from "./components/Landing.vue";
import ThemeButton from "./components/ThemeButton.vue";
export default {
  components: {
    Landing,
    ThemeButton,
  },
};
</script>

<template>
  <!-- <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav> -->
  <!-- <ThemeButton /> -->
  <!-- <Landing /> -->
  <RouterView />
</template>
<style></style>

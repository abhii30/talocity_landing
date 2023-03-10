<script>
import { RouterLink, RouterView } from "vue-router";
import Landing from "./components/Landing.vue";
import ThemeButton from "./components/ThemeButton.vue";
import "@mdi/font/css/materialdesignicons.min.css";
import SalesForm from "./components/SalesForm.vue";
export default {
  components: {
    Landing,
    ThemeButton,
    SalesForm
},
};
</script>

<template>
  <!-- <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav> -->
  <!-- <ThemeButton /> -->
  <Landing />
  <!-- <SalesForm/> -->
  <!-- <RouterView /> -->
</template>
<style></style>

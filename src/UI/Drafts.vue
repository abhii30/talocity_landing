<script>
import NavBar from '../Views/Navbar.vue'
import Draft from "../components/Draft.vue";
export default {
  name: "Drafts",
  components: {
    Draft,
    NavBar
  },
  data() {
    return {
      drafts: [
        {
          role: "Frontend Developer",
          location: "Gurgaon",
        //   date: Date.now(),
          progress: 30,
        },
        {
          role: "Backend Developer",
          location: "Noida",
        //   date: Date.now(),
          progress: 70,
        },
      ],
    };
  },
};
</script>

<template>
  <nav>
    <NavBar></NavBar>
  </nav>
  <div class="drafts">
    <Draft
      v-for="draft in drafts"
      :key="draft.id"
      :role="draft.role"
      :location="draft.location"
      :date="draft.date"
      :progress="draft.progress"
    />
  </div>
</template>

<style></style>

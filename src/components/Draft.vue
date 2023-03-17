<script>
import ProgressBar from "../components/ProgressBar.vue";
export default {
  name: "Draft",
  components: {
    ProgressBar,
  },
  props: {
    role: {
      type: String,
      required: true,
      default: "Role",
    },
    location: {
      type: String,
      required: true,
      default: "Location",
    },
    date: {
      type: Date,
      required: true,
      default: new Date(),
    },
    progress: {
      type: Number,
      required: true,
      default: 50,
    },
  },
  data() {
    return {
      max: 100,
    };
  },
};
</script>

<template>
  <div class="draft">
    <ProgressBar :progress="progress" :max="max" />
    <h3>{{ role }}</h3>
    <h4>{{ location }}</h4>
    <p>Last Updated : {{ date }}</p>
  </div>
</template>

<style>
.draft {
  font-family: "Inter";
  font-style: normal;
  border: 1px solid rgba(0, 19, 37, 0.16);
  box-sizing: border-box;
  border-radius: 8px;
  width: 40vh;
  /* height: 25vh; */
  padding: 0.5% 2%;
  margin: 2%;
}
h3 {
  font-weight: 500;
  font-size: 14px;
}
h4 {
  font-weight: 400;
  font-size: 12px;
}
p {
  font-size: 10px;
  color: rgba(0, 19, 37, 0.64);
}
</style>

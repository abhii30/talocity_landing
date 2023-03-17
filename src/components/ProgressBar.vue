<template>
  <div class="progress-div">
    <div class="progress-bar">
      <div class="progress" :style="{ width: progressPercent }"></div>
    </div>
    <p class="progress-value">{{ progress }}%</p>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: {
    progress: {
      type: Number,
      required: true,
    },
    max: {
      type: Number,
      default: 100,
    },
  },
  computed: {
    progressPercent() {
      return `${(this.progress / this.max) * 100}%`;
    },
  },
};
</script>

<style>
.progress-bar {
  position: relative;
  width: 80%;
  height: 3px;
  background-color: #e0e0de;
  border-radius: 3px;
}
.progress-div {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10%;
}
.progress {
  height: 100%;
  background-color: #10cccb;
  border-radius: 5px;
  transition: width 0.3s ease-in-out;
}
.progress-value {
  color: rgba(0, 19, 37, 0.92);
  width: 10%;
  font-size: 10px;
  line-height: 0px;
}
</style>

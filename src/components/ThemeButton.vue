<script>
export default {
  data() {
    return {
      userTheme: "light-theme",
      isLightTheme: true,
    };
  },
  methods: {
    toggleTheme() {
      const activeTheme = localStorage.getItem("user-theme");
      if (activeTheme === "light-theme") {
        this.setTheme("dark-theme");
        this.isLightTheme = true;
      } else {
        this.setTheme("light-theme");
      }
    },

    getTheme() {
      return localStorage.getItem("user-theme");
    },

    setTheme(theme) {
      localStorage.setItem("user-theme", theme);
      this.userTheme = theme;
      document.documentElement.className = theme;
    },

    getMediaPreference() {
      const hasDarkPreference = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (hasDarkPreference) {
        return "dark-theme";
      } else {
        return "light-theme";
      }
    },
  },
  mounted() {
    const initUserTheme = this.getTheme() || this.getMediaPreference();
    this.setTheme(initUserTheme);
  },
};
</script>

<template>
  <div class="themeContainer">
    <div class="themeButton">
      <button
        @click="toggleTheme"
        id="checkbox"
        type="checkbox"
        class="switch-checkbox"
      >
        <label for="checkbox" class="switch-label">
          <span v-if="isLightTheme" class="material-icons"> mode_night </span>
          <span v-else class="material-icons md-light"> light_mode </span>
          <div
            class="switch-toggle"
            :class="{ 'switch-toggle-checked': userTheme === 'dark-theme' }"
          ></div>
        </label>
      </button>
    </div>
  </div>
</template>

<style lang="scss">
@import "./ThemeButton.scss";
</style>

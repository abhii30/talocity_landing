<template>
  <div>
    <input
      v-model="inputValue"
      :type="type"
      :placeholder="placeholder"
      :required="required"
      @input="validateEmail"
      @blur="showError"
    />
    <span v-if="error" class="error">{{ error }}</span>
  </div>
</template>

<script>
export default {
  name: "MyInput",
  props: {
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      inputValue: "",
      error: "",
    };
  },
  methods: {
    validateEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.inputValue)) {
        this.error = "Invalid email address";
      } else {
        this.error = "";
      }
    },
    showError() {
      if (!this.inputValue) {
        this.error = "Email address is required";
      }
    },
  },
};
</script>

<style lang="scss">
@import "./Input.scss";
</style>

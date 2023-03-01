<template>
  <div class="inputContainer">
    <label :for="inputId">{{ label }}</label>
    <input
      v-model="inputValue"
      :type="type"
      :placeholder="placeholder"
      :required="required"
      :id="inputId"
      @focus="reset"
      @blur="validateHandler"
      :class="{ error: error }"
    />
    <!-- <img src="./icons/error_icon.png" alt="" class="errorIcon" v-if="error" /> -->
    <span class="errorMessage">{{ error }}</span>
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
      default: true,
    },
    label: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      inputValue: "",
      error: "",
      inputId: `input-${Math.floor(Math.random() * 1000000)}`, // generate a unique ID for the input element
    };
  },
  methods: {
    validateHandler() {
      switch (this.type) {
        case "email":
          this.validateEmail();
          break;
        case "password":
          this.validatePassword();
          break;
        default:
          break;
      }
    },
    validatePassword() {
      if (this.inputValue.length < 8) {
        this.error = "Password must be at least 8 characters";
        console.log(this.error);
      } else {
        this.error = "";
        console.log(this.error);
      }
    },
    validateEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.inputValue)) {
        this.error = "Please enter correct email address";
        console.log(this.error);
      } else {
        this.error = "";
        console.log(this.error);
      }
    },
    reset() {
      this.error = "";
    },
  },
};
</script>

<style lang="scss">
@import "./Input.scss";
</style>

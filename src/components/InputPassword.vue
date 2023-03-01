<template>
  <div class="inputContainer">
    <label :for="passwordId">{{ label }}</label>
    <div class="passwordWrapper">
      <input
        :type="showPassword ? 'text' : 'password'"
        v-model="inputPassword"
        :placeholder="placeholder"
        :id="passwordId"
        :required="required"
      />
      <button @click="toggleShowPassword" class="material-icons">
        {{ showPassword ? "visibility" : "visibility_off" }}
      </button>
    </div>
    <span class="password-validator" v-if="passwordValidator">
      {{ passwordValidator }}
    </span>
  </div>
</template>

<script>
export default {
  name: "InputPassword",
  data() {
    return {
      inputPassword: "",
      showPassword: false,
      passwordId: `password-${Math.floor(Math.random() * 1000000)}`,
    };
  },
  props: {
    label: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    toggleShowPassword(event) {
      event.preventDefault();
      this.showPassword = !this.showPassword;
    },
  },
  computed: {
    passwordValidator() {
      let errors = [];
      if (this.inputPassword.length < 8) {
        errors.push("Password must be at least 8 characters long. \n");
      }
      if (!/[A-Z]/.test(this.inputPassword)) {
        errors.push("Password must contain at least one uppercase letter.\n");
      }
      if (!/[a-z]/.test(this.inputPassword)) {
        errors.push("Password must contain at least one lowercase letter.\n");
      }
      if (!/\d/.test(this.inputPassword)) {
        errors.push("Password must contain at least one number.\n");
      }
      if (!/[^a-zA-Z\d]/.test(this.inputPassword)) {
        errors.push("Password must contain at least one special character.\n");
      }
      if (/(.)\1\1\1/.test(this.inputPassword)) {
        errors.push(
          "Contains 4 consecutive characters (e.g. '1111', 'aaaa') \n"
        );
      }
      return errors.join(" ");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./InputPassword.scss";
</style>

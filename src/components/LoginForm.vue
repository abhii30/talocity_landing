<template>
  <form @submit.prevent="submitForm">
    <img src="./icons/Logo_Talocity.png" alt="" />
    <h2>Login</h2>
    <h3>Welcome back</h3>
    <div class="componentContainer">
      <Input
        label="Email Address"
        id="email"
        type="email"
        v-model="formData.email"
      />
      <span v-for="error in v$.email.$errors" :key="error.$uid">{{
        error.$message
      }}</span>
    </div>
    <div class="forgotPassword" @click="forPass">
      <a href="#">Forgot Password?</a>
    </div>
    <div class="componentContainer">
      <Input
        label="Password"
        id="password"
        type="password"
        v-model="formData.password"
      />
      <p>{{ formData.password }}</p>
      <p>{{ formData.email }}</p>
      <span v-for="error in v$.password.$errors" :key="error.$uid">{{
        error.$message
      }}</span>
    </div>
    <button class="button" type="submit">Login</button>
    <p>
      Don't have an account?
      <a href="#" @click="contactSales">Contact Sales</a>
    </p>
  </form>
</template>

<script>
import { reactive } from "vue";
import Input from "./Input.vue";
import useVuelidate from "@vuelidate/core";
import { email, minLength, required } from "@vuelidate/validators";

export default {
  components: {
    Input,
  },
  data() {
    return {
      formData: reactive({
        email: "",
        password: "",
      }),
      rules: {
        email: { required, email },
        password: { required, minLength: minLength(8) },
      },
      v$: useVuelidate(this.rules, this.formData),
    };
  },
  props: {
    forPass: {
      type: Function,
      required: true,
    },
    contactSales: {
      type: Function,
      required: true,
    },
  },
  methods: {
    submitForm() {
      const result = this.v$.value.$validate();
      if (result) {
        alert("Form is valid");
      } else {
        alert("Form is invalid");
      }
    },
  },
};
// const formData = reactive({
//   email: "",
//   password: "",
// });

// const rules = {
//   email: { required, email },
//   password: { required, minLength: minLength(8) },
// };

// const v$ = useVuelidate(rules, formData);
// const submitForm = async () => {
//   const result = await v$.value.$validate();
//   if (result) {
//     alert("Form is valid");
//   } else {
//     alert("Form is invalid");
//   }
// };
</script>

<style lang="scss">
@import "./LoginForm.scss";
</style>

<template>
  <form @submit.prevent="submitForm">
    <Input1
      label="Email Address"
      id="email"
      v-model="formData.email"
      type="email"
    />
    <Input1
      label="Password"
      id="password"
      v-model="formData.password"
      type="password"
    />
    <button type="submit">Submit</button>
  </form>
  <p>Errors:</p>
  <span v-for="error in v$.$errors" :key="error.$uid"
    >{{ error.$property }}-{{ error.$message }}</span
  >
</template>

<script>
import { reactive } from "vue";
import Input1 from "./Input1.vue";
import useVuelidate from "@vuelidate/core";
import { email, minLength, required } from "@vuelidate/validators";
const formData = reactive({
  email: "",
  password: "",
});

const rules = {
  email: { required, email },
  password: { required, minLength: minLength(8) },
};

const v$ = useVuelidate(rules, formData);

const submitForm = async () => {
  const result = await v$.value.$validate();
  if (result) {
    alert("Form is valid");
  } else {
    alert("Form is invalid");
  }
};
export default {
  components: {
    Input1,
  },
  setup() {
    return {
      formData,
      submitForm,
      v$,
    };
  },
};
</script>

<script></script>

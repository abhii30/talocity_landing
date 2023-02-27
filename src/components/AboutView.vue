<template>
  <MyInput
    type="email"
    placeholder="Enter your email address"
    required
    label="Email Address"
  />
</template>

<script>
import MyInput from "./Input.vue";
export default {
  // name: "MyForm",
  components: {
    MyInput,
  },
};
</script>
<style></style>

<template>
  <form @submit.prevent="submitForm">
    <Input label="Name" id="name" v-model="form.name" />
    <p>{{ form.email }}</p>
    <Input label="Email" id="email" v-model="form.email" type="email" />
    <button type="submit">Submit</button>
  </form>
</template>

<script>
import Input from './Input.vue';

export default {
  components: {
    Input
  },
  data() {
    return {
      form: {
        name: '',
        email: ''
      }
    };
  },
  methods: {
    submitForm() {
      console.log('form submitted', this.form);
      // Do something with form data, like send it to a server
    }
  }
};
</script>

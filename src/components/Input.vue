<template>
  <div>
    <label :for="id">{{ label }}</label>
    <input :type="type" :id="id" :value="modelValue" @input="updateValue" />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "Input Label",
    },
    type: {
      type: String,
      default: "text",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    id: {
      type: String,
      required: true,
    },
  },
  methods: {
    updateValue(event) {
      this.$emit("update:modelValue", event.target.value);
      console.log(event.target.value);
    },
  },
};
</script>

<template>
  <div class="inputContainer">
    <label :for="id">{{ label }}</label>
    <input
      :type="type"
      :id="id"
      :value="modelValue"
      @input="updateValue"
      @blur="onBlur"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      modelValue: "",
    };
  },
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
    },
  },
};
</script>

<style lang="scss">
@import "./myInput.scss";
</style>

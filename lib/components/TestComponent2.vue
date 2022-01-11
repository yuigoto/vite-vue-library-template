<template>
  <h3>
    Hello, <span>{{ name }}</span
    >! Welcome to the test component!
  </h3>
</template>

<script>
export default {
  name: "test-component-too",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
h3 {
  color: #f00;

  span {
    color: #ce5c00;
  }
}
</style>

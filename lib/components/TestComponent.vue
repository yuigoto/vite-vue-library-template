<template>
  <h3>I'm a test component!</h3>
</template>

<script>
export default {
  name: "test-component",
  mounted() {
    console.log("Test component mounted");
  },
};
</script>

<style lang="scss" scoped>
h3 {
  color: #f0f;
}
</style>

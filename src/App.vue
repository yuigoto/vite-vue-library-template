<script setup>
import { TestComponent, TestComponentToo } from "~";
</script>

<script>
export default {
  mounted() {
    console.log("Mounted!");
  },
};
</script>

<template>
  <h1>Hello, Vue!</h1>

  <p>Test project for the library boilerplate!</p>

  <test-component />

  <test-component-too name="Fabio" />
</template>

<style>
#app {
  padding: 4rem;
}
</style>

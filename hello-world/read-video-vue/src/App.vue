<template>
  <div id="app">
    <HelloWorld msg="Hello World for Vue" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import "./dlr";
import './dce';

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

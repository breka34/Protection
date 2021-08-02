<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div v-for="cat in cats" :key="cat.id">
      <h1>{{ cat.id }}</h1>
      <p>{{ cat.name }}</p>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import cats from "./assets/cat.json";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {
      cats: cats,
    };
  },
  created() {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

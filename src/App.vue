<template>
  <div id="app">
    <!-- <Nav /> -->
   <Navigation />
   <Slider  />
   <Cards />
   <News />
  </div>
</template>

<script>
// import Nav from './components/Nav.vue'
import Navigation from './components/Navigation.vue';
import Slider from './components/Slider.vue';
import Cards from './components/Cards.vue';
import News from './components/News.vue'
export default {
  name: 'App',
  components: {
    Navigation,
    Slider,
    Cards,
    News,
    // Nav,
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
font-family: 'Montserrat', sans-serif;
}
#app {
  width: 100%;
}
</style>

<template>
  <div id="app" style="position: relative">
    <!-- <Nav /> -->
    <Navigation />
    <Slider />
    <Cards />
    <News />
    <Footer />
  </div>
</template>

<script>
// import Nav from './components/Nav.vue'
import Navigation from "./components/Navigation.vue";
import Slider from "./components/Slider.vue";
import Cards from "./components/Cards.vue";
import News from "./components/News.vue";
import Footer from './components/Footer.vue'
export default {
  name: "App",
  components: {
    Navigation,
    Slider,
    Cards,
    News,
    Footer
    // Nav,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  /* font-size: 16px; */
}
.swiper-container {
  max-width: 1250px;
}
.cards .swiper-slide {
  max-width: 400px;
}
.cards .swiper-button-next,
.cards .swiper-button-prev {
  color: #d33;
  border: 1px solid #d3d3d3;
  border-radius: 4px;
  height: 100px;
  width: 50px;
  display: none;
}
.cards .swiper-button-next:hover,
.cards .swiper-button-prev:hover {
  background: rgba(211, 211, 211, 0.2);
}
.cards .swiper-button-prev {
  left: -45px;
}
.cards .swiper-button-next {
  right: -35px;
}
.cards .swiper-pagination {
  bottom: -24px;
}
.cards .swiper-pagination-bullet-active {
  opacity: 1;
  background: #d33;
}
.cards .swiper-pagination-bullet {
  margin: 0px 6px;
}

@media screen and (min-width: 1024px) {
  .cards .swiper-button-next,
  .cards .swiper-button-prev {
    display: inherit;
  }
  .cards .swiper-button-prev {
    left: -10px;
  }
  .cards .swiper-button-next {
    right: -10px;
  }
}
</style>

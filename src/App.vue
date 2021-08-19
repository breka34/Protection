<template>
  <div id="app" style="position: relative">
    <!-- <Nav /> -->
    <Navigation />
    <router-view> </router-view>
    <div class="footer__container">
      <Footer />
    </div>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Navigation,
    Footer,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}
html,
body {
  height: 100%;
}
#app {
  min-height: 100vh;
}
.footer__container {
  min-height: 143px;
}

.form__container .d-block {
  font-size: 15px;
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

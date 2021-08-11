<template>
  <div class="cards-container">
    <div class="cards-up-text headline__container">
      <div class="headline__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </div>
    </div>
    <div class="category__headline">
      <h3>Kategorije proizvoda</h3>
    </div>
    <div class="cards">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="data in mainCategories" :key="data.id">
          <Card :card="data" />
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </div>
  </div>
</template>

<script>
import mainCategories from "../assets/mainCategories.json";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import Card from "./Card.vue";
export default {
  data() {
    return {
      mainCategories,
      swiperOptions: {
        slidesPerView: 3,
        spaceBetween: 24,
        watchOverflow: true,
        centerInsufficientSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          275: {
            slidesPerView: "auto",
          },
        },
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    Card,
  },
};
</script>

<style scoped>
.card-description {
  border: 1px solid rgb(255, 0, 0);
}
.cards-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}
.category__headline {
  padding: 48px 12px 12px;
}
.cards-up-text {
  width: 100%;
  background-color: #6c757d;
}
.headline__text {
  max-width: 900px;
  font-weight: 700;
  color: #fff;
  padding: 12px;
  text-align: center;
  margin: 0 auto;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  margin: 12px auto;
  max-width: 100%;
  position: relative;
  padding: 12px 48px;
}
</style>

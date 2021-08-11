<template>
  <div class="slider-container">
    <b-carousel
      id="stage-carousel"
      v-model="slide"
      :interval="0"
      fade
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        v-for="stageData in SliderData"
        :key="stageData.id"
        :caption-html="stageData.name"
        :text-html="stageData.header"
        :img-src="`${resourcesUrl}/img/${stageData.image}`"
      >
        <b-button variant="secondary" class="slider__buttons"
          >Detaljnije</b-button
        >
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
import SliderData from "../assets/stage.json";
import { BButton, BCarousel } from "bootstrap-vue";

export default {
  data() {
    return {
      resourcesUrl: process.env.VUE_APP_RESOURCES_URL,
      SliderData: SliderData,
      slide: 0,
      sliding: null,
    };
  },
  components: {
    BButton,
    BCarousel,
  },
  mounted() {
    this.startSlide();
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
    parseCarouselText() {},
  },
};
</script>

<style>
.slider-container,
.carousel.slide,
.carousel-item,
.slider-container .img-fluid {
  height: 300px;
}
.slider {
  width: 100%;
  /* height: 100%; */
}
.slider img {
  height: 450px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 1s ease-in-out;
  overflow: hidden;
  visibility: visible;
  opacity: 1;
}
.carousel-caption {
  top: 0px;
  bottom: unset;
}
.carousel .carousel-control-prev-icon,
.carousel .carousel-control-next-icon {
  width: 25px;
  height: 25px;
}
.carousel-caption h3 {
  font-size: 1.125rem;
  line-height: 25px;
  font-weight: 700;
}
.carousel-caption p {
  font-size: 1.5rem;
  line-height: 48px;
}
.separate {
  max-width: 100px;
  border: 2px solid rgba(211, 211, 211, 0.7);
  border-radius: 4px;
  margin: 12px auto 0px;
}
.slider__buttons {
  padding: 12px 24px;
  font-size: 18px;
  font-weight: 700;
  margin-top: 24px;
}

.slider-container .carousel-control-next,
.slider-container .carousel-control-prev {
  height: 100px;
  width: 50px;
  border: 1px solid #d3d3d3;
  border-radius: 4px;
  top: 50%;
}
.slider-container .carousel-control-prev {
  left: 24px;
}
.slider-container .carousel-control-next {
  right: 24px;
}
@media screen and (min-width: 640px) {
  .carousel-caption {
    top: 50px;
  }
}
@media screen and (min-width: 992px) {
  .slider-container,
  .slider-container .img-fluid,
  .carousel.slide,
  .carousel-inner,
  .carousel-item {
    height: 600px;
  }
  .carousel-caption {
    top: 220px;
  }
  .carousel-caption h3 {
    font-size: 2.125rem;
    line-height: 2.125rem;
    font-weight: 700;
  }
  .carousel-caption p {
    font-size: 2.5rem;
    line-height: 2.5rem;
  }
}
</style>

<template>
  <div class="slider-container" >
    <transition-group name="fade" tag="div" class="trans">
      <div class="slider" v-for="i in [currentIndex]" :key="i">
        <img :src="currentImage" alt="slider" />
      </div>
    </transition-group>
    <div class="btn-container"  >
      <button class="btn-right btn-icons" @click="prev" v-if="!mobileView">
        <font-awesome-icon icon="backward" />
      </button>
      <button class="btn-right btn-icons" @click="next" v-if="!mobileView">
        <font-awesome-icon icon="forward" />
      </button>
    </div>
  </div>
</template>

<script>
import kamir1 from '../images/kamir1.png';
import kamir2 from '../images/kamir2.png';
import kamir3 from '../images/kamir3.png';


export default {
  data() {
    return {
      images: [
          kamir1,
          kamir2,
          kamir3,
        
      ],
      timer: null,
      currentIndex: 0,
      mobileView: false,
    };
  },
  created() {
    this.handleView();
  },
  mounted() {
    this.startSlide();
  },
  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 4000);
    },
    next() {
      this.currentIndex += 1;
    },
    prev() {
      this.currentIndex -= 1;
    },
  handleView() {
        this.mobileView = window.innerWidth <= 900;
      }
  },
  computed: {
    currentImage() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    },
  },
};
</script>

<style>
.slider-container {
  position: relative;
  height: 450px;
  width: 100%;
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
.slider-container .btn-container {
  width: 100%;
  position: absolute;
  top: 225px;
  left: 0px;
  display: flex;
  justify-content: space-between;
}
.btn-icons {
  font-size: 30px;
  background: none;
  border: none;
  color: rgba(128, 128, 128, 0.616);
  cursor: pointer;
}
</style>

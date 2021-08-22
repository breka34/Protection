<template>
  <div>
    <Slider />
    <Cards />
    <News />
    
  </div>
</template>

<script>
import Slider from "./Slider.vue";
import Cards from "./Cards.vue";
import News from "./News.vue";
export default {
  components: {
    Slider,
    Cards,
    News,
  },
};
</script>
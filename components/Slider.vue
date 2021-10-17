<!-- TODO[epic=Slider] -->
<template>
  <div>
    <VueSlickSlider
      class="slick-slider px-0"
      :arrows="false"
      :dots="true"
      :autoplay="true"
      :autoplaySpeed="7500"
      :speed="1000"
    >
      <template v-for="slide in slides">
        <template v-if="slide.link">
          <a :key="slide.image" :href="slide.link">
            <img
              :src="`${slide.image}`"
              :alt="slide.alt ? slide.alt : ''"
              class="img-fluid img-responsive"
            />
          </a>
        </template>
        <img
          v-else
          :key="slide.image"
          :src="`${slide.image}`"
          :alt="slide.alt ? slide.alt : ''"
          class="img-fluid img-responsive"
        />
      </template>
    </VueSlickSlider>
  </div>
</template>

<script>
import VueSlickSlider from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "Slider",
  components: { VueSlickSlider },
  props: {
    slides: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.slick-slider {
  margin: auto;
  display: flex;
  position: relative;
  align-items: center;
  height: auto;
  width: 600px;
  height: 600px;
}
.img-fluid {
  width: auto;
  max-height: 600px;
}

@media only screen and (max-width: 600px) {
  .slick-slider {
    margin: auto;
    display: flex;
    position: relative;
    align-items: center;
    width: 300px;
    height: 300px;
  }
  .img-fluid {
    width: auto;
    max-height: 600px;
  }
}
</style>

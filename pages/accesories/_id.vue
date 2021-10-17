<template>
  <div v-if="product" class="p-5">
    <div
      class="mt-3 ml-5 back hover:text-red flex items-center justify-start"
      @click="$router.go(-1)"
    >
      <div>
        <svg
          class=""
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="35"
          height="35"
        >
          <path
            class="heroicon-ui"
            d="M5.41 11H21a1 1 0 0 1 0 2H5.41l5.3 5.3a1 1 0 0 1-1.42 1.4l-7-7a1 1 0 0 1 0-1.4l7-7a1 1 0 0 1 1.42 1.4L5.4 11z"
          />
        </svg>
      </div>

      <a class="">back</a>
    </div>
    <div :v-for="product" class="w-full flex flex-wrap md:h-full pt-2">
      <div
        class="pt-16 p-5 md:pt-0 md:justify-start w-full md:flex-1 md:w-1/2 md:order-first"
      >
        <img
          :src="require(`@/assets/accesories/${product.image}`)"
          alt=""
          class="w-full h-64 md:w-full md:h-auto md:object-top object-contain"
        />
      </div>

      <div class="md:w-1/2 p-5">
        <h1>{{ product.title }}</h1>
        <p class="">{{ product.snippet }}</p>
      </div>
    </div>

    <div class="px-5">
      <p class="text-md md:m-10 order-last">{{ product.description }}</p>
    </div>
  </div>
</template>

<script>
import { largeCardSections } from "@/store/accesories.js";

export default {
  data() {
    return {
      product: null,
    };
  },
  mounted() {
    this.product = this.getProductById(this.$route.params.id);
  },
  methods: {
    getProductById(id) {
      return largeCardSections
        .reduce((prev, curr) => [...prev, ...curr.cards], "")
        .find((product) => product.id == id);
    },
  },
};
</script>

<style lang="scss" scoped>
.back {
  justify-content: flex-start;
}
</style>

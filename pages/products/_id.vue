<!-- TODO[epic=Products] -->
<template>
  <div v-if="product" class="p-3 md:p-8">
    <div
      class="mt-3 md:ml-5 back hover:text-red flex items-center justify-start"
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

      <a class="p-3 text-black">back</a>
    </div>

    <div :v-for="product" class="w-full flex flex-wrap md:h-full md:px-5 pt-2">
      <div
        class="pt-16 md:pt-auto md:justify-start w-full md:flex-1 md:w-1/3 md:order-first"
      >
        <img
          :src="require(`~/assets/products/${product.image}`)"
          class="w-full h-32 md:h-auto md:object-top object-contain"
          alt=""
        />
      </div>
      <div
        class="w-full md:p-12 md:w-5/12 flex justify-center items-start relative"
      >
        <div
          class="w-full relative text-left pt-5 md:py-12 md:px-12 md:text-right"
        >
          <h1 class="text-5xl mb-1">{{ product.title }}</h1>
          <div class="w-full relative text-left py-12 md:p-0 md:text-right">
            <h2 class="text-2xl mb-4">Untertitel</h2>
            <p class="leading-loose tracking-wide text-gray-700">
              {{ product.snippet }}
            </p>
            <p>Year of production: {{ product.year }}</p>
            <p>Type: {{ product.category }}</p>
          </div>
        </div>
      </div>

      <div class="md:px-5 md:pt-12">
        <div>
          <h3 class="text-2xl mb-4">Description</h3>
          <p class="text-md order-last">{{ product.description }}</p>
        </div>
        <div class="flex flex-wrap back">
          <p class="text-2xl mt-8">Gallery</p>

          <div class="flex flex-wrap -mx-4 back">
            <div
              v-for="(pic, i) in product.pics"
              :key="i"
              class="w-1/2 md:w-1/3 px-4 mb-8"
            >
              <!-- <img
            :src="require(`~/assets/products/${product.path}`)"
            class="w-full h-64 md:h-auto md:object-top object-contain"
            alt=""
          /> -->

              <img
                :src="require(`~/assets/products/${pic.path}`)"
                class="rounded shadow-md"
                alt=""
              />
            </div>
          </div>
        </div>
        <div v-if="this.product.video" class="flex flex-wrap back">
          <p class="text-2xl w-full mt-8">Video</p>

          <div>
            <iframe
              :src="product.video"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { BikeCardSections } from "@/store/bikes";
import SvgBase from "~/components/Svg-base.vue";

export default {
  components: { SvgBase },
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
      return BikeCardSections.reduce(
        (prev, curr) => [...prev, ...curr.cards],
        ""
      ).find((product) => product.id == id);
    },
  },
};
</script>

<style lang="scss" scoped>
.back {
  justify-content: flex-start;
}
</style>

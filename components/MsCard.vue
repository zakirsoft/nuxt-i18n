<template>
  <div
    class="card relative w-full h-64 overflow-hidden bg-red-100"
    :class="{ open: open & active }"
    @click="open = !open"
  >
    <div class="w-full h-72 bg-top bg-cover" :style="backgroundImage"></div>
    <div
      class="absolute w-full text-center text-white top-10 px-5 py-2 text-xl title"
    >
      {{ item.title }}
    </div>
    <div class="p-5 description text">{{ item.description }}</div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      open: false,
    };
  },
  props: ["item", "active"],
  computed: {
    backgroundImage() {
      return {
        "background-image":
          "url(" + require("~/assets/products/" + this.item.img) + ")",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease;
  &.open {
    height: 46rem;
    transform: translateY();
  }
}
.title {
  background-color: rgba(0, 0, 0, 0.493);
}
</style>

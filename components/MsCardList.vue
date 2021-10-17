<template>
  <div>
    <div class="card-list my-5 h-72">
      <h3>Some our Projects</h3>
      <ul :style="listLength" class="flex">
        <li v-for="(card, index) in cards" :key="index" :style="listPosition">
          <MsCard :item="card" :active="index == currentIndex" />
        </li>
      </ul>
    </div>
    <NuxtLink
      class="absolute right-5 text-black bg-blue-400 rounded-sm px-2 py-1"
      to="/products"
      >See All Products</NuxtLink
    >
  </div>
</template>

<script>
import MsCard from "@/components/MsCard.vue";
export default {
  data: () => {
    return {
      touch: {
        startX: 0,
        endX: 0,
      },
    };
  },
  components: {
    MsCard,
  },
  computed: {
    cards() {
      return this.$store.getters.cards;
    },

    currentIndex() {
      return this.$store.getters.currentIndex;
    },
    listLength() {
      return { width: this.cards.length * 100 + "%" };
    },
    listPosition() {
      return { transform: "translateX(-" + this.currentIndex * 100 + "%)" };
    },
  },
  methods: {
    touchstart(event) {
      this.touch.startX = event.touches[0].clientX;
      this.touch.endX = 0;
    },
    touchmove(event) {
      this.touch.endX = event.touches[0].clientX;
    },
    touchend() {
      if (
        !this.touch.endX ||
        Math.abs(this.touch.endX - this.touch.startX) < 40
      )
        return;

      if (this.touch.endX < this.touch.startX) this.$store.commit("nextIndex");
      else this.$store.commit("prevIndex");
    },
  },
  mounted() {
    this.$el.addEventListener("touchstart", (event) => this.touchstart(event));
    this.$el.addEventListener("touchmove", (event) => this.touchmove(event));
    this.$el.addEventListener("touchend", () => this.touchend());
  },
};
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  list-style: none;
}
li {
  transition: all 0.5s ease;
}
</style>

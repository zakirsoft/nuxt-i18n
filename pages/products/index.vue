<!-- TODO[epic=Products] -->
<template>
  <div>
    <BikesCardsDisplayNow />
    <BikesCardsDisplay
      class="whitespace-pre-line"
      v-for="cardInfo in largeCardInfo"
      :key="cardInfo.id"
      :cardsSection="cardInfo"
    />
  </div>
</template>

<script>
import { BikeCardSections } from "@/store/bikes.js";
export default {
  data() {
    return {
      largeCardInfo: BikeCardSections,
    };
  },
  methods: {
    routeto(link) {
      this.$router.push(link);
      this.$store.commit("toggleSidebar");
    },
  },
};
</script>

<style lang="scss" scoped></style>

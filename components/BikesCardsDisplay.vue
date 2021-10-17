<template>
  <div class="p-3 md:5">
    <div>
      <h4>{{ cardsSection.title }}</h4>
      <p>{{ cardsSection.snippet }}</p>
    </div>
    <div class="grid grid-cols-1 align-baseline content-center md:grid-cols-2">
      <BikeCard
        v-for="card in cardsSection.cards"
        :key="card.id"
        :card="card"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["cardsSection"],
};
</script>

<style lang="scss" scoped></style>

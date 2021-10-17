<!-- TODO[epic=Accesories] -->
<template>
  <div>
    <div class="m-3">
      <h4>{{ cardsSection.title }}</h4>
      <p>{{ cardsSection.snippet }}</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2">
      <AccesoriesCard
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

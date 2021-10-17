<template>
  <div>
    <nuxt-link :to="`/products/${card.id}`">
      <section
        class="flex flex-col md:flex-row gap-4 py-5 px-3 bg-white rounded-md shadow-none md:max-w-2xl"
      >
        <div
          class="text-indigo-500 md:w-1/2 flex flex-col items-center justify-center"
        >
          <img
            class="object-contain"
            :src="require(`~/assets/products/${card.image}`)"
            alt=""
          />
        </div>
        <div class="text-indigo-500 md:w-1/2">
          <small
            class="uppercase px-2 py-1 rounded-sm text-white bg-blue-400"
            >{{ card.category }}</small
          >
          <h3 class="uppercase text-black text-2xl font-medium">
            {{ card.title }}
          </h3>
          <h3 class="text-2xl font-semibold mb-7"></h3>
          <small class="text-black truncate ...">{{ card.snippet }}...</small>
        </div>
      </section>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ["card"],
};
</script>

<style lang="scss" scoped>
.truncate {
  white-space: normal;
}
</style>

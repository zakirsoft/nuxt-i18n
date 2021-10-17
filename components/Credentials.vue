<template>
  <footer id="footer">
    <div class="inner">
      <div v-for="brand in brands" :key="brand" v-html="brand" />
    </div>
  </footer>
</template>

<script>

// TODO:: write a method for the 'fixed button' on mobile so that it triggers the call function

export default {
  name: "Credentials",
  data: function () {
    return {
      brands: {
        Maderna,
        LoLiner,
        SRAM,
        Shimano
      },
      expanded: false,
    };
  },
};
</script>

<style scoped lang="scss">
#footer {
  padding: 0;
  position: relative;
  border-bottom: 60px solid white;

  .inner {
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 700px;

    div {
      flex: 0 1 auto;

      ::v-deep svg {
        width: 100%;
        padding: 0 20px;
        display: block;
        * {
          fill: gray;
        }
      }
    }
  }
}
</style>
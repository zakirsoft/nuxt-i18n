<template>
  <section id="products">
    <div class="inner m-5">
      <h3 class="title">{{ title }}</h3>
      <client-only placeholder="loading...">
        <carousel
          :items="numberOfItems"
          :nav="false"
          :dots="false"
          :loop="true"
          :freedrag="true"
          :responsive="{ 0: { items: 2 }, 720: { items: 5 } }"
          :auto-height="true"
          :autoplayTimeout="3500"
          :rewind="false"
          :autoplay="true"
          class="product-wrapper"
        >
          <img
            class="product"
            v-for="item in items"
            :key="item"
            :src="'/images/prd/' + item"
            alt="Product"
          />
        </carousel>
      </client-only>
    </div>
  
  </section>
</template>

<script>
export default {
  name: "Products",
  data: function () {
    return {
      numberOfItems: 2,
      
      title: "Some Our Products",
      items: [
        "city-scooter.jpg",
        "buge-1.jpg",
        "tractor.png",
        "transport.jpg",
        "cruiser.jpg"
      ],
    };
  },
  methods: {
    getViewport: function () {
      if (process.client) {
        let viewport = Number(
          getComputedStyle(document.documentElement)
            .getPropertyValue("--items")
            .split(",")
        );
        this.numberOfItems = viewport;
      }
    },
  },
  created: function () {
    this.getViewport();
  },
};
</script>

<style scoped lang="scss">
#products {
  max-height: 300px;


  .inner {
    padding-top: 10px;
    padding-bottom: 40px;

    .title {
      padding: 20px 0;
      
    }

    .product-wrapper {
      .product {
        // max-width: 140px;
        max-height: 200px;
        object-fit: contain;
      }
    }
  }
}
</style>

<style lang="scss">
:root {
  --items: 2;

  @media only screen and (min-width: 720px) {
    --items: 5;
  }
  @media only screen and (min-width: 1066px) {
    --items: 5;
  }
}

#products {
  .inner {
    .owl-stage {
      display: flex;
      align-items: flex-end;
    }
  }
}
</style>

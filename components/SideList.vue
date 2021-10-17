<template>
  <div class="mb-n5">
    <div class="container base-display">
      <div>
        <h1>Unsere Fahrzeuge</h1>
      </div>
      <div class="row-wrap side-list">
        <a
          v-for="product in $store.state.products"
          :key="product.id"
          :href="product.url"
          class="col-12 col-sm-6 col-md text-center normalize-link product-overview-link"
        >
          <div
            class="image-wrapper d-flex align-items-center justify-content-center flex-wrap"
          >
            <img
              :src="getMainImage(product.images)"
              :alt="product.name"
              class="img-fluid"
            />
          </div>
          <div class="h4">{{ product.name }}</div>
        </a>
      </div>

    </div>

    
  </div>
</template>

<script>
export default {
  // asyncData() {
  //   return new Promise((resolve) => {
  //     setTimeout(function () {
  //       resolve({});
  //     }, 1000);
  //   });
  // },
  methods: {
    getMainImage(images) {
      return images.find((image) => image.isMainImage === true).path;
    }
  }
};
</script>

<style lang="scss" scoped>
.side-list{
  max-height: 88vh;
  left: 10;
}
.image-wrapper {
  height: 150px;

  img {
    will-change: transform;
    transition: 0.3s;
    max-height: 100%;
  }
}

.product-overview-link:hover .image-wrapper img {
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .base-display {
    padding-bottom: 15%;
  }

  .showcase-section {
    display: none;
  }
}
</style>

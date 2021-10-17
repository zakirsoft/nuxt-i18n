<template>
  <div>
    <div class="row read-font">
      <div class="col pb-5">
        <b-tabs content-class="mt-3">
          <b-tab v-if="product.description" title="Info" active>
            <p class="text-black">{{ product.description }}</p>
          </b-tab>
          <b-tab
            v-if="product.specifications"
            title="Tech Specs"
            class="text-black text-xlg"
          >
            <dl
              v-for="specification in product.specifications"
              :key="specification.key"
              class="items-center row align-items-center border-bottom mb-0 p-2"
            >
              <dt class="col-12 col-md-4">
                {{ specification.key }}
              </dt>
              <dl class="col-12 col-md-8 mb-0">
                {{ specification.value }}
              </dl>
            </dl>
          </b-tab>
        </b-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    slides() {
      if (this.product) {
        return this.product.images.map((image) => ({
          image: image.path,
        }));
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.read-font {
  font-family: "Montserrat";
  font-weight: 600;
  line-height: 2.5;
  font-size: 22px;
}
.configurator-section,
.sidebar-section {
  display: none;
}
.nav-link.active {
  font-size: 2rem;
  background-color: transparent;
  color: black;
}

.nav-tabs .nav-link {
  border: transparent;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  background-color: transparent;
}
@media only screen and (max-width: 600px) {
  .read-font {
    font-size: 16px;
  }
}
</style>

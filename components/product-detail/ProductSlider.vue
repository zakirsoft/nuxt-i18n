 <!-- TODO[epic=Slider] -->
<template>
  <div>
  <Slider :slides="slides" />
  </div>
</template>

<script>
import Slider from "@/components/Slider";

export default {
  components: {
    Slider
    
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    slides() {
      return this.product.images.map((image) => ({
        image: image.path
      }));
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
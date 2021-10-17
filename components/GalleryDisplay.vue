<template>
  <div>
    <Photoswipe>
      <h2>practical example</h2>
      <div
        v-for="(item, index) in completeImageList"
        :key="`practical-bg-${index}`"
        v-pswp="item"
        :style="getImageItemStyle(item.msrc)"
        style="display: inline-block"
      />
    </Photoswipe>

    <Photoswipe>
      <h2>simplest usage</h2>
      <h3>use img</h3>
      <img
        v-for="(src, index) in pics"
        :key="index"
        :src="require(`~/assets/products/${card.image}`)"
        v-pswp="src"
        style="width: 200px"
      />

      <h3>use background-image</h3>
      <div
        v-for="(src, index) in imageList"
        :key="`bg-${index}`"
        v-pswp="src"
        :style="getImageItemStyle(src)"
        style="display: inline-block"
      />
    </Photoswipe>

    <Photoswipe auto>
      <h2>use auto mode</h2>
      <img
        v-for="(src, index) in imageList"
        :src="src"
        :key="`auto-${index}`"
        style="width: 200px"
      />
    </Photoswipe>

    <Photoswipe rotate>
      <h2>allow rotate</h2>
      <div
        v-for="(src, index) in imageList"
        :key="`rotate-${index}`"
        v-pswp="src"
        :style="getImageItemStyle(src)"
        style="display: inline-block"
      />
    </Photoswipe>

    <h2>manual open custom html</h2>
    <button @click="handleClick">manual open</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imageList: [
        "https://placeimg.com/640/480/any",
        "https://placeimg.com/640/481/any",
        "https://placeimg.com/640/482/any",
      ],
      completeImageList: [
        {
          src:
            "https://farm4.staticflickr.com/3894/15008518202_c265dfa55f_h.jpg",

          msrc:
            "https://farm4.staticflickr.com/3894/15008518202_b016d7d289_m.jpg",
        },
      ],
    };
  },
  methods: {
    getImageItemStyle(src) {
      return {
        width: "200px",
        height: "200px",
        backgroundImage: `url(${src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      };
    },
    handleClick() {
      const pswp = this.$Pswp.open({
        items: [
          {
            html:
              '<div class="hello-slide"><h1>Hello world <a href="http://example.com">example.com</a></h1></div>',
          },
          {
            src:
              "https://farm4.staticflickr.com/3902/14985871946_24f47d4b53_h.jpg",
          },
        ],
      });

      pswp.listen("close", () => {
        console.log("emitted close");
      });
    },
  },
};
</script>
<style lang="scss">
.hello-slide {
  width: 100%;
  max-width: 400px;
  color: #fff;
  margin: 120px auto 0;
  text-align: center;
  font-family: "Helvetica Neue", Arial, sans-serif;
}
.hello-slide a {
  color: #b5aef7 !important;
}
</style>

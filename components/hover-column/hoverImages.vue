<template>
  <div class="hover-hero">
    <div
      class="col-container thumbnailsfortruck"
      :slide="1"
      :index="1"
      id="second"
      @mouseleave="mouseLeave"
      @mouseenter="mouseEnter('second', 3)"
      @click="routeto('second', '/produkte2/scooter')"
    >
      <div class="col-bg red"></div>
      <p class="center-xy">City <br />invader</p>
      <img class="logo" src="~static/images/logo.png" alt="" />
    </div>

    <div
      class="col-container"
      :slide="3"
      :index="3"
      id="third"
      @mouseleave="mouseLeave"
      @mouseenter="mouseEnter('third', 2)"
    >
      <div
        ref="img"
        alt="trucktrans"
        @click="routeto('third', '/produkte2/truck')"
        class="col-bg blue"
      ></div>
      <p class="center-xy">Fastest<br />transport</p>
      <img class="logo" src="~static/images/logo.png" alt="" />
    </div>
    <div class="forthbg">
      <div
        class="col-container thumbnailsfortruck"
        id="fourth"
        @mouseleave="mouseLeave"
        @mouseenter="mouseEnter('fourth', 1)"
      >
        <div
          @click="routeto('fourth', '/produkte2/tractor')"
          class="col-bg green2"
        ></div>
        <p style="margin-left: -15%" class="center-xy">
          Hevy<br />Duty<br />Class
        </p>
        <img class="logo" src="~static/images/logo.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  name: "HoverImages",
  data() {
    return {
      slide: 0,
      // aspectRatio: null,
      // thumbnailWidth: 1200,
      // thumbnailHeight: 700,
      // coverWidth: null,
      // coverHeight: null,
      // disableMouseEvent: false,
    };
  },

  // transition: {
  //   css: false,
  //   mode: "out-in",
  //   enter(el, done) {
  //     gsap.from(el, {
  //       autoAlpha: 0,
  //     });
  //   },
  //   leave(el, done) {
  //     gsap
  //       .timeline()
  //       .to(".thumbnailsfortruck", {
  //         autoAlpha: 0,
  //         duration: 1,
  //       })
  //       .to(
  //         ".image-section img",
  //         {
  //           css: false,
  //           smoothOrigin: true,
  //           left: "64%",
  //           scaleX: 1,
  //           scaleY: 1,
  //           ease: "expo.inOut",
  //           duration: 1,
  //         },
  //         0
  //       )

  //       .to(
  //         ".image-section",
  //         {
  //           smoothOrigin: true,
  //           css: false,
  //           scaleX: 1,
  //           scaleY: 1,
  //           ease: "expo.inOut",
  //           duration: 1,
  //           onComplete: done,
  //         },
  //         0
  //       );
  //   },
  // },

  mounted() {
    let $endLogo = $(".logo");
    let $colContainer = $(".col-container");
    let $colContainerTotal = $colContainer.length;
    let $colBg = $(".col-bg");
    let colMinScale = 0.8;
    TweenMax.set(
      $colContainer,
      { width: "100" / $colContainerTotal + "vw" },
      0
    );
    TweenMax.set($colBg, { scale: colMinScale }, 0); // avoid white edges by blur

    // transition
    // this.aspectRatio = this.$refs.img.naturalWidth / this.$refs.img.naturalHeight;
    // this.aspectRatio = 1
    // this.coverHeight = this.$refs.wrapper.getBoundingClientRect().height;

    this.setup();

    if (process.client) {
      window.addEventListener("resize", this.setup);
    }
  },

  methods: {
    routeto(id, productPath) {
      this.disableMouseEvent = true;
      setTimeout(() => {
        this.$router.push({
          path: productPath,
        });
      }, 300);
    },
    mouseEnter(id, num) {
      if (this.disableMouseEvent) {
        return;
      }
      // this.$store.commit("changeHoveredProduct", 0);
      this.$store.commit("changeSlide", num);

      let isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1; // detect firefox

      let $colContainer = $(".col-container");
      let $colContainerTotal = $colContainer.length;
      let $colBg = $(".col-bg");
      let colEase = Power2.easeOut;

      var $thisContainer = $("#" + id);
      var $ContainerExpandedWidth = 52; // TODO: improve formula to be dymamic

      TweenMax.to(
        $thisContainer,
        0.3,
        { width: $ContainerExpandedWidth + "vw", ease: colEase },
        0
      ); // this container will take up 50% width
      TweenMax.to($thisContainer.find("p"), 0.6, { scale: 3 }, 0);
      TweenMax.to($thisContainer.find(".logo"), 0.6, { scale: 0 }, 0);
      TweenMax.to($thisContainer.find($colBg), 0.6, { scale: 1.2 }, 0);

      TweenMax.to(
        $colContainer.not($thisContainer),
        0.3,
        { width: 100 / $colContainerTotal - 2 + "vw", ease: colEase },
        0
      ); // shrink other containers

      TweenMax.to(
        $colContainer.not($thisContainer).find("p"),
        0.3,
        { opacity: 0, scale: 0.5 },
        0
      );
      TweenMax.to(
        $colContainer.not($thisContainer).find("logo"),
        0.3,
        { opacity: 2, scale: 0 },
        0
      );
      TweenMax.to(
        $colContainer.not($thisContainer).find($colBg),
        0.3,
        { scale: 0.5, rotation: 0.1, force3D: true },
        0
      );

      if (!isFirefox) {
        TweenMax.to(
          $colContainer.not($thisContainer).find($colBg),
          0.3,
          { filter: "blur(5px)" },
          0
        ); // filter blur causes performance issues in firefox
      }
    },
    mouseLeave() {
      // if (this.disableMouseEvent) {
      //   return;
      // }

      // this.$store.commit("changeHoveredProduct", 0);
      let $colContainer = $(".col-container");
      let $colContainerTotal = $colContainer.length;
      let $colBg = $(".col-bg");
      let colEase = Power2.easeOut;
      let colMinScale = 0.8;

      TweenMax.to(
        $colContainer,
        0.6,
        { width: 100 / $colContainerTotal + "vw", ease: colEase },
        0
      ); // default width
      TweenMax.to($colContainer.find("p"), 0.3, { scale: 0, opacity: 2 }, 0);
      TweenMax.to(
        $colContainer.find(".logo"),
        0.3,
        { scale: 0, opacity: 0.5 },
        0
      );

      TweenMax.to($colBg, 0.3, { scale: colMinScale }, 0);

      TweenMax.to(
        $colContainer.not(this).find($colBg),
        0.55,
        {
          scale: colMinScale,
          filter: "blur(0px)",
          rotation: 0.01,
          force3D: true,
        },
        0
      );
    },

    setup() {
      this.coverWidth = window.innerWidth;

      const proportions = {
        scaleX: (this.thumbnailWidth / this.coverWidth) * this.aspectRatio,
        scaleY: this.thumbnailHeight / this.coverHeight,
        y: window.innerHeight / 2 - this.coverHeight / 2,
      };

      gsap.set(this.$refs.wrapper, {
        scaleX: proportions.scaleX,
        scaleY: proportions.scaleY,
        y: proportions.y,
      });

      gsap.set(this.$refs.img, {
        scaleX:
          (((1 / proportions.scaleX) * this.thumbnailWidth) /
            this.$refs.img.clientHeight) *
          this.aspectRatio,
        scaleY:
          ((1 / proportions.scaleY) * this.thumbnailHeight) /
          this.$refs.img.clientHeight,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
// fonts
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");

.trans {
  display: flex;
  align-items: center;
  will-change: transform;
  position: relative;
  overflow: hidden;
}
html {
  font-family: "Open Sans", sans-serif;
  background: #f9f9f9;
  box-sizing: border-box;
  user-select: none;
}

body {
  margin: 0;
}

html,
body {
  height: 100%;
  width: 100%;
}
.hover-hero {
  display: flex;
  background: white;
  z-index: 10;
  width: 100%;
}
// helper
.center-xy {
  color: black !important;
  top: 15%;
  left: 30%;

  position: absolute;
}
.logo {
  width: 30px;
  height: auto;
  top: 10%;
  left: 10%;
  position: absolute;
}

// the good stuff
.container {
  min-height: 70vh;
  width: 100%;
}

.col-container {
  background: transparent;

  z-index: 10;
  display: inline-block;
  position: relative;
  overflow: hidden;

  cursor: pointer;

  .col-bg {
    margin: 1px;
    z-index: 10;

    background-blend-mode: multiply;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    height: 70vh;
    content: "";

    &:before {
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgTWFjaW50b3NoIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjI4RkZBQTgzNzg1NzExRTU4NTQyODc3OUM4MTZGMUREIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjI4RkZBQTg0Nzg1NzExRTU4NTQyODc3OUM4MTZGMUREIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjhGRkFBODE3ODU3MTFFNTg1NDI4Nzc5QzgxNkYxREQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjhGRkFBODI3ODU3MTFFNTg1NDI4Nzc5QzgxNkYxREQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz66uHInAAAAIUlEQVR42mL5//8/AyMj42YGIGBigABfEMEIkoEBgAADAKvuBwVS8BAjAAAAAElFTkSuQmCC);
      background-size: 1px;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      position: absolute;
      opacity: 0;
      content: "";
    }
  }
  .green1 {
    background: url("~assets/gecropt/bug_e.png") no-repeat left center/auto 50%;
  }
  .red {
    background: url("~assets/gecropt/scooter.png") no-repeat center center/auto
      40%;
  }
  .blue {
    //  background: url("~assets/gecropt/truck_ooo.png") no-repeat 85% center/auto 50%;
    background: url("~assets/gecropt/truck.png") no-repeat center/auto 42%;
  }
  .green2 {
    background: url("~assets/gecropt/tractor.png") no-repeat 50% / auto 50%;
  }

  p {
    color: #fff;
    text-align: left;
  }
}
//   #second{
//     background: rgb(34,193,195);
// background: linear-gradient(0deg, rgba(34,193,195,0.22872899159663862) 0%, rgba(45,253,71,0.49763655462184875) 49%, rgba(45,253,71,0.01584383753501406) 98%);

//   }
//   #first{
//     background: rgb(34,193,195);
// background: linear-gradient(0deg, rgba(34,193,195,0.22872899159663862) 0%, rgba(45,253,71,0.49763655462184875) 49%, rgba(45,253,71,0.01584383753501406) 98%);
//   }
//   #third{
//   background-color: aqua;
// }
// #fourth{
// background: rgb(152,50,159);
// background: linear-gradient(42deg, rgba(152,50,159,0.6460959383753502) 0%, rgba(252,70,107,0.22592787114845936) 100%);}
</style>

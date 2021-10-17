<template>
  <div class="overlay">
    <span class="menu-trigger">
      <i class="menu-trigger-bar top"></i>
      <i class="menu-trigger-bar middle"></i>
      <i class="menu-trigger-bar bottom"></i>
    </span>
    <span class="close-trigger">
      <i class="close-trigger-bar left"></i>
      <i class="close-trigger-bar right"></i>
    </span>

    <div class="overlay-menu-container overlay-menu">
      <div class="overlay-menu-inner-container">
        <i class="menu-bg top"></i>
        <i class="menu-bg middle"></i>
        <i class="menu-bg bottom"></i>
        <div class="menu-container">
          <ul class="menu">
            <li v-for="(item, index) in navItems" :key="index">
              <nuxt-link :to="item.url" class="close-trigger">
                {{ item.text }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "overlaymenu",
  data() {
    return {
      navItems: [
        {
          text: "Scooter",
          fontImage: "scooter-font-dark.png",
          url: "/produkte2/scooter",
          image: "products/scooter/scooter.png",
        },
        {
          text: "Traktor",
          fontImage: "tractor-font-dark.png",
          url: "/produkte2/tractor",
          image: "products/tractor/tractor.png",
        },
        {
          text: "Truck",
          fontImage: "truck-font-dark.png",
          url: "/produkte2/truck",
          image: "products/truck/truck.png",
        },
        {
          text: "All Products",
          fontImage: "truck-font-dark.png",
          url: "/products",
        },
        {
          text: "About Us",
          url: "/about",
        },

        {
          text: "Gallery",
          url: "/gallery",
        },
        {
          text: "Contact",
          url: "/contactpage",
        },
      ],

      tlOpen: null,
      tlClose: null,
    };
  },
  mounted() {
    this.displayAnimatedMenu();
    if (process.client) {
      this.$nextTick(() => {
        window.addEventListener("resize", this.onResize);
      });
    }
  },
  methods: {
    onResize() {
      if (
        window.innerWidth >= 768 &&
        this.tlOpen &&
        this.tlOpen.progress() === 1
      ) {
        $(".close-trigger").click();
      }
    },
    displayAnimatedMenu() {
      //OPEN TRIGGER
      let parentContainer = $(".overlay-menu-container");
      let openTrigger = $(".menu-trigger");
      let openTriggerTop = openTrigger.find(".menu-trigger-bar.top");
      let openTriggerMiddle = openTrigger.find(".menu-trigger-bar.middle");
      let openTriggerBottom = openTrigger.find(".menu-trigger-bar.bottom");
      //CLOSE TRIGGER
      let closeTrigger = $(".close-trigger");
      let closeTriggerLeft = closeTrigger.find(".close-trigger-bar.left");
      let closeTriggerRight = closeTrigger.find(".close-trigger-bar.right");
      //LOGO
      let logo = $(".logo");
      //MENU
      let menuContainer = $(".menu-container");
      let menu = $(".menu");
      let menuTop = $(".menu-bg.top");
      let menuMiddle = $(".menu-bg.middle");
      let menuBottom = $(".menu-bg.bottom");
      //TL
      let tlOpen = new TimelineMax({ paused: true });
      let tlClose = new TimelineMax({ paused: true });
      //OPEN TIMELINE
      tlOpen
        .add("preOpen")
        .to(
          logo,
          0.4,
          {
            scale: 0.8,
            opacity: 0,
            ease: Power2.easeOut,
          },
          "preOpen"
        )
        .to(
          openTriggerTop,
          0.4,
          {
            x: "+80px",
            y: "-80px",
            delay: 0.1,
            ease: Power4.easeIn,
            onComplete: function () {
              closeTrigger.css("z-index", "99999");
            },
          },
          "preOpen"
        )
        .to(
          openTriggerMiddle,
          0.4,
          {
            x: "+=80px",
            y: "-=80px",
            ease: Power4.easeIn,
            onComplete: function () {
              openTrigger.css("visibility", "hidden");
            },
          },
          "preOpen"
        )
        .to(
          openTriggerBottom,
          0.4,
          {
            x: "+=80px",
            y: "-=80px",
            delay: 0.2,
            ease: Power4.easeIn,
          },
          "preOpen"
        )
        .add("open", "-=0.4")
        .to(
          menuTop,
          0.8,
          {
            y: "13%",
            ease: Power4.easeInOut,
          },
          "open"
        )
        .to(
          menuMiddle,
          0.8,
          {
            scaleY: 1,
            ease: Power4.easeInOut,
          },
          "open"
        )
        .to(
          menuBottom,
          0.8,
          {
            y: "-114%",
            ease: Power4.easeInOut,
          },
          "open"
        )
        .fromTo(
          menu,
          0.6,
          {
            y: 30,
            opacity: 0,
            visibility: "hidden",
          },
          {
            y: 0,
            opacity: 1,
            visibility: "visible",
            ease: Power4.easeOut,
          },
          "-=0.2"
        )
        .add("preClose", "-=0.8")
        .to(
          closeTriggerLeft,
          0.8,
          {
            x: "-=100px",
            y: "+=100px",
            ease: Power4.easeOut,
          },
          "preClose"
        )
        .to(
          closeTriggerRight,
          0.8,
          {
            x: "+=100px",
            y: "+=100px",
            delay: 0.2,
            ease: Power4.easeOut,
          },
          "preClose"
        );
      //CLOSE TIMELINE
      tlClose
        .add("close")
        .to(
          menuTop,
          0.2,
          {
            backgroundColor: "#6295ca",
            ease: Power4.easeInOut,
            onComplete: function () {
              closeTrigger.css("z-index", "5");
              openTrigger.css("visibility", "visible");
            },
          },
          "close"
        )
        .to(
          menuMiddle,
          0.2,
          {
            backgroundColor: "#6295ca",
            ease: Power4.easeInOut,
          },
          "close"
        )
        .to(
          menuBottom,
          0.2,
          {
            backgroundColor: "#6295ca",
            ease: Power4.easeInOut,
          },
          "close"
        )
        .to(
          menu,
          0.6,
          {
            y: 20,
            opacity: 0,
            ease: Power4.easeOut,
            onComplete: function () {
              menu.css("visibility", "hidden");
            },
          },
          "close"
        )
        .to(
          logo,
          0.8,
          {
            scale: 1,
            opacity: 1,
            ease: Power4.easeInOut,
          },
          "close",
          "+=0.2"
        )
        .to(
          menuTop,
          0.8,
          {
            y: "-113%",
            ease: Power4.easeInOut,
          },
          "close",
          "+=0.2"
        )
        .to(
          menuMiddle,
          0.8,
          {
            scaleY: 0,
            ease: Power4.easeInOut,
          },
          "close",
          "+=0.2"
        )
        .to(
          menuBottom,
          0.8,
          {
            y: "23%",
            ease: Power4.easeInOut,
            onComplete: function () {
              menuTop.css("background-color", "#ffffff");
              menuMiddle.css("background-color", "#ffffff");
              menuBottom.css("background-color", "#ffffff");
            },
          },
          "close",
          "+=0.2"
        )
        .to(
          closeTriggerLeft,
          0.2,
          {
            x: "+=100px",
            y: "-=100px",
            ease: Power4.easeIn,
          },
          "close"
        )
        .to(
          closeTriggerRight,
          0.2,
          {
            x: "-=100px",
            y: "-=100px",
            delay: 0.1,
            ease: Power4.easeIn,
          },
          "close"
        )
        .to(
          openTriggerTop,
          1,
          {
            x: "-=80px",
            y: "+=80px",
            delay: 0.2,
            ease: Power4.easeOut,
          },
          "close"
        )
        .to(
          openTriggerMiddle,
          1,
          {
            x: "-=80px",
            y: "+=80px",
            ease: Power4.easeOut,
          },
          "close"
        )
        .to(
          openTriggerBottom,
          1,
          {
            x: "-=80px",
            y: "+=80px",
            delay: 0.1,
            ease: Power4.easeOut,
          },
          "close"
        );
      //EVENTS
      openTrigger.on("click", function () {
        parentContainer.attr("style", "display: block; z-index: 999;");
        // $("body").attr("style", "overflow: hidden;");
        if (tlOpen.progress() < 1) {
          tlOpen.play();
        } else {
          tlOpen.restart();
        }
      });
      closeTrigger.on("click", function () {
        if (tlClose.progress() < 1) {
          tlClose.play();
          setTimeout(() => {
            parentContainer.attr("style", "display: none; z-index: 0;");
            // $("body").attr("style", "overflow: Initial;");
          }, 500);
        } else {
          tlClose.restart();
        }
      });
      this.tlOpen = tlOpen;
      this.tlClose = tlClose;
    },
  },
};
</script>

<style lang="scss" scoped>
overlay {
  width: 100%;
  overflow: hidden;
}
//letIABLES
//Black
$black-100: rgba(0, 0, 0, 1);
$black-90: rgba(0, 0, 0, 0.9);
$black-80: rgba(0, 0, 0, 0.8);
$black-70: rgba(0, 0, 0, 0.7);
$black-60: rgba(0, 0, 0, 0.6);
$black-50: rgba(0, 0, 0, 0.5);
$black-40: rgba(0, 0, 0, 0.4);
$black-30: rgba(0, 0, 0, 0.3);
$black-20: rgba(0, 0, 0, 0.2);
$black-10: rgba(0, 0, 0, 0.1);
//White
$white-100: rgba(255, 255, 255, 1);
$white-90: rgba(255, 255, 255, 0.9);
$white-80: rgba(255, 255, 255, 0.8);
$white-70: rgba(255, 255, 255, 0.7);
$white-60: rgba(255, 255, 255, 0.6);
$white-50: rgba(255, 255, 255, 0.5);
$white-40: rgba(255, 255, 255, 0.4);
$white-30: rgba(255, 255, 255, 0.3);
$white-20: rgba(255, 255, 255, 0.2);
$white-10: rgba(255, 255, 255, 0.1);
//Invisible
$transparent: rgba(255, 255, 255, 0);
//COLORS
$light-grey: #e0dfe1;
$light-grey-A: #f0f0f0;
$grey: #9f9e9f;
$dark-grey: #222222;
$white: #ffffff;
$blue: #346d52;
//BMW
$light-blue: #306849;
$dark-blue: #134c42;
$red: #d1253b;
//ANIMATIONS stuff
$hover: all 0.2s ease-in;
$slide: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
$slide-delay: all 0.4s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
$slide-slow: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
$zoom: all 1s cubic-bezier(0.55, 0, 0.1, 1);
$zoom-slow: all 2.4s cubic-bezier(0.55, 0, 0.1, 1);
//MIXINS
// ADDS A BROWSER PREFIX TO THE PROPERTY
@mixin css3-prefix($property, $value) {
  #{$property}: #{$value};
}
// TRANSFORM
@mixin transform($params) {
  @include css3-prefix("transform", $params);
}
////FONT IMPORT
//@font-face {
//  font-family: Nano;
//  src: url();
//};
//body {
//  background-color: lighten($dark-grey, 10%);
//  padding: 0;
//  font-family: 'Noto Sans', sans-serif;
//  text-align: center;
//}
//
.overlay-menu-container {
  display: none;
}
@media (max-width: 768px) {
  .overlay-menu-container {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    //background-color: $dark-grey;
    margin: 0 auto;
    /*max-width: 768px;*/
    width: 100%;
    //min-height: 568px;
    height: 100vh;

    overflow: hidden;
    box-shadow: 0 9px 13px 0 $black-30;
    /*z-index: 999;*/
  }
  .menu-trigger,
  .close-trigger {
    position: fixed;

    top: 1.5rem;
    right: 8%;
    display: block;
    width: 42px;
    height: 42px;
    cursor: pointer;
    z-index: 1021;
    &:hover {
      .menu-trigger-bar {
        &:before {
          width: 100%;
        }
      }
      .close-trigger-bar {
        &:before {
          width: 100%;
        }
      }
    }
  }
  .close-trigger {
    z-index: 5;
  }
  .menu-trigger-bar {
    display: block;
    width: 100%;
    height: 4px;
    background-color: black;
    margin-bottom: 6px;
    transform: rotate(-45deg);
    position: relative;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 0;
      height: 100%;
      background-color: $black-20;
      transition: $slide;
    }
    &.top {
      width: 50%;
    }
    &.middle {
      &:before {
        left: auto;
        right: 0;
      }
    }
    &.bottom {
      width: 50%;
      margin-left: 50%;
    }
  }
  .close-trigger-bar {
    display: block;
    width: 100%;
    height: 4px;
    background-color: $dark-grey;
    position: relative;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 0;
      height: 100%;
      background-color: $white-20;
      transition: $slide;
    }
    &.left {
      transform: translateX(100px) translateY(-100px) rotate(-45deg);
    }
    &.right {
      transform: translateX(-100px) translateY(-100px) rotate(45deg);
      top: -3px;
    }
  }
  .overlay-menu-inner-container,
  .menu-container {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
  }
  .overlay-menu-inner-container {
    /*display: none;*/
    z-index: 20;
  }
  .menu-container {
    display: flex;
    align-items: center;
  }
  .menu {
    display: block;
    width: 100%;
    padding: 20%;
    //opacity: 0;
    //visibility: hidden;
    li {
      text-align: left;
      display: block;
      padding: 15px 0;
      white-space: nowrap;
    }
    a {
      text-decoration: none;
      color: $dark-grey;
      display: inline-block;
      padding: 10px 0;
      position: relative;
      &:hover {
        &:before {
          opacity: 1;
          transform: translateX(0px);
        }
      }
      &:before {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 18px;
        height: 4px;
        opacity: 0;
        background-color: $dark-grey;
        transform: translateX(100px);
        transition: $slide;
      }
    }
  }
  .menu-bg {
    position: absolute;
    display: block;
    width: 300%;
    left: -53%;
    top: -25%;
    height: 58%;
    background-color: $white-100;
    &.top {
      top: -15%;
      left: -90%;
      transform: rotate(-45deg) translateY(-152%);
      //top: -25%;
    }
    &.middle {
      top: 25%;
      left: -112%;
      transform: rotate(-45deg) scaleY(0);
    }
    &.bottom {
      //bottom: 0;
      top: 105%;
      left: -65%;
      transform: rotate(-45deg) translateY(25%);
    }
  }
  #links {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    font-size: 13px;
    font-family: Tahoma, serif;
    color: #fff;
  }
  #links a {
    text-decoration: none;
    font-size: 2.3em;
    color: #fff;
  }
  #twitter {
    position: absolute;
    bottom: 15px;
    right: 20px;
  }
  #pens {
    position: absolute;
    bottom: 15px;
    left: 20px;
  }
}
//$breakpoint-tablet: 760px;
$mobile: 445px;
@media (max-width: $mobile) {
  .menu-bg {
    position: absolute;
    display: block;
    width: 220%;
    left: -53%;
    top: -25%;
    //top: -25%;
    height: 60%;
    background-color: $white-100;
    &.middle {
      top: 25%;
      left: -53%;
      transform: rotate(-45deg) scaleY(0);
    }
    &.top {
      left: 0;
      top: -20%;
      transform: rotate(-45deg) translateY(-152%);
    }
    &.bottom {
      top: 105%;
      transform: rotate(-45deg) translateY(25%);
      left: -17%;
    }
  }
}
</style>

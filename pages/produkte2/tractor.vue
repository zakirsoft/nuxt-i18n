<template>
  <div class="main">
    <div class="section1">
      <div class="hero">
        <div class="topsection">
          <div style="" class="main-logo">
            <img
              ref="links"
              class="prodLogo"
              src="@/static/images/tractor-font-dark.png"
              alt=""
            />
          </div>
          <div>
            <h2>NEXT<br />GENERATION<br />TRANSPORT</h2>
          </div>
          <div class="tagline">
            <!-- //vfor  -->
            <!-- <h4 class="subtitle">
              The best option for you
              <br />
              and youre Buissnes
            </h4> -->
          </div>
        </div>
        <div class="image-section">
          <img
            class="heroImg erste-truck"
            src="~assets/gecropt/tractor.png"
            alt="tactortrans"
          />

          <SomeDots
            v-if="isActive1"
            id="tooltip-target-1"
            @enter="dotenter"
            @leave="dotleave"
            :index="1"
            class="feat load"
          />
          <SomeDots
            v-if="isActive2"
            id="tooltip-target-2"
            @enter="dotenter"
            @leave="dotleave"
            :index="2"
            class="feat brakes"
          />
          <SomeDots
            v-if="isActive3"
            id="tooltip-target-3"
            @enter="dotenter"
            @leave="dotleave"
            :index="3"
            class="feat suspention"
          />
          <SomeDots
            v-if="isActive4"
            id="tooltip-target-4"
            @enter="dotenter"
            @leave="dotleave"
            :index="4"
            class="feat ergo"
          />
        </div>
      </div>
      <div ref="link-section" class="link-section row">
        <div class="link-item 1">
          <a
            @mouseenter="hovered(1)"
            @mouseleave="leavemouse(1)"
            :class="{ hovered: isHovered1 }"
            triggers="hover"
            class="btn btn-neutral btn-icon btn-twitter btn-footer"
          >
            <h4>Strong</h4>
          </a>
        </div>
        <div class="link-item 2">
          <a
            @mouseenter="hovered(2)"
            @mouseleave="leavemouse(2)"
            :class="{ hovered: isHovered2 }"
            class="btn btn-neutral btn-icon btn-facebook btn-footer"
          >
            <h4>Spacious</h4>
          </a>
        </div>
        <div class="link-item 3">
          <a
            @mouseenter="hovered(3)"
            @mouseleave="leavemouse(3)"
            :class="{ hovered: isHovered3 }"
            class="btn btn-neutral btn-icon btn-dribbble btn-footer"
          >
            <h4>Suspension</h4>
          </a>
        </div>
        <div class="link-item last">
          <a
            :class="{ hovered: isHovered4 }"
            @mouseenter="hovered(4)"
            @mouseleave="leavemouse(4)"
            class="btn btn-neutral btn-icon btn-youtube btn-footer"
          >
            <h4>Stability</h4>
          </a>
        </div>
        <div class="tooltipin">
          <b-tooltip
            :show.sync="isTooltip1"
            class="ttip"
            target="tooltip-target-1"
            triggers="hover"
          >
            You can now lift as much as 200 kg and take it anywhere you need.
            Tractor takes heavy-duty to the next level.
          </b-tooltip>
          <b-tooltip
            :show.sync="isTooltip2"
            class="ttip"
            target="tooltip-target-2"
            triggers="hover"
          >
            120 x 80 cm of space will make sure you can move everything you
            want. With Tractor, limits become a product of the past.
          </b-tooltip>
          <b-tooltip
            :show.sync="isTooltip3"
            class="ttip"
            target="tooltip-target-3"
            triggers="hover"
          >
            With full amortization, you can move around knowing the load won’t
            get damaged, and the ride will be even more enjoyable.
          </b-tooltip>
          <b-tooltip
            :show.sync="isTooltip4"
            class="ttip"
            target="tooltip-target-4"
            triggers="hover"
          >
            4 wheels make it as stable as it gets, allowing you to move freely
            and safely, no matter how much you’re carrying.
          </b-tooltip>
        </div>
      </div>
    </div>
    <div id="section0">
      <h2 class="sectionbrake">Ecological sustainability</h2>
      <h2 class="sectionbrake">...ever thought of??</h2>
    </div>
    <div class="section2">
      <div class="breake-line">
        <div class="colored white"></div>
        <div class="colored blue"></div>
        <div class="colored red"></div>
        <div class="big-girl">
          <div class="girly-text">
            <p class="heiss">WE</p>
            <p class="a heiss">DO</p>
            <p class="b heiss">EVERY</p>
            <p class="b heiss">DAY</p>
          </div>
          <img
            class="big-girl-img"
            src="~assets/images/traktor-girl.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="rethinking" id="section1">
      <h2 class="sectionbrake">rethinkig ancestors, thinking for successors</h2>
      <h2 class="sectionbrake">we developed Tractor</h2>
    </div>
    <div class="section2">
      <div class="black-tractor">
        <img class="black-img" src="~assets/images/tractor-black.png" alt="" />
      </div>
      <div class="over-black">
        <h4 class="over-black1">WORKING CLASS</h4>
        <p class="desc overblackwhite">up to<br />200kg</p>
      </div>
    </div>

    <div id="section2">
      <h4 class="sectionbrake">See what it can</h4>
      <h2 class="sectionbrake"></h2>
    </div>
    <div class="section4 px-3">
      <div class="container">
        <h4 class="description">Big enought?</h4>
        <p class="description-text description">
          Tractor takes heavy-duty to the next level.<br />
          With our biggest cargo space and load capacity, there are no more
          limits for bikers.
        </p>
        <p class="description-text description">
          It is also highly flexible, allowing you to leave everybody behind
          while you push forward faster than ever before.
        </p>
      </div>
    </div>
    <div class="section3">
      <div class="container">
        <div class="boxInit"></div>

        <div class="boxen">
          <img
            class="bgzero"
            src="~/assets/gecropt/tractor_box.png"
            alt=""
            srcset=""
          />
        </div>
      </div>
    </div>
    <div class="section-slider"></div>
  </div>
</template>

<script>
import gsap from "gsap/all";
// import { GSDevTools, ScrollTrigger } from "gsap/all";
import ProductDetail from "@/components/product-detail/ProductDetail.vue";
import SomeDots from "@/components/SomeDots.vue";

// gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    SomeDots,
    ProductDetail,
  },
  mounted() {
    //  this.rotation()
  },
  created() {
    this.$store.commit("changeSlide", 0);
  },
  data() {
    return {
      isActive1: true,
      isActive2: true,
      isActive3: true,
      isActive4: true,
      isTooltip1: false,
      isTooltip2: false,
      isTooltip3: false,
      isTooltip4: false,
      isHovered1: false,
      isHovered2: false,
      isHovered3: false,
      isHovered4: false,
      currentDescription: 0,
      currentImage: 0,
      images: ["truck_o.png", "truck_ow.png", "truck_ob.png", "truck_obb.png"],
      size: [
        "80cm x 60cm",
        "80cm x 60cm x 25cm",
        "80cm x 60cm x 50cm",
        "120cm x 60cm x 50cm",
      ],
      description: [
        "Big or small, throw it on",
        "Multipurpose, one bucket",
        "Safe and secure, just as it should be",
        "It doesnt get bigger than that",
      ],
    };
  },
  transition: {
    enter(el, done) {
      gsap
        .timeline()
        .from(".topsection", {
          autoAlpha: 0,
          yPercent: 100,
          duration: 0.5,
          ease: "power3.inOut",
        })
        .from(
          ".link-section",
          {
            autoAlpha: 0,
            yPercent: 100,
            duration: 0.5,
            ease: "power3.inOut",
          },
          "<0.05"
        )
        .from(
          ".feat",
          {
            autoAlpha: 0,
            yPercent: 100,
            duration: 1,
            ease: "power3.inOut",
            onComplete: done,
          },
          "<0.15"
        );
    },
    leave(el, done) {
      gsap.to(el, { autoAlpha: 0, onComplete: done });
    },
  },
  methods: {
    //   p1() {
    //   this.$gsap.to('p', { rotation: 27, x: 100, duration: 1 })
    // },
    // rotation() {
    //   const gsap = this.$gsap
    //   gsap.from('.link-item', { stagger:1, x: 100, duration: 0.5, ease: Power3 })
    // },

    resetDots() {
      console.log("SomeDotsleft");
      this.isActive1 = true;
      this.isActive2 = true;
      this.isActive3 = true;
      this.isActive4 = true;
    },
    dotenter(index) {
      if (index == 1) {
        this.isHovered1 = true;
        this.isActive2 = false;
        this.isActive3 = false;
        this.isActive4 = false;
      }
      if (index == 2) {
        this.isHovered2 = true;
        this.isActive1 = false;
        this.isActive3 = false;
        this.isActive4 = false;
      }
      if (index == 3) {
        this.isHovered3 = true;
        this.isActive1 = false;
        this.isActive2 = false;
        this.isActive4 = false;
      }
      if (index == 4) {
        this.isHovered4 = true;
        this.isActive1 = false;
        this.isActive2 = false;
        this.isActive3 = false;
      }
    },
    dotleave(index) {
      if (index == 1) {
        this.isHovered1 = false;
        this.resetDots();
      }
      if (index == 2) {
        this.isHovered2 = false;
        this.resetDots();
      }
      if (index == 3) {
        this.isHovered3 = false;
        this.resetDots();
      }
      if (index == 4) {
        this.isHovered4 = false;
        this.resetDots();
      }
    },
    hovered(index) {
      if (index == 1) {
        this.isHovered1 = true;
        this.isActive4 = false;
        this.isActive2 = false;
        this.isActive3 = false;

        setTimeout(() => (this.isTooltip1 = true), 100);
      }
      if (index == 2) {
        this.isHovered2 = true;
        this.isActive1 = false;
        this.isActive3 = false;
        this.isActive4 = false;

        setTimeout(() => (this.isTooltip2 = true), 100);
      }
      if (index == 3) {
        this.isHovered3 = true;
        this.isActive1 = false;
        this.isActive2 = false;
        this.isActive4 = false;

        setTimeout(() => (this.isTooltip3 = true), 100);
      }
      if (index == 4) {
        this.isHovered4 = true;

        this.isActive1 = false;
        this.isActive3 = false;
        this.isActive2 = false;
        setTimeout(() => (this.isTooltip4 = true), 100);
      }
    },
    leavemouse(index) {
      if (index == 1) {
        this.resetDots();
        this.isTooltip1 = false;

        setTimeout(() => (this.isHovered1 = false), 100);
      }
      if (index == 2) {
        this.resetDots();
        this.isTooltip2 = false;

        setTimeout(() => (this.isHovered2 = false), 100);
      }
      if (index == 3) {
        this.resetDots();
        this.isTooltip3 = false;

        setTimeout(() => (this.isHovered3 = false), 100);
      }
      if (index == 4) {
        this.resetDots();
        this.isTooltip4 = false;

        setTimeout(() => (this.isHovered4 = false), 100);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.big-girl {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
}
.big-girl-img {
  margin-top: -10%;
  width: 100%;
  min-height: 50vh;
  object-fit: cover;
}
.girly-text {
  font-size: 148px;
  top: 15%;
  right: 35%;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  line-height: 1;

  color: rgb(194, 192, 192);

  p {
    justify-content: left;
    position: relative;
    width: 12vw;
  }
}
.section1 {
  max-height: 90vh;
}
.over-black {
  position: absolute;
  max-width: 70%;
  top: 10%;
  left: 60%;
}
.over-black1 {
  font-size: 80px;
  color: #f7c705;
  top: 8%;
  left: 70%;
}
.overblackwhite {
  font-size: 80px;
  position: relative;
  left: 0;
}
.black-tractor {
  display: flex;
  background: black;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
}
.black-img {
  flex-shrink: 0;
  object-fit: cover;
  min-height: 100%;
  max-height: 90vh;
}

a.btn:hover {
  color: cyan;
}
.size {
  margin-top: 4%;
  line-height: 1rem;
}
.hero {
  margin-top: 3%;
  max-height: 90vh;
}
.tooltip.tooltip-inner {
  color: cyan;
  background-color: #fff;
}
.boxen {
  position: relative;
}
.container {
  width: 100%;
  justify-content: center;
  align-items: center;
}

.desc {
  color: rgb(109, 102, 102);
  font-size: 50px;
  line-height: 0.8em;
}
.tooltipin,
.tooltip-inner {
  color: cyan;
}
.hovered {
  color: cyan !important;
}
.hypo {
  justify-content: center;
  align-items: center;
}

* {
  box-sizing: border-box;
}
.description {
  margin: 5%;
  overflow: auto;
}
.section {
  width: 100%;
  position: relative;
}
.section4 {
  height: auto;
  display: flex;
  width: 100%;
  position: relative;
}
.boxInit {
  margin-top: 6vw;
  max-width: 40%;
  height: 50px;
  margin-bottom: -8%;
}
.prod-detail {
  position: relative;
  transform: translate(0, -50%);
  justify-content: center;
  align-items: flex-end;
  width: 80vw;
  margin: auto;
  padding: auto;
}
#section0 {
  margin-top: 5%;
  position: relative;
  background: black;
  overflow: hidden;
  width: 100%;

  transform-origin: left top;
  transform: skewY(3deg);
  z-index: 10;
}
#section1 {
  font-size: 20px;
  line-height: 1;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  background: black;
  overflow: hidden;
  width: 100%;

  z-index: 10;
}
#section2 {
  top: 0;
  position: relative;
  background: black;
  overflow: hidden;
  width: 100%;

  transform-origin: right bottom;
  transform: skewY(3deg);
  z-index: 10;
}
.sectionsmall {
  z-index: 1000;
  font-size: 30px;
  padding: auto;
  color: white;
  margin: 50px 5%;
}
.sectionbrake-center {
  font-size: 50px;
  padding: auto;
  color: white;
  margin: 50px 5%;
  display: flex;
  justify-content: center;
}
.sectionbrake {
  font-size: 28px;
  padding: auto;
  color: white;
  margin: 50px 5%;
}

.giveit {
  display: flex;
  float: left;
  font-size: 80px;
}

.description-text {
  margin-top: revert;
  align-items: left;
  font-size: 32px;
  line-height: 1.3;
  color: rgb(109, 102, 102);
  font-family: "Montserrat", sans-serif;
}
.topsection {
  position: absolute;
  margin-left: 5%;
}
.tooltip {
  color: aqua;
  margin: 2%;
  padding: 0;
}
.feat {
  overflow: hidden;
  position: absolute;
  align-self: center;
  transform: translate(-50%, 50%);
}
.suspention {
  top: 46%;
  left: 26%;
}
.load {
  top: 33%;
  left: 30%;
}
.ergo {
  top: 63%;
  left: 55%;
}
.brakes {
  top: 56%;
  left: 78%;
}

.main {
  width: 100%;
  margin: 0;
}
.prodLogo {
  width: auto;
  height: 40px;
}
.image-section {
  max-height: 70vh;
  width: 100%;
  max-width: 1000px;
  margin: auto;
  margin-bottom: 0;
  display: flex;
}

.heroImg {
  overflow: hidden;
  width: 100%;
  height: auto;
  object-fit: contain;
  max-height: 100%;
}
.heroImg.some {
  position: absolute;
  left: 0;
}
.heroImg.erste-truck {
  margin-bottom: -6%;
}

.bgzero {
  width: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
}
.link-section {
  justify-content: center;
  align-content: center;
  margin: 0;
  align-items: center;
}
.link-item {
  border-right: 1px solid rgb(85, 85, 85);

  width: 25%;
}
.section2 {
  margin: 0;
  width: 100%;
  position: relative;
  display: flex;
}

.even-col {
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.truck-area {
  margin-left: 5%;
  margin-top: 5%;
  align-items: center;
  width: 80%;

  float: left;
}

.pic-left {
  min-width: 70%;
  max-height: 100%;
  height: auto;
  object-fit: contain;
}
.pic-right {
  max-width: 100%;
  height: auto;
  object-fit: contain;
}
.hoveredBtn {
  color: cyan; // so that it overwreite
}

.section3 {
  max-width: 100%;
  margin: 0;
  padding: 0;
}
.wrapper {
  display: flex;
  text-align: center;
  justify-content: center;
}
.features-grid {
  position: relative;
  margin-top: -5%;
  margin-bottom: 10%;
}
.feature-line {
  justify-content: center;
  top: 0;

  [class*="col-"] {
    border-right: 1px solid black;

    &:last-child {
      border: 0;
    }
  }

  .btn {
    margin: 0;

    padding-top: 22px !important;
    padding-bottom: 22px !important;
    height: auto;

    .fab {
      font-size: 24px;
    }
  }
}
.link-item.last {
  border-right: none;
}
.two {
  display: none;
}
@media only screen and (min-width: 1600px) {
  .heroImg {
    overflow: hidden;
    width: 100%;
    height: auto;
    object-fit: contain;
    max-height: 100%;
  }
  .image-section {
    width: 100%;
    max-width: 1500px;
    margin-left: auto;
    margin: auto;
    margin-bottom: 0;
    display: flex;
  }
  .description-text {
    margin: 0% 10% 10% 0%;
    padding: auto;
    font-size: 2em;
    font-family: "Montserat", sans-serif;
  }
  .suspention {
    top: 38%;
    left: 28%;
  }
  .load {
    top: 40%;
  }
  .ergo {
    top: 20%;
    left: 58%;
  }
  .brakes {
    top: 35%;
    left: 75%;
  }
}
@media only screen and (min-width: 1370px) {
  .heroImg {
    overflow: hidden;
    width: 100%;
    height: auto;
    object-fit: contain;
    max-height: 80%;
  }
  .image-section {
    min-height: 70vh;
    width: 100%;
    max-width: 1300px;
    margin-left: auto;
    margin: auto;
    margin-bottom: 0;
    display: flex;
  }
  .suspention {
    top: 46%;
    left: 23%;
  }
  .load {
    top: 30%;
    left: 30%;
  }
  .ergo {
    top: 64%;
    left: 54%;
  }
  .brakes {
    top: 56%;
    left: 78%;
  }
  .prod-detail {
    margin-top: -30%;
    height: 700px;
  }
}
@media only screen and (min-width: 1080px) {
  .heroImg {
    overflow: hidden;
    width: 100%;
    height: auto;
    object-fit: contain;
    max-height: 100%;
    margin-top: -10%;
  }
  .image-section {
    width: 100%;
    max-width: 1500px;
    margin-left: auto;
    margin: auto;
    margin-bottom: 0;
    display: flex;
  }
  .description-text {
    margin: 0% 10% 10% 0%;
    padding: 0 5%;
    font-size: 2em;
  }
  .suspention {
    top: 40%;
    left: 25%;
  }
  .load {
    top: 30%;
  }
  .ergo {
    top: 64%;
    left: 54%;
  }
  .brakes {
    top: 56%;
    left: 78%;
  }
}

@media only screen and (max-width: 1025px) {
  .big-girl-img {
    margin-top: -10%;
    width: 100%;
  }
  .girly-text {
    font-size: 128px;
    top: 15%;
    right: 40%;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    line-height: 0.85;

    color: rgb(194, 192, 192);

    p {
      justify-content: left;
      position: relative;
      width: 12vw;
    }
  }
  .heroImg {
    margin-top: -5%;
    margin-bottom: 0;
    max-height: 90%;
  }
  .main-logo {
    margin-top: 5%;
  }
  .over-black {
    left: 50%;
  }
  .link-item h4 {
    font-size: 22px;
  }
  .link-item {
    padding: 0;
  }
  .suspention {
    top: 40%;
    left: 25%;
  }
  .load {
    top: 34%;
  }
  .ergo {
    top: 64%;
    left: 54%;
  }
  .brakes {
    top: 56%;
    left: 78%;
  }

  .truck-area {
    width: 40%;
  }
  .even-col {
    width: 60%;
  }
  .giveit {
    font-size: 70px;
  }
  .description-text {
    text-align: left;
    font-size: 28px;
    margin-right: 5%;
  }
  .boxInit {
    margin-top: 10vw;
    max-width: 50%;
  }
  .feature-line .btn {
    padding-top: 0;
  }
  .prod-detail {
    margin-top: -10%;
    height: 670px;
  }
  .sidebar-panel {
    width: 400px;
  }
  #section1 {
    z-index: 1;
  }
}
@media only screen and (max-width: 768px) {
  .big-girl-img {
    margin-top: -10%;
    width: 100%;
  }
  .girly-text {
    font-size: 102px;
    top: 15%;
    right: 39%;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    line-height: 0.72;

    color: rgb(194, 192, 192);

    p {
      justify-content: left;
      position: relative;
      width: 12vw;
    }
  }

  .over-black1 {
    font-size: 62px;
  }
  .link-item h4 {
    font-size: 22px;
  }
  .description-text {
    font-size: 22px;
  }

  .link-item {
    padding: 0;
    width: 25%;
  }
  .suspention {
    top: 33%;
    left: 19%;
  }
  .load {
    top: 25%;
    left: 24%;
  }
  .ergo {
    top: 48%;
    left: 59%;
  }
  .brakes {
    top: 38%;
    left: 87%;
  }
  .giveit {
    font-size: 55px;
  }
  .section3 {
    height: 900px;
  }
  .desc {
    color: rgb(109, 102, 102);
    font-size: 32px;
  }
  .product-details {
    margin-top: 5%;
  }
}
@media only screen and (max-width: 600px) {
  .heroImg {
    padding: 0;
    margin: 0;
    width: 100%;
  }
  .one {
    display: none;
  }
  .two {
    display: flex;
    position: relative;
  }
  .heroImg.erste-truck {
    margin-top: 0;
  }
  .tagline {
    margin-bottom: 5%;
    font-size: 0.5em;
  }
  .link-item {
    width: 50%;
  }
  .link-item:nth-child(even) {
    border-right: 0;
  }
  .link-item:first-child {
    border-bottom: 1px solid black;
  }
  .link-item:nth-child(2) {
    border-bottom: 1px solid black !important;
  }
}
@media only screen and (max-width: 414px) {
  .big-girl-img {
    margin-top: -2%;
    width: 200%;
  }
  .girly-text {
    font-size: 40px;

    right: 65%;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    line-height: 0.4;

    color: rgb(194, 192, 192);

    p {
      justify-content: left;
      position: relative;
      width: 12vw;
    }
  }
  .container {
    padding: 0;
    margin: 0;
  }
  .black-tractor {
    max-height: 80vh;
  }
  .black-img {
    object-fit: cover;
    width: auto;
    height: 70vh;
  }
  .prodLogo {
    height: 20px;
  }
  .tagline {
    width: 80%;
    font-size: 0.9rem;
  }
  .heroImg {
    margin: 20%;
    margin-bottom: -5%;
  }
  .backimg {
    top: 32%;
    right: 19%;
  }
  .load {
    top: 30%;
    left: 32%;
  }
  .brakes {
    top: 36%;
    left: 83%;
  }
  .suspention {
    top: 36%;
    left: 20%;
  }
  .ergo {
    top: 28%;
    left: 56%;
  }
  .heroImg.erste-truck {
    padding-top: 10%;
  }
  .link-item h4 {
    font-size: 18px;
  }
  .link-section {
    margin-bottom: 15%;
  }
  #section1 {
    font-size: 0.8em;
    height: 200px;
  }
  .sectionbrake {
    font-size: 24px;
  }
  .over-black1 {
    font-size: 48px;
  }
  .over-black {
    line-height: 1;
    top: 0%;
    left: 25%;
  }
  .girly-text {
    top: 32%;
    left: 42%;
    font-size: 4em;
  }
  .truck-area.even-col {
    width: 100%;
  }
  .pic-left {
    max-width: 225px;
    max-height: 305px;
  }
  .giveit {
    font-size: 35px;
  }
  .desc {
    font-size: 19px;
  }
  .prod-detail {
    margin-top: 50%;
  }
  .heroImg {
    margin: 20% 0;
  }
  .boxInit {
    max-width: 100%;
  }
  .section3 {
    height: 600px;
  }
}

@media only screen and (max-width: 376px) {
  #section1 {
    font-size: 0.7em;
    height: 180px;
  }
  .sectionbrake {
    font-size: 22px;
  }
  .load {
    top: 37%;

    left: 45%;
  }
  .brakes {
    top: 37%;

    left: 83%;
  }
  .suspention {
    top: 37%;

    left: 28%;
  }
  .ergo {
    top: 28%;

    left: 56%;
  }
  .sectionbrake {
    font-size: 22px;
    margin: 15px 35px;
  }
  h4.giveit {
    font-size: 32px;
  }
  .heroImg.erste-truck {
    margin-top: 20%;
    padding-top: 10%;
  }
}
@media only screen and (max-width: 360px) {
  .girly-text {
    font-size: 3em;
  }
  .active-color-red {
    background: #a71d31;
  }
  #section1 {
    height: 270px;
  }

  .sectionbrake {
    font-size: 22px !important;
  }
  .top-section div {
    left: 6%;
  }

  .load {
    top: 36% !important;
    left: 45% !important;
  }
  .brakes {
    top: 36% !important;
    left: 79% !important;
  }
  .suspention {
    top: 37% !important;
    left: 28%;
  }
  .ergo {
    top: 31% !important;
    left: 56% !important;
  }
  .giveit {
    font-size: 30px;
  }
  h4.subtitle {
    padding: 0 10% 0 0;
  }
  .truck-area {
    margin-left: 20px;
  }

  .over-black1 {
    line-height: 1;
    font-size: 42px;
  }
  .prod-detail {
    margin-top: 15%;
    height: 500px;
  }
}
@media only screen and (max-width: 321px) {
  .prodLogo {
    height: 20px;
  }
  .tagline h4 {
    font-size: 20px;
  }
  .sectionbrake {
    font-size: 22px;
  }
  #section1 {
    height: 260px;
  }
  .girly-text {
    font-size: 3em;
  }
  .active-color-red {
    background: #a71d31;
  }

  .btn {
    padding-top: 30px;
    padding-bottom: 30px;
  }
}
.link-item:last-child {
  border: 0;
}

.btn {
  margin: 0;
  width: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
  height: auto;
}
</style>

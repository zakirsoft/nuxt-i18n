<template>
  <div class="main">
    <div class="section1">
      <div class="hero">
        <div class="topsection">
          <div style="" class="main-logo">
            <img
              class="prodLogo"
              src="@/static/images/truck-font-dark.png"
              alt=""
            />
          </div>
          <div class="tagline">
            <h4 class="subtitle">
              The best option for you
              <br />
              and youre Buissnes
            </h4>
          </div>
        </div>
        <div class="image-section">
          <img
            class="heroImg erste-truck"
            src="~assets/gecropt/truck.png"
            alt="trucktrans"
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
      <div class="link-section row">
        <div class="link-item 1">
          <a
            @mouseenter="hovered(1)"
            @mouseleave="leavemouse(1)"
            :class="{ hovered: isHovered1 }"
            triggers="hover"
            class="btn btn-neutral btn-icon btn-twitter btn-footer"
          >
            <h4>Spacious</h4>
          </a>
        </div>
        <div class="link-item 2">
          <a
            @mouseenter="hovered(2)"
            @mouseleave="leavemouse(2)"
            :class="{ hovered: isHovered2 }"
            class="btn btn-neutral btn-icon btn-facebook btn-footer"
          >
            <h4>Safety</h4>
          </a>
        </div>
        <div class="link-item 3">
          <a
            @mouseenter="hovered(3)"
            @mouseleave="leavemouse(3)"
            :class="{ hovered: isHovered3 }"
            class="btn btn-neutral btn-icon btn-dribbble btn-footer"
          >
            <h4>Load Suspension</h4>
          </a>
        </div>
        <div class="link-item last">
          <a
            :class="{ hovered: isHovered4 }"
            @mouseenter="hovered(4)"
            @mouseleave="leavemouse(4)"
            class="btn btn-neutral btn-icon btn-youtube btn-footer"
          >
            <h4>Strong</h4>
          </a>
        </div>
        <div class="tooltipin">
          <b-tooltip
            :show.sync="isTooltip1"
            class="ttip"
            target="tooltip-target-1"
            triggers="hover"
          >
            With 60 x 80 cm of space, on Truck, you can now put anything you
            need and move it anywhere you want quickly and efficiently.
          </b-tooltip>
          <b-tooltip
            :show.sync="isTooltip2"
            class="ttip"
            target="tooltip-target-2"
            triggers="hover"
          >
            With great power comes great responsibility but Truck has the brakes
            to stop you when you need it the most.
          </b-tooltip>
          <b-tooltip
            :show.sync="isTooltip3"
            class="ttip"
            target="tooltip-target-3"
            triggers="hover"
          >
            Truck is the only bike on the market with load suspension, allowing
            you to travel on different terrains, even with load.
          </b-tooltip>
          <b-tooltip
            :show.sync="isTooltip4"
            class="ttip"
            target="tooltip-target-4"
            triggers="hover"
          >
            Truck can hold 120 kg of weight, making it a perfect tool for moving
            heavy objects and people with the ease of a bike.
          </b-tooltip>
        </div>
      </div>
    </div>
    <div class="section2">
      <div class="truck-area even-col">
        <h4 class="giveit">One and only</h4>
        <p class="desc">with<br />suspention for your load</p>
      </div>
      <div class="even-col">
        <img
          class="pic-left"
          src="@/static/images/products/truck/truck_3.jpg"
          alt=""
        />
      </div>
    </div>
    <div id="section1">
      <h2 class="sectionbrake">Don't wait</h2>
      <h2 class="sectionbrake">and pick your size</h2>
    </div>
    <div class="section2">
      <div class="truck-area even-col">
        <p class="description-text">
          Truck is a bike for the most demanding riders out there.<br />
          <br />
          With enough space and load capacity to move everything you need, this
          little
          <span class="text-deco"> <strong>StrongBike</strong> </span> will help
          you with some of the heaviest tasks, again and again, with other
          people looking at you in awe, wondering how smoothly you’re moving.
        </p>
      </div>
      <div class="even-col one">
        <img
          class="pic-right"
          src="@/static/images/products/truck/truck-4.jpg"
          alt=""
        />
      </div>
    </div>
    <div class="two">
      <img
        class="pic-right"
        src="@/static/images/products/truck/truck-4.jpg"
        alt=""
      />
    </div>

    <div id="section1">
      <h2 class="sectionbrake">Don't wait</h2>
      <h2 class="sectionbrake">and pick your size</h2>
    </div>
    <div class="section3">
      <div class="container">
        <AccesoriesCardsDispley
          v-for="cardInfo in largeCardInfo.filter(
            (cardInfo) => cardInfo.name === 'truck'
          )"
          :key="cardInfo.id"
          :cardsSection="cardInfo"
        />
        <div class="boxInit">
          <h4 class="description">
            {{ description[currentImage] }}
          </h4>
          <div class="size">
            <p>size:</p>
            <p>{{ size[currentImage] }}</p>
          </div>
        </div>

        <div class="boxen">
          <img
            class="heroImg"
            src="~/assets/gecropt/truck_o.png"
            alt=""
            srcset=""
          />
          <img
            class="heroImg some"
            :src="require(`~/assets/gecropt/${images[currentImage]}`)"
            alt=""
            srcset=""
          />
        </div>
        <div class="features-grid">
          <div class="feature-line">
            <div class="container">
              <div class="row hypo">
                <div class="link-item 1">
                  <a
                    @click.prevent="currentImage = 0"
                    class="btn btn-neutral btn-icon btn-twitter btn-footer"
                  >
                    WoodWork
                  </a>
                </div>
                <div class="link-item 2">
                  <a
                    @click.prevent="currentImage = 1"
                    class="btn btn-neutral btn-icon btn-facebook btn-footer"
                  >
                    Bucket
                  </a>
                </div>

                <div class="link-item 3">
                  <a
                    @click.prevent="currentImage = 2"
                    :class="hovered"
                    class="btn btn-neutral btn-icon btn-dribbble btn-footer"
                  >
                    Slider Box
                  </a>
                </div>
                <div class="link-item last">
                  <a
                    @click.prevent="currentImage = 3"
                    class="btn btn-neutral btn-icon btn-youtube btn-footer"
                  >
                    Big Box
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section4">
      <!-- TODO[epic=Slider] -->
      <ProductSlider :product="$store.state.products.truck" />
    </div>
  </div>
</template>

<script>
import SomeDots from "@/components/SomeDots.vue";
import gsap from "gsap";

import ProductDetail from "@/components/product-detail/ProductDetail.vue";
import ProductSlider from "@/components/product-detail/ProductSlider.vue";
import { largeCardSections } from "@/store/accesories.js";
export default {
  components: {
    SomeDots,
    ProductDetail,
    ProductSlider,
  },
  created() {
    this.$store.commit("changeSlide", 2);
  },
  data() {
    return {
      largeCardInfo: largeCardSections,
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
  // computed: {
  //   largeCardTruck: function () {
  //     return this.largeCardInfo.filter((cardInfo) => cardInfo.name === "truck");
  //   },
  // },
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

        setTimeout(() => (this.isTooltip1 = true), 500);
      }
      if (index == 2) {
        this.isHovered2 = true;
        this.isActive1 = false;
        this.isActive3 = false;
        this.isActive4 = false;

        setTimeout(() => (this.isTooltip2 = true), 500);
      }
      if (index == 3) {
        this.isHovered3 = true;
        this.isActive1 = false;
        this.isActive2 = false;
        this.isActive4 = false;

        setTimeout(() => (this.isTooltip3 = true), 500);
      }
      if (index == 4) {
        this.isHovered4 = true;

        this.isActive1 = false;
        this.isActive3 = false;
        this.isActive2 = false;
        setTimeout(() => (this.isTooltip4 = true), 500);
      }
    },
    leavemouse(index) {
      if (index == 1) {
        this.resetDots();
        this.isTooltip1 = false;

        setTimeout(() => (this.isHovered1 = false), 500);
      }
      if (index == 2) {
        this.resetDots();
        this.isTooltip2 = false;

        setTimeout(() => (this.isHovered2 = false), 500);
      }
      if (index == 3) {
        this.resetDots();
        this.isTooltip3 = false;

        setTimeout(() => (this.isHovered3 = false), 500);
      }
      if (index == 4) {
        this.resetDots();
        this.isTooltip4 = false;

        setTimeout(() => (this.isHovered4 = false), 500);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
a.btn:hover {
  color: cyan;
}
.size {
  margin-top: 4%;
  line-height: 1rem;
}
.hero {
  margin-top: 3%;
}
.tooltip.tooltip-inner {
  color: cyan;
  background-color: #fff;
}
.boxen {
  display: flex;
  position: relative;
}
.container {
  justify-content: center;
  align-items: center;
}
.section4 {
  margin-bottom: 20%;
  display: flex;
  justify-content: center;
  position: relative;
  height: inherit;
}
section1 {
  max-height: 90vh;
}
.desc {
  color: rgb(109, 102, 102);
  font-size: 50px;
  margin-bottom: 0;
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
  overflow: auto;
}
.section {
  width: 100%;
  position: relative;
}
.boxInit {
  margin-top: 6vw;
  max-width: 40%;
  height: 50px;
  margin-bottom: -8%;
}

#section1 {
  top: 0;
  position: relative;
  background: black;
  overflow: hidden;
  width: 100%;
  height: 300px;
  transform-origin: right top;
  transform: skewY(3deg);
  z-index: 10;
}
.sectionbrake {
  font-size: 50px;
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
  font-size: 28px;

  line-height: 1.3;
  color: rgb(109, 102, 102);
  font-family: "Montserrat", sans-serif;
}

.topsection {
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
.load {
  top: 40%;
  left: 45%;
}
.ergo {
  top: 25%;
  left: 65%;
}
.suspention {
  top: 45%;
  left: 35%;
}
.brakes {
  top: 45%;
  left: 85%;
}
.tagline {
  margin-top: 2%;
  max-width: 80%;
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
  width: 100%;
  max-height: 70vh;
  max-width: 1000px;
  margin-left: auto;
  margin: auto;
  margin-bottom: -15%;
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
}

.heroImg.erste-truck {
  margin-top: -15%;
}

.link-section {
  justify-content: center;
  align-content: center;
  margin: 0;
  align-items: center;
  margin-top: -15%;
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
  justify-content: space-evenly;
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
#section1 {
  z-index: 1;
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
    line-height: 1.3;
    color: rgb(109, 102, 102);
    font-family: "Montserrat", sans-serif;
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
    max-height: 100%;
  }
  .image-section {
    width: 100%;
    max-width: 1300px;
    margin-left: auto;
    margin: auto;
    margin-bottom: 0;
    display: flex;
  }
  .description-text {
    margin: 0% 10% 10% 0%;
    padding: auto;
    font-size: 3em;
    line-height: 1.3;
    color: rgb(109, 102, 102);
    font-family: "Montserrat", sans-serif;
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
    left: 90%;
  }
}
@media only screen and (min-width: 1270px) {
  .heroImg {
    overflow: hidden;
    width: 100%;
    height: auto;
    object-fit: contain;
    max-height: 100%;
  }
  .image-section {
    width: 100%;
    max-width: 1300px;
    margin-left: auto;
    margin: auto;
    margin-bottom: 0;
    display: flex;
  }
  .description-text {
    margin: 0% 10% 10% 0%;
    padding: auto;
    font-size: 2em;
    line-height: 1.3;
    color: rgb(109, 102, 102);
    font-family: "Montserrat", sans-serif;
  }
  .suspention {
    top: 50%;
    left: 25%;
  }
  .load {
    top: 43%;
  }
  .ergo {
    top: 23%;
    left: 60%;
  }
  .brakes {
    top: 41%;
    left: 83%;
  }
}

@media only screen and (max-width: 1025px) {
  .heroImg {
    margin-top: 5%;
    max-height: 80vh;
  }
  .main-logo {
    margin-top: 5%;
  }
  .link-item h4 {
    font-size: 22px;
  }
  .link-item {
    padding: 0;
  }
  .suspention {
    top: 28%;
    left: 20%;
  }
  .load {
    top: 27%;
  }
  .ergo {
    top: 18%;
    left: 63%;
  }
  .brakes {
    top: 25%;
    left: 90%;
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
    font-size: 24px;
    margin-right: 5%;
  }
  .boxInit {
    margin-top: 10vw;
    max-width: 50%;
  }
  .feature-line .btn {
    padding-top: 0;
  }

  .sidebar-panel {
    width: 400px;
  }
  #section1 {
    z-index: 1;
  }
}
@media only screen and (max-width: 768px) {
  .heroImg.erste-truck {
    margin-top: -10%;
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
  }
  .load {
    top: 32%;
  }
  .ergo {
    top: 24%;
    left: 59%;
  }
  .brakes {
    top: 27%;
    left: 77%;
  }
  .giveit {
    font-size: 55px;
  }
  .section3 {
    height: auto;
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
  .section2 {
    margin: 0;
    margin-top: 10%;
    width: 100%;
    position: relative;
    display: flex;
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
  }
  .backimg {
    top: 32%;
    right: 19%;
  }

  .load {
    top: 49%;
    left: 45%;
  }
  .brakes {
    top: 52%;
    left: 90%;
  }
  .suspention {
    top: 52%;
    left: 22%;
  }
  .ergo {
    top: 35%;
    left: 56%;
  }
  .heroImg.erste-truck {
    margin: 5% auto;
    padding: 0;
  }
  .link-item h4 {
    font-size: 18px;
  }
  .link-section {
    padding-bottom: 25%;
    margin-bottom: 25%;
  }
  #section1 {
    height: 230px;
  }
  .sectionbrake {
    font-size: 30px;
  }
  .girly-text {
    top: 72%;
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
    font-size: 32px;
  }
  .desc {
    margin-bottom: 10%;
    font-size: 18px;
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
  .section4 {
    margin-bottom: 25%;
  }
}

@media only screen and (max-width: 376px) {
  #section1 {
    height: 180px;
  }
  .section1 {
    max-height: 80vh;
  }

  .sectionbrake {
    font-size: 28px;
  }
  .load {
    top: 43%;
    left: 47%;
  }
  .brakes {
    top: 43%;
    left: 90%;
  }
  .suspention {
    top: 45%;
    left: 22%;
  }
  .ergo {
    top: 35%;
    left: 60%;
  }
  .sectionbrake {
    font-size: 24px;
    margin: 35px 35px;
  }
  h4.giveit {
    font-size: 32px;
    line-height: 0.9em;
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
    height: 170px;
  }

  .sectionbrake {
    font-size: 26px;
  }
  .top-section div {
    left: 6%;
  }

  .load {
    top: 46%;
    left: 43% !important;
  }
  .brakes {
    top: 50% !important;
    left: 89% !important;
  }
  .suspention {
    top: 48% !important;
    left: 20%;
  }
  .ergo {
    top: 35% !important;
    left: 58% !important;
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
}
@media only screen and (max-width: 321px) {
  .prodLogo {
    height: 20px;
  }

  .sectionbrake {
    font-size: 22px;
  }
  #section1 {
    height: 160px;
  }
  .girly-text {
    font-size: 3em;
  }
  .subtitle {
    font-size: 0.8em;
  }
  .active-color-red {
    background: #a71d31;
  }
  .load {
    top: 46%;
    left: 43% !important;
  }
  .brakes {
    top: 50% !important;
    left: 89% !important;
  }
  .suspention {
    top: 48% !important;
    left: 20%;
  }
  .ergo {
    top: 35% !important;
    left: 58% !important;
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

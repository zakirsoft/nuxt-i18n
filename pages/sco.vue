<template>
  <div class="main w-full">
    <div class="section1">
      <div class="hero">
        <div class="topsection">
          <div class="main-logo">
            <img
              class="prodLogo"
              src="@/static/images/scooter-font-dark.png"
              alt=""
            />
          </div>
          <div class="tagline">
            <h4>
              First foldable
              <br />
              Wiener
            </h4>
          </div>
        </div>

        <div class="image-section">
          <img class="heroImg" src="~assets/gecropt/Scooter_o.png" />
          <SomeDots id="tooltip-target-1" class="feat load" />
          <SomeDots id="tooltip-target-2" class="feat brakes" />
          <SomeDots id="tooltip-target-3" class="feat suspention" />
          <SomeDots id="tooltip-target-4" class="feat ergo" />
        </div>
      </div>
      <div class="link-section row">
        <div class="link-item 1">
          <div class="cardWrapper">
            <div class="card">
              <div class="cardFace front">
                <a class="btn btn-neutral btn-icon btn-twitter btn-footer">
                  <!-- <h4>{{ $t("light") }}</h4> -->
                  <h4>light</h4>
                </a>
              </div>
              <div class="cardFace back">
                <div class="moreInfo">
                  Weighing just 10.8kg, Scooter is a perfect addition to
                  commuting anywhere you need with maximum efficiency.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="link-item 2">
          <div class="cardWrapper">
            <div class="card">
              <div class="cardFace front">
                <a class="btn btn-neutral btn-icon btn-twitter btn-footer">
                  <!-- <h4>{{ $t("light") }}</h4> -->
                  <h4>light</h4>
                </a>
              </div>
              <div class="cardFace back">
                <div class="moreInfo">
                  Whether it’s urban areas or a fun ride in the wild, on
                  Scooter, nothing will stop you from reaching your destination.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="link-item 3">
          <div class="cardWrapper">
            <div class="card">
              <div class="cardFace front">
                <a class="btn btn-neutral btn-icon btn-twitter btn-footer">
                  <!-- <h4>{{ $t("light") }}</h4> -->
                  <h4>light</h4>
                </a>
              </div>
              <div class="flex cardFace content-center back">
                <div class="moreInfo">
                  Anywhere you go, Scooter will go with you. This removes all
                  limits other bikes have, giving you the freedom you deserve.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="link-item last">
          <div class="cardWrapper">
            <div class="card">
              <div class="cardFace front">
                <a class="btn btn-neutral btn-icon btn-twitter btn-footer">
                  <!-- <h4>{{ $t("light") }}</h4> -->
                  <h4>Durable</h4>
                </a>
              </div>
              <div class="cardFace back">
                <div class="moreInfo">
                  A bike is supposed to serve you for a long time, everywhere
                  you go, and as long as you need it, and Scooter does just
                  that.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="tooltipin">
          <!-- <b-button id="tooltip-target-1">Hover me </b-button> -->
          <b-tooltip
            :show.sync="isTooltip1"
            target="tooltip-target-1"
            triggers="hover"
          >
            Weighing just 10.8kg, Scooter is a perfect addition to commuting
            anywhere you need with maximum efficiency.
          </b-tooltip>
          <b-tooltip
            :show.sync="isTooltip2"
            target="tooltip-target-2"
            triggers="hover"
          >
            Whether it’s urban areas or a fun ride in the wild, on Scooter,
            nothing will stop you from reaching your destination.
          </b-tooltip>
          <b-tooltip
            :show.sync="isTooltip3"
            target="tooltip-target-3"
            triggers="hover"
          >
            Anywhere you go, Scooter will go with you. This removes all limits
            other bikes have, giving you the freedom you deserve.
          </b-tooltip>
          <b-tooltip
            :show.sync="isTooltip4"
            target="tooltip-target-4"
            triggers="hover"
          >
            A bike is supposed to serve you for a long time, everywhere you go,
            and as long as you need it, and Scooter does just that.
          </b-tooltip>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import ProductDetail from "@/components/product-detail/ProductDetail.vue";
import SomeDots from "@/components/SomeDots.vue";
import ProductSlider from "@/components/product-detail/ProductSlider.vue";

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
      isLoad: false,
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
    };
  },
  mounted() {
    // gsap.set(".link-item", { perspective: 800 });

    gsap.set(".cardWrapper", { perspective: 800 });
    gsap.set(".card", { transformStyle: "preserve-3d" });
    gsap.set(".back", { rotationY: -180 });
    gsap.set([".back", ".front"], { backfaceVisibility: "hidden" });
    $(".cardWrapper").hover(
      function () {
        gsap.to($(this).find(".card"), {
          duration: 1.2,
          rotationY: 180,
          ease: Back.easeOut,
        });
      },
      function () {
        gsap.to($(this).find(".card"), {
          duration: 1.2,
          rotationY: 0,
          ease: Back.easeOut,
        });
      }
    );
  },

  methods: {
    hovered(index) {
      if (index == 1) {
        this.isHovered1 = true;
        setTimeout(() => (this.isTooltip1 = true), 200);
      }
      if (index == 2) {
        this.isHovered2 = true;
        setTimeout(() => (this.isTooltip2 = true), 200);
      }
      if (index == 3) {
        this.isHovered3 = true;
        setTimeout(() => (this.isTooltip3 = true), 200);
      }
      if (index == 4) {
        this.isHovered4 = true;
        setTimeout(() => (this.isTooltip4 = true), 200);
      }
    },
    leavemouse(index) {
      if (index == 1) {
        this.isTooltip1 = false;
        setTimeout(() => (this.isHovered1 = false), 200);
      }
      if (index == 2) {
        this.isTooltip2 = false;
        setTimeout(() => (this.isHovered2 = false), 200);
      }
      if (index == 3) {
        this.isTooltip3 = false;
        setTimeout(() => (this.isHovered3 = false), 200);
      }
      if (index == 4) {
        this.isTooltip4 = false;
        setTimeout(() => (this.isHovered4 = false), 200);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 97%;
  justify-content: center;
  align-items: center;
  margin: 0, 3px;
  outline: 0;
  border: 0;
  height: 8rem;
}

////CSS FROM CP

.cardWrapper {
  width: 97%;
  position: relative;
  /*background-color:#333;*/
  margin-right: 3px;
  margin-left: 3px;

  cursor: pointer;
  -webkit-font-smoothing: antialiased;
}

.cardFace {
  padding: auto;

  width: 95%;
  position: absolute;
  height: 98%;
  overflow: hidden;
}

.front {
  padding: 10px;
  outline: 0;
  background-color: white;
}

.back {
  background-color: white;
  overflow: hidden;
}

.cardFace h1 {
}

.moreInfo {
  color: black;

  font-size: 1rem;
}

////CSS FROM CP
.text-deco {
  font-family: Arial, Helvetica, sans-serif;
  font-stretch: initial;
  font-weight: 700;
  font-size: 32px;
  color: rgb(109, 102, 102);
  line-height: 1.8;
}

.backimg {
  display: flex;
  position: absolute;
  width: 20%;
  height: auto;
  top: 25%;
  right: 15%;
}
.scooterback {
  width: 280px;
  height: auto;
  opacity: 0;
}
.scooter-red {
  width: 200px;
  height: auto;
  transform: translate(50%, 25%);
}
.scooter-blue {
  width: 180px;
  height: auto;
  transform: translate(135%, 0%);
}
.scooter-black {
  width: 220px;
  height: auto;
  transform: translate(-25%, 50%);
}
.heiss {
  margin-bottom: 10%;
}

.girly-text {
  margin: 3% 0;

  max-height: inherit;
  font-size: 98px;
  top: 8%;
  left: 8%;
  position: absolute;
  display: flex;
  align-items: center;

  color: #fff;
  word-wrap: normal;
  p {
    margin: 10%, 0;

    position: relative;
    width: 12vw;
  }
  .a {
    margin-top: 40%;
    left: 2%;
  }
  .b {
    margin-top: 80%;
    left: 3%;
  }
}
.big-girl {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
}
.big-girl-img {
  object-fit: cover;
  min-height: 60vh;
}
.red {
  z-index: 11;
  background-color: #921817;
}
.blue {
  z-index: 11;
  background-color: #017cde;
}
.white {
  z-index: 11;
  background-color: rgb(255, 255, 255);
}

.tooltip .tooltip-inner {
  color: cyan;
  background-color: #fff;
}

.tooltipin,
.tooltip-inner {
  color: cyan;
}
.hovered {
  color: cyan !important;
}

.description {
  overflow: auto;
}
.section {
  width: 100%;
  position: relative;
}
.boxInit {
  margin-top: 5vw;
  max-width: 40%;
  height: 50px;
  margin-bottom: -8%;
}
.prod-detail {
  margin-top: 20vh;
  bottom: 50px;
  position: relative;
  transform: translate(0, 50%);
  justify-content: center;
  align-items: flex-end;
  width: 70vw;
  margin: auto;
  padding: auto;
}
#section1 {
  overflow: hidden;

  width: 100%;
  height: 200px;
  transform-origin: left bottom;
  transform: skewY(359deg);

  top: 0;
  position: relative;
  background: black;

  z-index: 10;
}
.sectionbrake {
  font-size: 50px;
  padding: auto;
  color: white;
  margin: 50px 50px;
}

.giveit {
  display: flex;
  float: left;
  font-size: 100px;
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
.load {
  top: 28%;
  left: 50%;
}
.ergo {
  top: 30%;
  left: 58%;
}
.suspention {
  top: 38%;
  left: 44%;
}
.brakes {
  top: 50%;
  left: 62%;
}
.tagline {
  margin-top: 5%;
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
  max-width: 1000px;

  margin: auto;
  position: relative;
  display: flex;
  max-height: 70vh;
}
.hero {
  margin-top: 3%;
  display: flex;
  position: relative;
}

.heroImg {
  overflow: hidden;
  width: 100%;
  height: auto;
  object-fit: contain;
  max-height: 100%;
}

.link-section {
  justify-content: center;
  align-content: center;

  align-items: center;
}
.link-item {
  padding: 5px;
  border-right: 1px solid rgb(85, 85, 85);
  justify-content: center;
  align-content: center;
  z-index: 30;
  align-items: center;
  width: 24%;
}
.link-item.last {
  border-right: none;
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
  flex-wrap: wrap;
}

.truck-area {
  margin-left: 50px;
  align-items: center;
  justify-content: left;
  float: left;
}
.pic-left {
  min-width: 70%;
  float: right;
  padding: 0 !important;
  margin: 0;
  position: relative;
}
.colored {
  overflow: hidden;

  width: 100%;
  height: 50px;
  transform-origin: left bottom;
  transform: skewY(3deg);
}

.hoveredBtn {
  color: cyan; // so that it overwreite
}
.section3 {
  max-width: 100%;
  margin: 0;
  padding: 0;
  margin-top: -3%;
}
.wrapper {
  display: flex;
  text-align: center;
  justify-content: center;
}
.feature-line {
  top: 0;
  transform: translate(20%, -800%);
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
  }
}
@media only screen and (max-width: 1366px) {
  .tagline {
    margin-left: 0%;
  }

  .suspention {
    top: 55%;
    left: 44%;
  }
  .load {
    top: 45%;
  }
  .ergo {
    top: 35%;
    left: 61%;
  }
  .brakes {
    top: 53%;
    left: 64%;
  }
}
@media only screen and (max-width: 1200px) {
  .ergo {
    top: 40%;
    left: 72%;
  }
  .load {
    top: 48%;
    left: 50%;
  }
  .suspention {
    top: 58%;
    left: 41%;
  }
}
@media only screen and (max-width: 1025px) {
  .ergo {
    top: 20%;
    left: 65%;
  }
  .suspention {
    top: 26%;
    left: 41%;
  }
  .brakes {
    top: 32%;
    left: 69%;
  }
  .load {
    top: 22%;
    left: 50%;
  }

  .girly-text {
    top: 50%;
    font-size: 70px;
  }
  .link-item h4 {
    font-size: 22px;
    padding: 0;
  }
  .link-item {
    padding: 0;
  }
}
@media only screen and (max-width: 768px) {
  .link-item {
    width: 25%;
  }
}
@media only screen and (max-width: 600px) {
  .heroImg {
    margin-top: 5%;
    margin-bottom: 0;
    padding: 0;

    width: 100%;
  }
  .tagline {
    position: relative;
    font-size: 0.5rem;
  }
  .link-item {
    width: 45%;
    padding: 3px;
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

@media only screen and (max-width: 540px) {
  .moreInfo {
    padding: 4px;
    margin: 4px;
    color: black;
    line-height: 1rem;
    font-size: 0.8rem;
  }
  .suspention {
    top: 37%;
  }
  .ergo {
    top: 30%;
    left: 67%;
  }
  .brakes {
    top: 44%;
    left: 72%;
  }
  .load {
    top: 36%;
    left: 53%;
  }

  .even-col {
    width: 100%;
  }
  .over-black {
    left: 30%;
  }
  .giveit {
    font-size: 52px;
  }
  .girly-text {
    font-size: 49px;
    top: 50%;
  }
  .desc {
    font-size: 20px;
  }
  .sectionbrake {
    font-size: 40px;
  }
  #section1 {
    height: 200px;
  }
  .boxInit {
    margin-bottom: 10vw;
    max-width: 85%;
  }
}

@media only screen and (max-width: 414px) {
  .topsection div {
    left: 5%;
    top: 2%;
  }
  .prodLogo {
    height: 20px;
  }
  .tagline {
    margin-top: 10%;
  }

  .heroImg {
    top: 10%;
    margin: 20% auto;
    margin-bottom: 0;
    margin-top: 25%;
    min-width: 300px;
  }
  .backimg {
    top: 32%;
    right: 19%;
  }
  .load {
    top: 32%;
    left: 45%;
  }
  .brakes {
    top: 41%;
    left: 67%;
  }
  .suspention {
    top: 35%;
    left: 35%;
  }
  .ergo {
    top: 32%;
    left: 67%;
  }
  .heroImg.erste-truck {
    margin: 5% auto;
    padding: 0;
  }
  .link-item h4 {
    font-size: 18px;
  }

  #section1 {
    height: 230px;
  }
  .sectionbrake {
    margin: 10%;
    font-size: 30px;
  }
  .girly-text {
    top: 43%;
    font-size: 2em;
  }

  .active-color-red {
    background: #a71d31;
  }
}

@media only screen and (max-width: 376px) {
  #section1 {
    height: 180px;
  }
  .sectionbrake {
    font-size: 28px;
  }
  .backimg {
    top: 27%;
    right: 35%;
  }
  .suspention {
    top: 35%;
  }
  .load {
    top: 27%;
  }
  .brakes {
    top: 34%;
  }
  .ergo {
    top: 25%;
  }
}
@media only screen and (max-width: 360px) {
  .moreInfo {
    padding: 4px;
    margin: 4px;
    color: black;
    line-height: 0.9rem;
    font-size: 0.7rem;
  }
  .ergo[data-v-7039294d] {
    top: 25%;
    left: 63%;
  }
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
    font-size: 26px !important;
  }
  .topsection div {
    left: 6%;
  }
  .suspention {
    top: 36%;
  }
}
@media only screen and (max-width: 320px) {
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
    height: 160px;
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

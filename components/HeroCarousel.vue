<template>
  <div class="container-fluid px-0 mx-auto carousel-section">
    <SlickCarousel
      v-bind="slideSettings"
      ref="carousel"
      @afterChange="getSlideNumber"
    >
      <!-- 
<div class="slider-item forth-slide"> 
        <div class="caption-area4">
          <div class="row">
            <div class="col-8 offset-2">
              <img
                src="/images/ahsaeed/black-bug-e-slide.png"
                class="img-fluid d-block ml-auto"
              />

              <p
                class="text-uppercase text-right font-weight-normal d-block ml-auto"
              >
                Das einzig wahre Sport Utility Vehicle!
              </p>

              <nuxt-link
                class="spec-button-container font-weight-bold letter-spacing d-block ml-auto"
                to="/produkte2/buge"
              >
                <div class="spec-button">
                  <span>Sehe Details</span>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div> -->

      <div class="slider-item first-slide">
        <div class="caption-area1">
          <div class="row ml-1">
            <p class="text-uppercase align-self-lg-start mr-lg-2"></p>
            <p class="text-uppercase align-content-lg-center">
              <img src="/images/tractor-font-dark.png" class="img-fluid" />
            </p>
            <p class="text-uppercase align-self-lg-end ml-lg-2"></p>
          </div>

          <div class="row down-btn-tractor">
            <nuxt-link
              class="spec-button-container font-weight-bold letter-spacing"
              to="/produkte2/tractor"
            >
              <div class="spec-button">
                <span>Details</span>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>

      <div class="slider-item second-slide">
        <div class="caption-area2">
          <div class="row ml-3">
            <img src="/images/truck-font-dark.png" class="img-fluid" alt="" />
          </div>
          <div class="row down-btn-tractor">
            <nuxt-link
              class="spec-button-container d-block font-weight-bold mt-5 letter-spacing"
              to="/produkte2/truck"
            >
              <div class="spec-button">
                <span>Details</span>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>

      <div class="slider-item third-slide">
        <div class="caption-area3">
          <div class="row">
            <p class="text-uppercase align-self-lg-start mr-lg-2"></p>
            <p class="text-uppercase align-content-lg-center">
              <img src="/images/scooter-font.png" class="img-fluid" />
            </p>
            <p class="text-uppercase align-self-lg-end ml-lg-2"></p>
          </div>
          <div class="row ml-2">
            <nuxt-link
              class="spec-button-container2 font-weight-bold letter-spacing mt-4"
              to="/produkte2/scooter"
            >
              <div class="spec-button2">
                <span>Details</span>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </SlickCarousel>
    <ol class="carousel-indicators">
      <li
        :class="
          slide === 1
            ? 'indicator-active'
            : 'indicator-inactive' + (slide > 1 ? ' indicator-visited' : '')
        "
        @click="goToSlide(1)"
      >
        <span :class="slide > 1 ? 'span-active' : 'span-inactive'"></span>
      </li>
      <li
        :class="
          slide === 2
            ? 'indicator-active'
            : 'indicator-inactive' + (slide > 2 ? ' indicator-visited' : '')
        "
        @click="goToSlide(2)"
      >
        <span :class="slide > 2 ? 'span-active' : 'span-inactive'"></span>
      </li>
      <li
        :class="
          slide === 3
            ? 'indicator-active'
            : 'indicator-inactive' + (slide > 3 ? ' indicator-visited' : '')
        "
        @click="goToSlide(3)"
      >
        <span :class="slide > 3 ? 'span-active' : 'span-inactive'"></span>
      </li>
      <li
        :class="slide === 4 ? 'indicator-active' : 'indicator-inactive'"
        @click="goToSlide(4)"
      ></li>
    </ol>
  </div>
</template>

<script>
import SlickCarousel from "vue-slick-carousel";

export default {
  name: "Carousel",
  components: {
    SlickCarousel,
  },
  data() {
    return {
      slide: 1,
      slideSettings: {
        autoplaySpeed: 4000,
        edgeFriction: 0.01,
        infinite: true,
        speed: 800,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    };
  },

  computed: {},

  mounted() {
    // console.log(this.$refs.carousel)
  },
  methods: {
    goToSlide(number) {
      this.slide = number;
      this.$refs.carousel.goTo(number);
    },
    getSlideNumber(slide) {
      this.$store.commit("changeSlide", slide);
      this.slide = slide;
    },
  },
};
</script>

<style lang="scss" scoped>
.slider-item img {
  max-height: 50px;
}
.carousel-section {
  width: 100%;
  max-height: 88vh;
  overflow: hidden;
}

.slider-item {
  width: 100%;
  height: 82vh;
}

.slick-slider {
  margin-bottom: 0;
}

.caption-area {
  margin-top: 20rem;
}
.caption-area1 {
  margin-top: 12vh;
}
.caption-area2 {
  margin-top: 15vh;
}
.caption-area3 {
  margin-top: 15vh;
}
.caption-area4 {
  margin-top: 20rem;
}

// Carousel Custom Design

.carousel-item {
  transition: transform 0.2s ease-in-out;
  max-width: 100vw;
  max-height: 100vh;
}

.carousel-item img {
  width: 100%;
  height: 100vh;
}

//.carousel-indicators {
//  height: 90%;
//  top: 10%;
//}

.carousel-indicators li {
  background: transparent;
}

@media (max-width: 500px) {
  .down-btn-tractor  {
  position: absolute;
  bottom: 8%;
  }
 
  .carousel-indicators {
    padding: 0;
    margin: 0;
    right: 10%;
    bottom: 20%;
    left: auto;
  }

  li.indicator-inactive {
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 2px solid white;
    justify-content: normal;
    transition: all 0.3s ease-in-out;
    opacity: 1;
  }

  li.indicator-active {
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 2px solid #060707;
    justify-content: normal;
    transition: all 0.3s ease-in-out;
    opacity: 1;
    background: #060707;
  }

  li.indicator-visited {
    border: 2px solid #000000;
  }
  .slider-item img {
    max-height: 30px;
  }

  .span-inactive {
    display: none;
  }

  .span-active {
    display: none;
  }
}

.first-slide {
  background: url("~assets/gecropt/IMG_5805phone.png") no-repeat top
    center/cover;
}

.second-slide {
  background: url("~assets/images/bike_1.png") no-repeat center right/110%;
}

.third-slide {
  background: url("~assets/images/girl1.jpg") no-repeat bottom/273%;
}

.forth-slide {
  background: url("~static/images/ahsaeed/banner-four.png") no-repeat center
    center/cover;
}

.caption-area {
  margin-top: 10rem;
}
.caption-area1 {
  margin-top: 8vh;
  margin-left: 10%;
}
.caption-area2 {
  margin-top: 8vh;
  margin-left: 10%;
}
.caption-area3 {
  margin-top: 8vh;
  margin-left: 10%;
}
.caption-area4 {
  margin-top: 20rem;
}

//.indicator-active {
//    border: 2px solid #007DE5;
//    opacity: 1;
//    transition: .3s ease-in-out;
//}

@media (min-width: 768px) {
  .carousel-indicators {
    padding: 0;
    margin: 0;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    top: 10%;
    right: 5%;
    width: 30px;
    height: 70%;
    left: auto;
  }

  .carousel-indicators li:first-child {
    top: 0;
  }

  .carousel-indicators li:nth-child(2) {
    top: 33.333%;
  }

  .carousel-indicators li:nth-child(3) {
    top: 66.667%;
  }

  .carousel-indicators li:last-child {
    top: 100%;
  }

  li.indicator-inactive {
    position: absolute;
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 2px solid white;
    justify-content: normal;
    transition: all 0.3s ease-in-out;
    opacity: 1;
  }

  li.indicator-active {
    position: absolute;
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 2px solid #007de5;
    justify-content: normal;
    transition: all 0.3s ease-in-out;
    opacity: 1;
    background: #007de5;
  }

  li.indicator-visited {
    border: 2px solid #007de5;
  }

  .span-inactive {
    cursor: default;
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 2px;
    height: 12vh;
    top: 30px;
    left: 47%;
    border: 1px solid white;
    transition: all 0.3s ease-in-out;
    opacity: 0.2;
  }

  .span-active {
    cursor: default;
    display: block;
    position: absolute;
    width: 2px;
    height: 12vh;
    top: 30px;
    left: 47%;
    border: 1px solid #007de5;
    transition: all 0.3s ease-in-out;
    opacity: 1;
  }
}

@media (min-width: 991px) {
  .carousel-caption .slide-texts {
    margin-top: 8vh;
  }

  .carousel-indicators {
    padding: 0;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    top: 15%;
    right: 4%;
    width: 30px;
    height: 70%;
    left: auto;
  }

  .carousel-indicators li:first-child {
    top: 0;
  }

  .carousel-indicators li:nth-child(2) {
    top: 33.333%;
  }

  .carousel-indicators li:nth-child(3) {
    top: 66.667%;
  }

  .carousel-indicators li:last-child {
    top: 100%;
  }

  li.indicator-inactive {
    position: absolute;
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 2px solid rgb(51, 48, 48);
    justify-content: normal;
    transition: all 0.3s ease-in-out;
    opacity: 1;
  }

  li.indicator-active {
    position: absolute;
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 2px solid #000000;
    justify-content: normal;
    transition: all 0.3s ease-in-out;
    opacity: 1;
    background: #000000;
  }

  li.indicator-visited {
    border: 2px solid #575757;
  }

  .span-inactive {
    cursor: default;
    display: block;
    position: absolute;
    width: 6px;
    height: 12vh;
    top: 30px;
    left: 32%;
    border: 1px solid rgba(71, 71, 71, 0.904);
    transition: all 0.3s ease-in-out;
    opacity: 0.8;
  }

  .span-active {
    cursor: default;
    display: block;
    position: absolute;
    width: 2px;
    height: 12vh;
    top: 30px;
    left: 32%;
    border: 3px solid #000000b0;
    transition: all 0.3s ease-in-out;
    opacity: 1;
  }
}

@media (min-width: 1200px) {
  .span-inactive,
  .span-active {
    height: 12vh;
  }
}

@media (max-width: 1099px) {
  .caption-area {
    margin-top: 17rem;
  }
}

/*@media (max-width: 767px) {*/
/*  .caption-area {*/
/*    margin-top: 17rem;*/
/*  }*/
/*}*/
</style>

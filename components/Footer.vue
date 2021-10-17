<template>
  <footer class="footer bg-secondary overflow-hidden text-white">
    <div class="align-items-center d-flex h-100 justify-content-between px-5">
      <img :src="slideLogoSrc" class="footer-logo" v-if="isShowFooter" />

      <!-- <InfoPre2 @mouseenter="isHovered = true" @mouseleave="isHovered = false " class="info" @togged= "infoToggled"  /> -->
      <div class="d-flex align-items-center">
        <transition name="fade">
          <button
            v-if="afterSecondSection"
            class="btn-gettch"
            @click="showContact"
          >
            <a v-if="!mobile"> Get in Touch </a>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                class="heroicon-ui"
                d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2zm16 3.38V6H4v1.38l8 4 8-4zm0 2.24l-7.55 3.77a1 1 0 0 1-.9 0L4 9.62V18h16V9.62z"
              />
            </svg>
          </button>
        </transition>
        <transition name="fade">
          <button
            v-if="afterFirstSection"
            class="btn-detail"
            @click="showProductDetail"
          >
            <a v-if="!mobile"> InfoHUB </a>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                class="heroicon-ui"
                d="M20 22H4a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h4V8c0-1.1.9-2 2-2h4V4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2zM14 8h-4v12h4V8zm-6 4H4v8h4v-8zm8-8v16h4V4h-4z"
              />
            </svg>
          </button>
        </transition>
        <transition>
          <div
            @mouseenter="isHovered = true"
            @mouseleave="isHovered = false"
            :class="{ infoSvg: isHovered }"
            @click="displayFooter"
          >
            <icon-base
              :is-info-active="isInfoActive"
              class="info"
              icon-name="menu"
              icon-color="white"
              width="50"
              height="50"
            >
            </icon-base>
          </div>
        </transition>
      </div>
    </div>
  </footer>
</template>

<script>
import IconBase from "@/components/IconBase.vue";
export default {
  mounted() {
    this.$nuxt.$emit("indexPage", true);

    if (process.client) {
      let width = window.innerWidth;
      if (width < 769) {
        this.mobile = true;
      } else {
        this.mobile = false;
      }
    }
  },
  components: { IconBase },
  name: "Footer",
  props: ["isIndexPage"],
  data() {
    return {
      isHovered: false,
      isInfoActive: false,
      indexPage: false,
      scrollpx: 0,
      mobile: "",
    };
  },
  computed: {
    afterFirstSection() {
      let isVisible = true;

      if (!this.$route.path.includes("produkte2")) {
        isVisible = false;
        return false;
      } else {
        return this.scrollpx > 700;
      }
    },
    afterSecondSection() {
      let isVisible = true;

      if (!this.$route.path.includes("produkte2")) {
        isVisible = false;
        return false;
      } else {
        return this.scrollpx > 900;
      }
    },
    slideLogoSrc() {
      let slide = this.$store.state.slide;
      let sectionNumber = this.$store.state.mainSectionNumber;
      console.log("section", slide);
      let color = this.$store.state.color;

      if (this.$nuxt.$route.name === "produkte2-traktor")
        return "/images/logo-tractor-white.png";
      else if (this.$nuxt.$route.name === "produkte2-truck")
        return "/images/logo-truck-white.png";
      else if (this.$nuxt.$route.name === "produkte2-scooter")
        return "/images/logo-scooter-white.png";
      else if (this.$nuxt.$route.name === "gallery")
        return "/images/logo-white.png";
      else if (this.$nuxt.$route.name === "about")
        return "/images/logo-white.png";
      else if (this.$nuxt.$route.name === "products")
        return "/images/logo-white.png";
      else if (this.$nuxt.$route.name === "products-id")
        return "/images/logo-white.png";
      // else if (this.$nuxt.$route.name === "products")
      //   return "/images/logo-white.png";
      // else if (this.$nuxt.$route.name === "products")
      //   return "/images/logo-white.png";
      // else if (this.$nuxt.$route.name === "products")
      //   return "/images/logo-white.png";
      // else if (this.$nuxt.$route.name === "produkte2-bug-e")
      //   return "/images/logo-buge-white.png";
      else {
        switch (sectionNumber) {
          case 0:
            switch (slide) {
              case 0:
                return "/images/logo-tractor-white.png";
              case 1:
                return "/images/logo-truck-white.png";
              case 2:
                return "/images/logo-scooter-white.png";
              default:
                return "/images/logo-white.png";
            }
          case 1:
            switch (color) {
              case "white":
                return "/images/white-color-logo.png";
              case "blue":
                return "/images/blue-color-logo.png";
              case "red":
                return "/images/red-color-logo.png";
              case "black":
                return "/images/black-color-logo.png";
              default:
                return "/images/white-color-logo.png";
            }
          default:
            return "/images/logo-white.png";
        }
      }
    },
    isShowFooter() {
      return !(
        this.$nuxt.$route.name === "produkte2" ||
        this.$nuxt.$route.name === "about" ||
        this.$nuxt.$route.name === "kontakt"
      );
    },
  },
  created() {
    if (process.browser) {
      window.addEventListener("scroll", this.handleScroll);
    }
  },
  methods: {
    showContact() {
      this.$store.commit("toggleContact");
    },

    showProductDetail() {
      if ($nuxt.$route.name.indexOf("produkte2-") !== -1) {
        const productName = $nuxt.$route.name.replace("produkte2-", "");
        console.log("productName: ", productName);
        if (productName in this.$store.state.products) {
          const product = this.$store.state.products[productName];
          if (product) {
            this.$store.commit("setShowingProduct", product);
          }
        }
      }
    },
    showProductSubscription() {
      if ($nuxt.$route.name.indexOf("produkte2-") !== -1) {
        const productName = $nuxt.$route.name.replace("produkte2-", "");
        console.log("productName: ", productName);
        if (productName in this.$store.state.products) {
          const product = this.$store.state.products[productName];
          if (product) {
            this.$store.commit("setShowingProduct", product);
          }
        }
      }
    },

    handleScroll() {
      this.scrollpx = window.scrollY;
    },
    displayFooter() {
      this.isInfoActive = !this.isInfoActive;
      if (this.isInfoActive) {
        this.$router.push("/#normalfooter");
      } else {
        this.$router.back();
      }
    },
    infoToggled(value) {
      this.isInfoActive = value;
      console.log("emmited from footer");
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
  watch: {
    isInfoActive(val) {
      this.$emit("geopened", val);
      console.log("emitedfrom footer");
    },
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.btn-gettch {
  font-size: 1.2rem;
  background: transparent;
  color: white;
  border: none;
  padding: 6px;
  margin-right: 15px;
}
.btn-gettch:hover {
  color: aqua;
}
.btn-detail {
  font-size: 1.2rem;
  background: transparent;
  color: white;
  border: none;
  padding: 6px;
  margin-right: 15px;
}
.btn-detail:hover {
  color: aqua;
}
.info:hover {
  color: aqua;
  stroke: aqua;
  fill: aqua;
  scale: 1.1;
}
.infoSvg {
  color: aqua;
  stroke: aqua;
  fill: aqua;
  justify-self: center;
  align-self: center;
  height: 1.4em;
  width: auto;
}
footer {
  // modal has 100
  z-index: 101;
  width: 100%;
  height: 59px;
  position: fixed;
  justify-self: center;
  align-self: center;
  left: 0;
  bottom: 0;
  padding-left: 0;
  padding-right: 0;
}

.footer-logo {
  overflow-x: hidden;
  display: flex;
  align-self: center;
  justify-self: center;
  height: 1.2em;
  width: auto;
  // position: fixed;
  // left: 2rem;
}

.info {
  stroke: white;
  position: absolute;
  right: 2%;
  color: white;
  bottom: 0;
  cursor: pointer;
}

@media only screen and (max-width: 600px) {
  .px-5 {
    padding-left: 1rem !important;
  }
  .footer-logo {
    display: flex;
    align-self: center;
    justify-self: center;
    height: 16px;
    width: auto;
    // position: fixed;
    // left: 2rem;
  }
}
</style>

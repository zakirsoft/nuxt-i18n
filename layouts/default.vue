<template>
  <div
    class="d-flex flex-column justify-content-between min-vh-100 main-container"
  >
    <div id="scroll-progress-container">
      <div
        class="scroll-progress"
        :style="{ width: progressWidth + '%' }"
      ></div>
    </div>
    <Header class="zind" />
    <SideNav />

    <Contact @modalOpen="handleModalState" />

    <Auth />
    <!-- not sure what this for -->
    <main
      class="main-container"
      @click="isActive ? false : false"
      v-bind:class="[isModalOpen ? blurClass : '', bkClass]"
    >
      <Nuxt />

      <ModalProductDetail
        v-if="showProductDetail"
        @close="$store.commit('setShowingProduct', null)"
      />
    </main>
    <Cookie />
    <PreFooter :info-opened="isInfoActive" />

    <Footer @geopened="infoToggled" :isIndexPage="indexPage" />
    <Overlaymenu />
  </div>
</template>

<script>
import Contact from "@/components/Contact.vue";
import SideNav from "@/components/SideNav";
import Header from "@/components/Header";
import Auth from "@/components/Auth.vue";
import PreFooter from "@/components/PreFooter";
import ModalProductDetail from "@/components/ModalProductDetail";
import ModalProductSubscription from "@/components/ModalProductSubscription";
import Cookie from "@/components/Cookie.vue";

import Footer from "@/components/Footer";
import Overlaymenu from "@/components/overlaymenu";

export default {
  components: {
    Contact,
    SideNav,
    Overlaymenu,
    PreFooter,
    Header,
    Cookie,
    Footer,
    ModalProductDetail,
    ModalProductSubscription,
    Auth,
  },
  data: function () {
    return {
      progressWidth: 0,
      isClosed: false,
      isModalOpen: false,

      bkClass: "bk",
      blurClass: "blur",
      isHovered: false,
      indexPage: this.$route.path === "/",
      isActive: false,
      isInfoActive: false,
    };
  },
  computed: {
    showProductDetail() {
      return this.$store.state.showingProduct;
    },
    showProductSubscription() {
      return this.$store.state.showingProduct;
    },
  },
  watch: {
    showProductDetail(val) {
      if (val) {
        document.body.classList.add("modal-open");
      } else {
        document.body.classList.remove("modal-open");
      }
    },
    showProductSubscription(val) {
      if (val) {
        document.body.classList.add("modal-open");
      } else {
        document.body.classList.remove("modal-open");
      }
    },
  },
  created() {
    this.$nuxt.$on("indexPage", (res) => {
      this.indexPage = res;
    });
  },
  mounted() {
    window.addEventListener("scroll", this.scrollPosition);
    if (process.client) {
      let width = window.innerWidth;
      if (width < 758) {
        this.mobile = true;
      }
    }
  },
  beforeDestroy() {
    this.$nuxt.$off("indexPage");
    window.removeEventListener("scroll", this.scrollPosition);
  },
  methods: {
    scrollPosition() {
      let winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      this.progressWidth = (winScroll / height) * 100;
    },
    clickOutside(val) {
      this.isClosed = val;
    },
    handleModalState(val) {
      this.isModalOpen = val;
    },

    infoToggled(value) {
      this.isInfoActive = value;
      console.log("infoToggle");
    },
  },
};
</script>

<style lang="scss">
.zind {
  z-index: 100;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.blur {
  filter: blur(1px);
  opacity: 0.4;
}
.bk {
  transition: all 0.05s ease-out;
}

.mb-10 {
  margin-bottom: 4em;
}

.main-container {
  width: 100%;
  scroll-behavior: smooth;
}

.above-footer {
  margin-bottom: 59px;
}

// @media (max-width: 768px) {
//   main {
//     padding-top: 3rem;
//   }
// }
</style>

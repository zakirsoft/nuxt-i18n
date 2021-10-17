<template>
  <!-- <full-page :options="options" id="fullpage" ref="fullpage"> -->
  <div class="intro">
    <div class="bg-green-600 h-screen fixed w-full top-0 z-50" v-if="isActive">
      <h1>Hallo</h1>
      <button @click="isActive = false">close</button>
    </div>
    <div v-else class="section">
      <div class="slide">
        <section class="section-slide active">
          <div class="module-background">
            <HoverImages2 v-if="!mobile" />
            <HeroCarousel v-else />
          </div>
        </section>
        <!-- <section class="py-5">
          <MsCardList class="my-5" v-if="mobile" />
          <Roller v-else />
        </section>
        <section class="section-two">
          <div class="flex flex-wrap module-background">
            <div class="md:w-2/3">
              <LatestBlogs />
            </div>
            <div class="md:w-1/3">
              <Instagram />
            </div>
          </div>
        </section> -->
      </div>

      <!-- <div class="section">
      <div class="slide">
        <section class="section-slide change-color-wrapper">
          <div class="module-background">
            <ScooterSection />
          </div>
        </section>
      </div>
    </div> -->

      <!-- <div class="section">
      <div class="slide">
        <section class="section-slide contact">
          <div class="module-background">
            <ContactForm />
          </div>
        </section>
      </div>
    </div> -->
      <!-- 
         <div class="section vh-100">
           <div class="slide">
             <section class="section-slide pre-footer">
               <PreFooter :isIndexPage="true" />
             </section>
           </div>
        </div> -->
    </div>
  </div>

  <!-- </full-page> -->
</template>

<script>
import HeroCarousel from "@/components/HeroCarousel";
// import ScooterSection from "@/components/ScooterSection";
import PreFooter from "@/components/PreFooter";
// import ContactForm from "@/components/ContactForm";
import SideNav from "@/components/SideNav.vue";
import Instagram from "@/components/Instagram.vue";
import HoverImages2 from "~/components/hover-column/HoverImages2";
import LatestBlogs from "~/components/LatestBlogs.vue";
import Roller from "~/components/Roller.vue";

export default {
  name: "Home",

  components: {
    HeroCarousel,
    Roller,
    SideNav,
    HoverImages2,
    // ScooterSection
    PreFooter,
    LatestBlogs,

    Instagram,
    // ContactForm
  },
  data() {
    return {
      mobile: false,
      isActive: false,

      options: {
        afterLoad: this.afterLoad,

        // anchors: ['page1', 'page2', 'page3'],
        // sectionsColor: ['#41b883', '#ff5f45', '#0798ec', '#fec401', '#1bcee6', '#ee1a59', '#2c3e4f', '#ba5be9', '#b4b8ab']
      },
    };
  },
  mounted() {
    this.$nuxt.$emit("indexPage", true);

    if (process.client) {
      let width = window.innerWidth;
      if (width < 769) {
        this.mobile = true;
      }
    }
  },
  methods: {
    afterLoad: function (origin, destination, direction) {
      this.$nuxt.$emit("firstSection", destination.isFirst);
      this.$store.commit("changeMainSectionNumber", destination.index);
    },
  },
};
</script>
<style>
.section-slide {
  width: 100%;

  margin: 0 auto;
  position: relative;
}

.intro {
  /* background-image: url("~assets/images/banner2.svg") ; */
}

.module-background {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  width: 100%;

  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

.text-1 {
  animation: hideshow 10s ease infinite;
}
.text-2 {
  color: #000;
  fill: aqua;
  opacity: 0;
  animation: hideshow 10s 1.5s ease infinite;
}
.text-3 {
  opacity: 0;
  animation: hideshow 10s 3s ease infinite;
}
@keyframes hideshow {
  0% {
    opacity: 1;
  }
  10% {
    opacity: 1;
  }
  15% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
</style>

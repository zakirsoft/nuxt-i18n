<template>
  <!-- Navigation -->
  <b-navbar>
    <div
      class="navbar d-flex w-100 justify-content-between pt-1.5 md:px-2 sm:px-1"
    >
      <b-navbar-brand to="/">
        <!-- TODO[epic=Lang] -->
        <!-- <div id="logo" style="font-family: Mattbilko; font-size: 2.2rem">
          {{ $t("maderna") }}
        </div> -->
        <div id="logo" style="font-family: Mattbilko; font-size: 2.2rem">
          MADERNA
        </div>
      </b-navbar-brand>
      <!-- <h2 class="px-2 text-grey" @click.prevent="toggleAuthModal" href="#">
        LogIn
      </h2> -->
      <!-- TODO[epic=Lang] -->
      <!-- <LanguageInput /> -->
      <Hamburger />
      <!-- <Overlay /> -->
    </div>
  </b-navbar>
</template>

<script>
import { mapMutations } from "vuex";
import Hamburger from "@/components/Hamburger.vue";
import Overlay from "./Overlay.vue";

export default {
  name: "Header",
  components: {
    Hamburger,
    Overlay,
  },
  data() {
    return {
      isActive: false,
      navClassName: "bg-transparent sticky-top",
    };
  },
  props: ["isMenuClosed"],

  methods: {
    ...mapMutations(["toggleAuthModal"]),
    // toggleAuthModal() {
    //   this.$store.commit('toggleAuthModal');
    // },
  },

  watch: {
    isActive(val) {
      this.$emit("updated", val);
    },
  },
};
</script>

<style lang="scss" scoped>
#logo {
  z-index: 101;
}

.hidden {
  visibility: hidden;
}

button {
  cursor: pointer;
}

/* remove blue outline */
button:focus {
  outline: 0;
}

@media only screen and (max-width: 600px) {
  .px-5 {
    padding-right: 1rem !important;
  }
}
</style>

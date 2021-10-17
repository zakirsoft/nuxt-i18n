<template>
  <div v-if="isOpen" class="fixed bottom-64 mb-10 inset-x-0 pb-2 sm:pb-5">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="p-2 rounded-lg bg-black shadow-lg sm:p-3">
        <div class="flex items-center justify-between flex-wrap">
          <div
            class="w-0 flex-1 font-normal text-white flex items-center md:inline"
          >
            We use cookies to provide our services and for analytics and
            marketing. To find out more about our use of cookies, please see our
            <nuxt-link class="cookie__link" to="/privacy-policy"
              >Privacy Policy</nuxt-link
            >. Click accept for the best user experience on our app.
          </div>
        </div>
        <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
          <button
            type="button"
            class="-mr-1 flex p-2 rounded-md bg-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white"
            @click="accept"
          >
            {{ buttonTextAccept }}
          </button>
          <button
            type="button"
            class="-mr-1 flex p-2 rounded-md bg-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white"
            text
            @click="deny"
          >
            {{ buttonTextDeny }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CookieMessage",
  props: {
    buttonTextAccept: {
      type: String,
      default: "Accept",
    },
    buttonTextDeny: {
      type: String,
      default: "Deny",
    },
    message: {
      type: String,
      default:
        "We use cookies to provide our services and for analytics and marketing. To find out more about our use of cookies, please see our Privacy Policy. By continuing to browse our website, you agree to our use of cookies.",
    },
    position: {
      type: String,
      default: "top",
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    containerPosition() {
      return `cookie--${this.position}`;
    },
  },
  created() {
    if (!this.getGDPR() === true) {
      this.isOpen = true;
    }
  },
  methods: {
    getGDPR() {
      if (process.browser) {
        return localStorage.getItem("GDPR:accepted", true);
      }
    },
    accept() {
      if (process.browser) {
        this.isOpen = false;
        localStorage.setItem("GDPR:accepted", true);
      }
    },
    deny() {
      if (process.browser) {
        this.isOpen = false;
        localStorage.setItem("GDPR:accepted", false);
      }
    },
  },
};
</script>

<style lang="sass" scoped>
.cookie
  z-index: 1
  position: fixed
  bottom: 0
  &__link
    color: #ffffff
    text-decoration: underline
    transition: all .25s
    &:hover
      text-decoration: none
</style>

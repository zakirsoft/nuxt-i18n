<template>
  <div>
    <div
      @click="openContactModal"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
      id="mybutton"
    >
      <button class="contactbtn" :class="{ hoveredBtn: isHovered }">
        Contact
      </button>
    </div>
    <transition name="fade">
      <div
        class="contact-modal"
        :class="{ open: getContactModal }"
        v-show="getContactModal"
        @click="closeModal"
      >
        <ContactForm
          :active-product="activeProduct"
          @close="openContactModal"
        />
      </div>
    </transition>
  </div>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    ContactForm,
  },
  data() {
    return {
      bkClass: "bk",
      isHovered: false,
      blurClass: "blur",
      activeProduct: null,
    };
  },
  computed: {
    ...mapGetters(["getContactModal"]),
  },
  methods: {
    openContactModal() {
      this.activeProduct = null;
      if (!this.getContactModal) {
        const productNames = ["traktor", "truck", "scooter", "buge"];
        for (const name of productNames) {
          if ($nuxt.$route.name.indexOf(name) !== -1) {
            this.activeProduct = name;
            break;
          }
        }
      }
      this.$store.commit("toggleContact");
      if (this.getContactModal) {
        document.body.classList.add("modal-open");
      } else {
        document.body.classList.remove("modal-open");
      }
      this.$emit("modalOpen", this.getContactModal);
    },
    closeModal() {
      if (this.getContactModal) {
        this.openContactModal();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.hoveredBtn {
  color: aqua !important; // so that it overwreite
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
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
.contactbtn {
  visibility: hidden;
  z-index: 100;
  position: fixed;
  top: 20%;
  -webkit-transform: rotate(90deg);
  /* Safari and Chrome */
  -moz-transform: rotate(90deg);
  /* Firefox */
  -ms-transform: rotate(90deg);
  /* IE 9 */
  -o-transform: rotate(90deg);
  /* Opera */
  transform: rotate(90deg);
  background-color: #0000006b;
  color: white;
  padding: 10px 20px;
  margin-left: -2.8%;
  border-radius: 4px;
  border-color: #565858;
  writing-mode: vertical-rl;
  text-orientation: upright;
}
.contact-modal {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 100;
  &.open {
    overflow: hidden;
  }
}
.contact-modal p {
  font-size: 2rem;
  padding: 3%;
}
#mybutton {
  left: 0;
}
</style>

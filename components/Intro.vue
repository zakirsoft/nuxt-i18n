<template>
  <div>
    <div @click="openIntroModal" @mouseenter="isHovered = true" @mouseleave="isHovered = false " id="mybutton">
      <button class="contactbtn" :class="{'hoveredBtn' : isHovered }">IntroModal</button>
    </div>
    <transition name="fade">
      <div class="contact-modal" :class="{'open': isIntroOpen}" v-show="isIntroOpen" @click="closeIntro">
        <IntroModal  @close="openIntroModal" />
      </div>
    </transition>
  </div>
</template>

<script>
import IntroModal from '@/components/IntroModal.vue';
export default {
  components: {
    IntroModal
  },
  data (){
    return {
      bkClass: 'bk',
      isHovered: false,
      isIntroOpen : false,
      blurClass: "blur",
    
    }
  },
  methods: {
    openInroModal(){
    
      
      this.isIntroOpen = !this.isIntroOpen
      if(this.isIntroOpen) {
        document.body.classList.add('intro-open')
      } else {
        document.body.classList.remove('intro-open')
      }
      this.$emit('Open', this.isIntroOpen )
    },
    closeIntro () {
      if (this.isIntroOpen) {
        this.openIntroModal()
      }
    }
  }
}
</script>

<style lang="scss"scoped>
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
  z-index: 100;
  position: fixed;
  top: 50%;
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

#mybutton {
  left: 0;
}
</style>
<template>
  <div>
    <div @mouseenter="enterdot" @mouseleave="leavedot" class="ring-container">
      <div class="ringring"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    index: Number,
  },
  data() {
    return {};
  },
  methods: {
    enterdot() {
      this.$emit("enter", this.index);

      console.log("SomeDots");
    },
    leavedot() {
      this.$emit("leave", this.index);
    },
  },
};
</script>

<style lang="scss" scoped>
.ring-container {
  position: relative;
}
.red {
  border: 3px solid red;
}
.ringring {
  border: 3px solid cyan;
  border-radius: 50%;
  -webkit-border-radius: 30px;
  height: 25px;
  width: 25px;
  position: relative;
  padding: 3px;
  margin: 3px;

  -webkit-animation: pulsate 1s ease-out;
  -webkit-animation-iteration-count: infinite;
  opacity: 0;
}
@-webkit-keyframes pulsate {
  0% {
    -webkit-transform: scale(0.1, 0.1);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1.2, 1.2);
    opacity: 0;
  }
}
</style>

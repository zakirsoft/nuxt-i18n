<template>
  <div
    class="w-full px-3 py-5 px-xl-5 text-white scooter-container"
    :class="`active-color-${activeColor}`"
  >
    <!-- Desktop -->
    <div class="scooter-desktop-wrapper d-none d-xl-block">
      <div class="row mb-4">
        <div class="col-md-auto mr-5">
          <div class="text-muted-alternative h5 mb-0">Weight</div>
          <div class="text-white h2">10,8 kg</div>
        </div>
        <div class="col-mb-4">
          <div class="text-muted-alternative h5 mb-0">Size [folded]</div>
          <div class="text-white h2">104/117 x 69cm</div>
        </div>
      </div>
      <div class="row">
        <div class="col-5 d-flex align-items-center mb-5">
          <h2 class="display-1 mb-5" style="line-height: 0.8">
            Maderna
            <br class="d-none d-md-block" />
            Cityscooter
          </h2>
        </div>
        <div class="col-4 scooter-images">
          <img
            v-show="activeColor === 'white'"
            src="/images/products/scooter/scooter-white.png"
            alt=""
            class="img-fluid"
          />
          <img
            v-show="activeColor === 'red'"
            src="/images/products/scooter/scooter-red.png"
            alt=""
            class="img-fluid"
          />
          <img
            v-show="activeColor === 'blue'"
            src="/images/products/scooter/scooter-blue.png"
            alt=""
            class="img-fluid"
          />
          <img
            v-show="activeColor === 'black'"
            src="/images/products/scooter/scooter-black.png"
            alt=""
            class="img-fluid"
          />
        </div>
        <div
          class="col-3 d-flex flex-column justify-content-evenly text-md-right"
        >
         
          <!-- <strong class="display-4">499,99€</strong> -->
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-2">
           pick colour
          <div class="mt-2">
            <button
              class="d-inline-block rounded-circle mr-2 btn-color-picker"
              style="background-color: #940d00"
              :class="{ 'border-white': activeColor === 'red' }"
              @click="changeColor('red')"
            ></button>
            <button
              class="d-inline-block rounded-circle mr-2 btn-color-picker"
              :class="{ 'border-white': activeColor === 'white' }"
              style="background-color: #fff"
              @click="changeColor('white')"
            ></button>
            <button
              class="d-inline-block rounded-circle mr-2 btn-color-picker"
              style="background-color: #007de5"
              :class="{ 'border-white': activeColor === 'blue' }"
              @click="changeColor('blue')"
            ></button>

            <button
              class="d-inline-block rounded-circle mr-2 btn-color-picker"
              style="background-color: #000000"
              :class="{ 'border-white': activeColor === 'black' }"
              @click="changeColor('black')"
            ></button>
          </div>
        </div>
        <div class="col-7">
          <nuxt-link to="produkte/scooter" class="normalize-link">
            <i class="fas fa-plus mr-3"></i>
            Details
          </nuxt-link>
        </div>
        <div class="col-3 text-md-right">
          <!-- <nuxt-link
            to="produkte/scooter"
            class="d-inline-block spec-button-container font-weight-bold letter-spacing"
          >
            <div class="spec-button text-white" data-v-5be9f1cc="">
              <span data-v-5be9f1cc="">Bestellen</span>
            </div>
          </nuxt-link> -->
        </div>
      </div>
    </div>
    <!-- Mobile -->
    <div class="d-xl-none">
      <img
        class="img-fluid white"
        style="margin: -1rem 0 0.5rem 0rem"
        src="/images/scooter-font.png"
      />

      <div class="scooter-images mb-3">
        <img
          v-show="activeColor === 'red'"
          src="/images/products/scooter/scooter-red.png"
          alt=""
          class="img-fluid"
        />
        <img
          v-show="activeColor === 'white'"
          src="/images/products/scooter/scooter-white.png"
          alt=""
          class="img-fluid"
        />

        <img
          v-show="activeColor === 'blue'"
          src="/images/products/scooter/scooter-blue.png"
          alt=""
          class="img-fluid"
        />
        <img
          v-show="activeColor === 'black'"
          src="/images/products/scooter/scooter-black.png"
          alt=""
          class="img-fluid"
        />
      </div>
      pick your favorite color
      <div class="mt-2">
        <button
          class="d-inline-block rounded-circle mr-2 btn-color-picker"
          style="background-color: #940d00"
          :class="{ 'border-white': activeColor === 'red' }"
          @click="changeColor('red')"
        ></button>
        <button
          class="d-inline-block rounded-circle mr-2 btn-color-picker"
          :class="{ 'border-white': activeColor === 'white' }"
          style="background-color: #fff"
          @click="changeColor('white')"
        ></button>
        <button
          class="d-inline-block rounded-circle mr-2 btn-color-picker"
          style="background-color: #007de5"
          :class="{ 'border-white': activeColor === 'blue' }"
          @click="changeColor('blue')"
        ></button>

        <button
          class="d-inline-block rounded-circle mr-2 btn-color-picker"
          style="background-color: #000000"
          :class="{ 'border-white': activeColor === 'black' }"
          @click="changeColor('black')"
        ></button>
      </div>
      <div class="col technical-information">
        <div class="col-auto">
          <div class="text-muted-alternative h5 mb-0">Weight</div>
          <div class="text-white h2">10,8 kg</div>
        </div>
        <div class="col-auto">
          <div class="text-muted-alternative h5 mb-0">Size</div>
          <div class="text-white h2">104/117 x 69cm</div>
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-12">
          <!-- <nuxt-link
            to="produkte/scooter"
            class="d-inline-block spec-button-container font-weight-bold letter-spacing"
          >
            <div class="spec-button2 text-white" data-v-5be9f1cc="">
              <span class="spec-button2" data-v-5be9f1cc="">
                Jetzt Bestellen!
              </span>
            </div>
          </nuxt-link> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeColor: "red"
    };
  },
  methods: {
    changeColor(color) {
      this.$store.commit("changeColor", color);
      this.activeColor = color;
    }
  }
};
</script>

<style scoped lang="scss">


.btn-color-picker {
  width: 30px;
  height: 30px;
  border: 1px solid transparent;
}

.text-white {
  transition: 0.5s;
}

.active-color-white {
  background-color: #becfe9;
 background-image: linear-gradient(
    171deg,
    rgba(45, 45, 45, 0.671) 5%,
    rgba(150, 144, 150, 1) 47%,
    rgba(255, 255, 255, 0.9822303921568627) 85%
  );
  &.text-white {
    color: inherit !important;
  }

  .text-white {
    color: inherit !important;
  }
}

.active-color-red {
background: rgb(78,74,80);
  background-image: linear-gradient(315deg, #3f0d12 0%, #a71d31 74%);
}

.active-color-blue {
  background-color: #2a2a72;
  background-image: linear-gradient(315deg, #2a2a72 0%, #009ffd 74%);
  // linear-gradient(315deg, #2a2a72 0%, #009ffd 74%);
}
.active-color-black {
  background-color: #2a2a72;
  background-image: linear-gradient(315deg, #7c7c7c 0%, #303233 74%);
}

.text-muted-alternative {
  color: #cbc5e2;
}

.scooter-images img {
  width: 100%;
  
  
}

.technical-information .h2 {
  font-size: 1.2rem;
  padding-left: 0;
}

@media screen and (min-width: 768px) {
  .scooter-images img {
    min-width: 570px;
    min-height: 600px;
    max-width: 570px;
    max-height: 600px;
  }
}

@media screen and (min-width: 1200px) {
  .scooter-desktop-wrapper {
    min-height: 530px !important;
    display: flex !important;
    flex-direction: column;
    justify-content: center;
  }
  .btn-color-picker {
    width: 25px;
    height: 25px;
  }
  
}

@media screen and (min-width: 1490px) {
  .btn-color-picker {
    width: 40px;
    height: 40px;
  }
}
@media screen and (min-width: 1024px) {
  .d-xl-none {
    margin: 10% 0 0 10%;
  }
  .scooter-images.mb-3 {
    margin: auto;
  }
}
@media screen and (min-width: 768px) {
  .scooter-images.mb-3 {
    margin: auto;
  }
}
@media screen and (min-width: 540px) {
  .scooter-images.mb-3 {
    display: flex;
    margin: 10% 0 0 10%;
  }
}
</style>

<template>
  <div class="contact-background py-5">
    <div class="contact-page">
      <div class="row p-3 px-5">
        <div class="col-md-6">
          <h1>Get in Touch</h1>
          <p>
            You need more information? Check what other persons are saying about
            our product. They are very happy with their purchase.
          </p>
          <ul class="fa-ul ml-4">
            <li class="mb-4 pl-lg-3">
              <span class="fa-li">
                <i class="fas fa-map-marker-alt fa-lg"></i>
              </span>
              <strong>Find us at the Office</strong><br />
              Grundsteingasse 11<br />
              1160 Wien<br />Austria
            </li>
            <li class="mb-4 pl-lg-3">
              <span class="fa-li">
                <i class="fas fa-mobile-alt fa-lg"></i>
              </span>
              <strong>Give us a Ring</strong><br />

              +43 676 422 77 31
            </li>
            <li class="mb-4 pl-lg-3">
              <span class="fa-li">
                <i class="far fa-envelope fa-lg"></i>
              </span>
              <strong>Send us an E-Mail</strong><br />
              mail@maderna.bike
            </li>
          </ul>
        </div>
        <div class="col-md-6 second-container">
          <div v-if="subSucces == false" class="pt-8">
            <h2>Send Us A Message</h2>
            <form
              @submit.prevent="handleSubmit"
              name="contact"
              method="POST"
              data-netlify="true"
              netlify
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />

              <MaterialInput
                v-model="form.fullName"
                name="Name"
                label="Name"
                required
                class="green"
              />
              <MaterialInput
                v-model="form.email"
                name="email"
                label="E-Mail"
                type="email"
                required
              />
              <MaterialInput
                v-model="form.topic"
                name="topic"
                label="Topic"
                required
              />
              <MaterialSelect
                v-model="form.product"
                name="product"
                label="Product"
                :options="productOptions"
              />
              <MaterialTextarea
                v-model="form.message"
                name="message"
                label="Message"
                required
              />
              <label class="pure-material-checkbox">
                <input
                  id="checkbox"
                  v-model="checkbox"
                  name="checkbox"
                  type="checkbox"
                />
                <span>Checkbox</span>
              </label>
              <button type="submit">Send Message</button>
            </form>
          </div>
          <div v-else class="p-4 pt-5">
            <h2>Thank you for your massage!!</h2>
            <p>we'll get back to you asap</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MaterialInput from "@/components/MaterialInput";
import MaterialSelect from "@/components/MaterialSelect";
import MaterialTextarea from "@/components/MaterialTextarea";

export default {
  name: "kontakt",

  components: { MaterialInput, MaterialSelect, MaterialTextarea },
  props: {
    checkbox: {
      type: Boolean,
      default: null,
    },
    activeProduct: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      subSucces: false,
      form: {
        name: "",
        email: "",
        topic: "",
        product: "",
        message: "",
        checkbox: false,
      },
      productOptions: [
        { value: "scooter", label: "Scooter" },
        { value: "truck", label: "Truck" },
        { value: "traktor", label: "Tracktor" },
        { value: "buge", label: "BUG-E" },
      ],
    };
  },
  computed: {
    bgStyle() {
      let imgUrl =
        "https://colorlib.com/etc/cf/ContactFrom_v17/images/bg-01.jpg";
      if (this.form.product) {
        switch (this.form.product) {
          case "truck":
            imgUrl = "/images/products/truck/truck.png";
            break;
          case "scooter":
            imgUrl = "/images/products/scooter/scooter.png";
            break;
          case "traktor":
            imgUrl = "/images/products/tractor/tractor.png";
            break;
          case "buge":
            imgUrl = "/images/products/buge.jpg";
            break;
        }
      }
      return {};
    },
  },
  watch: {
    activeProduct(val) {
      this.form.product = val;
    },
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )

        .join("&");
    },
    handleSubmit() {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": "contact",
          ...this.form,
        }),
      })
        .then(() => (this.subSucces = true))
        .then(() => setTimeout(() => this.$emit("close"), 1000))
        .catch((error) => alert(error));
    },
  },

  // asyncData() {
  //   return new Promise((resolve) => {
  //     setTimeout(function () {
  //       resolve({})
  //     }, 1000)
  //   })
  // }
};
</script>

<style lang="scss" scoped>
.pure-material-checkbox {
  z-index: 0;
  position: relative;
  display: flex;
  color: black;

  font-size: 16px;
  line-height: 1.5;
}

/* Input */
.pure-material-checkbox > input {
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  z-index: -1;
  position: absolute;
  left: -10px;
  top: -8px;
  display: block;
  margin: 0;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: transparent;

  box-shadow: none;
  outline: none;
  opacity: 0;
  transform: scale(1);
  pointer-events: none;
  transition: opacity 0.3s, transform 0.2s;
}

/* Span */
.pure-material-checkbox > span {
  display: inline-block;
  width: 100%;
  cursor: pointer;
}

/* Box */
.pure-material-checkbox > span::before {
  content: "";
  display: inline-block;
  box-sizing: border-box;
  margin: 3px 11px 3px 1px;
  border: solid 2px; /* Safari */
  border-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);
  border-radius: 2px;
  width: 18px;
  height: 18px;
  vertical-align: top;
  transition: border-color 0.2s, background-color 0.2s;
}

/* Checkmark */
.pure-material-checkbox > span::after {
  content: "";
  display: block;
  position: absolute;
  top: 4px;
  left: 2px;
  width: 10px;
  height: 5px;
  border: solid 2px transparent;
  border-right: none;
  border-top: none;
  transform: translate(3px, 4px) rotate(-45deg);
}

/* Checked, Indeterminate */
.pure-material-checkbox > input:checked,
.pure-material-checkbox > input:indeterminate {
  background-color: turquoise;
}

.pure-material-checkbox > input:checked + span::before,
.pure-material-checkbox > input:indeterminate + span::before {
  border-color: turquoise;
  background-color: transparent;
}

.pure-material-checkbox > input:checked + span::after,
.pure-material-checkbox > input:indeterminate + span::after {
  border-color: turquoise;
}

.pure-material-checkbox > input:indeterminate + span::after {
  border-left: none;
  transform: translate(4px, 3px);
}

/* Hover, Focus */
.pure-material-checkbox:hover > input {
  opacity: 0.04;
}

.pure-material-checkbox > input:focus {
  opacity: 0.12;
}

.pure-material-checkbox:hover > input:focus {
  opacity: 0.16;
}

/* Active */
.pure-material-checkbox > input:active {
  opacity: 1;
  transform: scale(0);
  transition: transform 0s, opacity 0s;
}

.pure-material-checkbox > input:active + span::before {
  border-color: turquoise;
}

.pure-material-checkbox > input:checked:active + span::before {
  border-color: transparent;
  background-color: red;
}

/* Disabled */
.pure-material-checkbox > input:disabled {
  opacity: 0;
}

.pure-material-checkbox > input:disabled + span {
  color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38);
  cursor: initial;
}

.pure-material-checkbox > input:disabled + span::before {
  border-color: currentColor;
}

.pure-material-checkbox > input:checked:disabled + span::before,
.pure-material-checkbox > input:indeterminate:disabled + span::before {
  border-color: transparent;
  background-color: currentColor;
}

.contact-form {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  background: rgb(68, 141, 141);
  z-index: 100;
  position: relative;

  & > div {
    width: 50%;
  }
  & :hover {
    color: aqua;
    stroke: aqua;
    fill: aqua;
  }

  .first-container {
    background-color: linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.8)
    );
    background-position: center;
    background-repeat: repeat;
    background-size: contain 80%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .second-container {
    justify-content: center;
    align-self: center;
    order: 2;

    h2 {
      font: {
        size: 30px;
        weight: 400;
      }
      color: black;
      line-height: 1.2;
      text-align: center;
      margin-bottom: 20px;
    }

    form {
      display: flex;
      flex-direction: column;
      padding: 10px 20px;

      button {
        width: 200px;
        height: 50px;
        background: cyan;
        color: black;

        font: {
          size: 17px;
          weight: 600;
        }
        text-transform: uppercase;
        border: 0;
        position: relative;
        left: calc(50% - 100px);
        cursor: pointer;

        &:hover {
          background: black;
        }
      }
    }
  }
}

button {
  width: 200px;
  height: 50px;
  background: cyan;
  color: black;

  font: {
    size: 17px;
    weight: 600;
  }
  text-transform: uppercase;
  border: 0;
  position: relative;
  left: calc(50% - 100px);
  cursor: pointer;

  &:hover {
    background: white;
  }
}
.contact-form {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  background: rgb(68, 141, 141);
  z-index: 100;
  position: relative;

  & > div {
    width: 50%;
  }
  & :hover {
    color: aqua;
    stroke: aqua;
    fill: aqua;
  }
}
.contact-background {
  background-color: white;
  // background:  linear-gradient(
  // 327deg
  // , rgb(102 100 126 / 62%) 30%, rgba(165,165,190,1) 45%, rgba(255,255,255,1) 75%);
  //   min-height: 100vh;
  //   padding-top: 10%;
}

@media (max-width: 768px) {
}
</style>

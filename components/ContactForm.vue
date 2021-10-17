<template>
  <div class="contact-background">
    <div class="contact-form" @click.stop="">
      <div class="btn-close-modal" @click="$emit('close')">
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.2028 10L19.6805 2.52146C19.8862 2.3156 19.9997 2.04095 20 1.74808C20 1.45505 19.8865 1.18008 19.6805 0.974535L19.0252 0.31937C18.8192 0.113015 18.5446 0 18.2514 0C17.9587 0 17.6841 0.113015 17.478 0.31937L10.0003 7.79742L2.52228 0.31937C2.31659 0.113015 2.04179 0 1.74878 0C1.4561 0 1.1813 0.113015 0.97561 0.31937L0.32 0.974535C-0.106667 1.40123 -0.106667 2.09526 0.32 2.52146L7.79789 10L0.32 17.4782C0.114146 17.6844 0.000813008 17.9591 0.000813008 18.2519C0.000813008 18.5448 0.114146 18.8194 0.32 19.0255L0.975447 19.6806C1.18114 19.8868 1.4561 20 1.74862 20C2.04163 20 2.31642 19.8868 2.52211 19.6806L10.0002 12.2024L17.4779 19.6806C17.6839 19.8868 17.9585 20 18.2512 20H18.2515C18.5444 20 18.819 19.8868 19.025 19.6806L19.6803 19.0255C19.886 18.8196 19.9995 18.5448 19.9995 18.2519C19.9995 17.9591 19.886 17.6844 19.6803 17.4784L12.2028 10Z"
            fill="white"
            id="closeit"
          />
        </svg>
      </div>
      <div class="first-container" :style="bgStyle">
        <div class="col-md-6 text-white p-4">
          <h1>Get</h1>
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
      </div>
      <div class="second-container">
        <div v-if="subSucces == false" class="pt-5">
          <h2>Send Us A Message</h2>
          <form
            @submit.prevent="handleSubmit"
            action="/components/thank-you"
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
      return {
        backgroundImage: `linear-gradient(45deg, rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${imgUrl})`,
      };
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
        .then(() => console.log("mateusz form"))
        .then(() => (this.subSucces = true))
        .then(() => setTimeout(() => this.$emit("close"), 1000))
        .catch((error) => alert(error));
    },
  },
};
</script>

<style lang="scss" scoped>
.pure-material-checkbox {
  z-index: 0;
  position: relative;
  display: inline-block;
  color: black;

  font-size: 16px;
  line-height: 1.5;
}

/* Input */
.contact-background {
  background: rgb(238, 238, 247);

  // background:  linear-gradient(
  // 327deg
  // , rgb(102 100 126 / 62%) 30%, rgba(165,165,190,1) 45%, rgba(255,255,255,1) 75%);
  //   min-height: 100vh;
  //   padd
}
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
.btn-close-modal {
  order: 1;
  position: absolute;
  right: -45%;
  top: 5%;
  cursor: pointer;
  z-index: 2000;
}

.contact-form {
  width: 100%;
  height: 100vh;
  // background:whitesmoke;
  display: flex;
  justify-content: space-between;

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
    background-position: center;
    background-repeat: repeat;
    background-size: contain 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .info-container {
      div {
        margin: 24px 0;

        h3 {
          color: white;
          font: {
            size: 18px;
            weight: 400;
          }
          line-height: 1.2;
          padding-bottom: 10px;
        }

        &:first-of-type p {
          max-width: 260px;
          color: #999;
        }

        p {
          font-size: 16px;
          line-height: 1.6;
          color: cyan;
        }
      }
    }
  }

  .second-container {
    background: transparent;
    justify-content: center;
    align-self: center;
    order: 1;

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
          background: white;
        }
      }
    }
  }
}
@media screen and (max-width: 700px) {
  .btn-close-modal {
    position: absolute;
    right: -90%;
    top: 20px;
    cursor: pointer;
    z-index: 2000;
  }
  .second-container {
    padding: 0;
  }
  .contact-form {
    flex-direction: column;
    overflow-y: scroll;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;

    & > div {
      width: 100%;
    }

    .first-container {
      order: 2;
      padding: 40px 0;
    }
  }

  .margin-minus {
    margin-top: -2rem;
  }

  .contact-background {
    padding: 10% 0 5% 0;
    margin-top: -10%;
  }
}
</style>

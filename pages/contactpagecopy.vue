<template>
  <div class="contact-background py-5">
    <div class="container contact-page">
      <div class="row py-5">
        <div class="col-12 col-md-6 ">
          <h1>
            Get in Touch
          </h1>
          <p>
            You need more information? Check what other persons are
            saying about our product. They are very happy with their
            purchase.
          </p>
          <ul class="fa-ul ml-4">
            <li class="mb-4 pl-lg-3">
                            <span class="fa-li">
                                <i class="fas fa-map-marker-alt fa-lg"></i>
                            </span>
              <strong>Find us at the Office</strong><br/>
              Grundsteingasse 11<br/>
              1160 Wien Österreich
            </li>
            <li class="mb-4 pl-lg-3">
                            <span class="fa-li">
                                <i class="fas fa-mobile-alt fa-lg"></i>
                            </span>
              <strong>Give us a Ring</strong><br/>
              Grundsteingasse 11<br/>
              +43 676 422 77 31 Österreich
            </li>
            <li class="mb-4 pl-lg-3">
                            <span class="fa-li">
                                <i class="far fa-envelope fa-lg"></i>
                            </span>
              <strong>Send us an E-Mail</strong><br/>
              mail@maderna.bike
            </li>
          </ul>
        </div>
        <div class="col-12 col-md-6">
        <div v-if="subSucces == false" class="p-4 pt-5">
        <h2 style="color:#000000ab">Send Us A Message</h2>
        <form
        
          @submit.prevent="handleSubmit"
          name="contact"
          method="POST"
          data-netlify="true"
          netlify
          data-netlify-honeypot="bot-field"
        >
          <input
           
            type="hidden"
            name="form-name"
            value="contact"
          />

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
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div  v-else class="p-4 pt-5">
        <h2>Thank you for your massage!!</h2>
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
  name: 'kontakt',
  
  components: { MaterialInput, MaterialSelect, MaterialTextarea },
  props: {
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
      let imgUrl ="https://colorlib.com/etc/cf/ContactFrom_v17/images/bg-01.jpg";
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
        .map (key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
        
        .join("&")
    },
    handleSubmit() {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": "contact",
          ...this.form
        }),
      })
        
        .then(() => this.subSucces = false)
        .setTimeout(() => (this.$router.push("/")), 500)
        .catch(error => alert(error))

    },
  },

  asyncData() {
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve({})
      }, 1000)
    })
  }
}
</script>

<style lang="scss" scoped>
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
  background: rgb(129,128,143);


}

@media (min-width: 768px){
  .margin-minus {
    margin-top: -2rem;
  }
}

@media (max-width: 768px) {
  .contact-background {
    padding: 10% 0 5% 0;
    margin-top: -10%;
  }
}

</style>

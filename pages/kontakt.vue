<template>
  <div class="contact-background py-5 lg:px-5">
    <div class="container contact-page">
      <div class="row py-5">
        <div class="col-12 col-md-6 text-white">
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
              1160 Wien Österreich
            </li>
            <li class="mb-4 pl-lg-3">
              <span class="fa-li">
                <i class="fas fa-mobile-alt fa-lg"></i>
              </span>
              <strong>Give us a Ring</strong><br />
              Grundsteingasse 11<br />
              +43 676 422 77 31 Österreich
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
        <div class="col-12 col-md-6">
          <ContactForm class="margin-minus" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";

export default {
  name: "kontakt",
  components: {
    ContactForm,
  },
  asyncData() {
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve({});
      }, 1000);
    });
  },
};
</script>

<style scoped>
.contact-background {
  background: #4c4c4c;
  min-height: 100vh;
  padding-top: 10%;
}

@media (min-width: 768px) {
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

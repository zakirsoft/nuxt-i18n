<template>
  <div class="d-flex flex-column justify-content-between min-vh-100 media-page-layout">
    <div class="above-footer">
      <Header />

      <main>
        <div class="media-page border">
          <div class="row mx-0">
            <div class="col-sm-12 col-md-3 p-5 border-right link-section">
              <div class="article-container">
                <h3>Artikeln</h3>
                <div class="links-container">
                  <nuxt-link class="navigation-links" to="/">Tractor (oamtc)</nuxt-link>
                  <nuxt-link class="navigation-links" to="/">Article 2</nuxt-link>
                </div>
              </div>
              <div class="video-container">
                <h3>Video</h3>
                <div class="links-container">
                  <nuxt-link class="navigation-links" to="/">Ferdinand GT3 RS</nuxt-link>
                  <nuxt-link class="navigation-links" to="/">Video Title</nuxt-link>
                </div>
              </div>
              <div class="gallarie-container">
                <h3>Gallerie</h3>
                <div class="links-container">
                  <nuxt-link class="navigation-links" to="/">Maderna Strassen</nuxt-link>
                  <nuxt-link class="navigation-links" to="/">-g'gschicheten</nuxt-link>
                </div>
              </div>
            </div>

            <Nuxt /> <!-- Component -->

          </div>
        </div>
      </main>

      <PreFooter />
    </div>

    <Footer />

    <Overlaymenu />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PreFooter from "@/components/PreFooter";
import Overlaymenu from "@/components/overlaymenu";
export default {
  name: "blog-media",
  components: {Overlaymenu, PreFooter, Footer, Header}
}
</script>

<style>
.media-page-layout {
  width: 100%;
  max-width: 100%;
}
.media-page {
  border-radius: 60px;
  width: 100%;
}

.article-container, .video-container, .gallarie-container {
  margin-bottom: 2rem;
}

.article-container h3, .video-container h3, .gallarie-container h3 {
  text-transform: capitalize;
  font-family: "DesignSystemA-500R";
  font-size: 1.5rem;
  font-weight: 100;
  text-align: center;
}

.navigation-links {
  display: block;
  margin-bottom: 1%;
  text-transform: capitalize;
  font-family: "DesignSystemA-500R";
  font-size: 1rem;
  font-weight: 100;
  letter-spacing: 2px;
}

.navigation-links:hover, .navigation-links:visited {
  text-decoration: none;
  color: #4c4c4c;
}

.navigation-links:active {
  font-weight: bold;
  color: #4c4c4c;
}



</style>
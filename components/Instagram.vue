<template>
  <section class="" id="instagram">
    <!-- <p>Fetching data: {{ $nuxt.isFetching }} ({{ $nuxt.nbFetching }})</p>
    <template v-if="$fetchState.pending">Loading...</template>
    <template v-else-if="$fetchState.error">
      <p>Error while fetching posts</p>
    </template>
    <template v-else> -->
    <template>
      <div class="inner md:m-5">
        <div class="text-wrapper">
          <h3 class="text-4xl ml-2" v-html="title"></h3>
        </div>
        <div class="grid-cols-3" id="instafeed"></div>
      </div>
     
    </template>
  </section>
</template>

<script>
import * as Instafeed from "instafeed.js/dist/instafeed.min.js";
export default {
  name: "Instagram",
  data: function () {
    return {
      title:"Our Instagram",
      userFeed: false,
      InstagramAppId: "17841405806191132",
      
       
    };
  },
  fetchOnServer: false,
  async fetch() {
    this.userFeed = new Instafeed({
      get: "user",
      userId: "",
      clientId: this.InstagramAppId,
      accessToken: InstagramToken, // loaded var loaded in external token url
      resolution: "thumbnail",
      template:
        '<a href="{{link}}" style="background-image:url({{image}});" target="_blank" id="{{id}}"></a>',
      sortBy: "most-recent",
      limit: 3,
      links: false,
    });
  },
  mounted: function () {
    this.userFeed.run();
  },
};
</script>

<style  lang="scss">
#instagram {
  
  .inner {
    padding-bottom: 140px;
    .text-wrapper {
      padding: 40px 0;
      padding-bottom: 30px;
    
      
    }
    #instafeed {
      width: 100%;
      margin: 0;
      display: flex;
      flex-wrap: wrap;
      a {
        display: block;
        align-items: flex-start;
        position: relative;
        background-size: cover;
        background-position: center center;
        width: 300px;
        height: 300px;
        margin-bottom: 1rem;
      
        
       
        &:after {
          content: "";
          background-color: whitesmoke;
          opacity: 0;
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          right: 0;
          transition: opacity .2s ease-in-out;
        }
        &:hover {
          &:after {
            opacity: 0.6;
          }
        }
      }
    }
  }
 
  
  
  
}
@media only screen and (max-width: 600px) {
 #instagram {
   .inner {
    justify-content: center;
    .text-wrapper {
      padding: 40px 0;
      padding-bottom: 30px;
    
      
    }
    #instafeed {
  justify-content: center;
  

  }
}


}


}
</style>
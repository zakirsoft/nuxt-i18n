<template>
  <div>
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
       
        <path
          d="M11.9999 5.09091C11.198 5.09091 10.5456 5.74371 10.5456 6.54611C10.5456 7.34778 11.198 8 11.9999 8C12.8017 8 13.4541 7.34778 13.4541 6.54611C13.4541 5.74371 12.8017 5.09091 11.9999 5.09091ZM12 10.1818C11.3975 10.1818 10.9091 10.6703 10.9091 11.2727V17.8182C10.9091 18.4207 11.3975 18.9091 12 18.9091C12.6025 18.9091 13.0909 18.4207 13.0909 17.8182V11.2727C13.0909 10.6703 12.6025 10.1818 12 10.1818Z"
          fill="white"
          class="info-code-1"
        />
      </g>

      <path
        d="M12.2028 10L19.6805 2.52146C19.8862 2.3156 19.9997 2.04095 20 1.74808C20 1.45505 19.8865 1.18008 19.6805 0.974535L19.0252 0.31937C18.8192 0.113015 18.5446 0 18.2514 0C17.9587 0 17.6841 0.113015 17.478 0.31937L10.0003 7.79742L2.52228 0.31937C2.31659 0.113015 2.04179 0 1.74878 0C1.4561 0 1.1813 0.113015 0.97561 0.31937L0.32 0.974535C-0.106667 1.40123 -0.106667 2.09526 0.32 2.52146L7.79789 10L0.32 17.4782C0.114146 17.6844 0.000813008 17.9591 0.000813008 18.2519C0.000813008 18.5448 0.114146 18.8194 0.32 19.0255L0.975447 19.6806C1.18114 19.8868 1.4561 20 1.74862 20C2.04163 20 2.31642 19.8868 2.52211 19.6806L10.0002 12.2024L17.4779 19.6806C17.6839 19.8868 17.9585 20 18.2512 20H18.2515C18.5444 20 18.819 19.8868 19.025 19.6806L19.6803 19.0255C19.886 18.8196 19.9995 18.5448 19.9995 18.2519C19.9995 17.9591 19.886 17.6844 19.6803 17.4784L12.2028 10Z"
        fill="white"
        id="close"
      />

      <g>
        <path
          d="M12 0C5.3832 0 0 5.38327 0 12.0001C0 18.6169 5.3832 24 12 24C18.6168 24 24 18.6169 24 12.0001C24 5.38327 18.6168 0 12 0ZM12 21.8182C6.58618 21.8182 2.18182 17.4138 2.18182 12.0001C2.18182 6.58633 6.58618 2.18182 12 2.18182C17.4138 2.18182 21.8182 6.58633 21.8182 12.0001C21.8182 17.4138 17.4137 21.8182 12 21.8182Z"
          fill="white"
          class="info-cicle-2"
        />
        <path
          d="M11.9999 5.09091C11.198 5.09091 10.5456 5.74371 10.5456 6.54611C10.5456 7.34778 11.198 8 11.9999 8C12.8017 8 13.4541 7.34778 13.4541 6.54611C13.4541 5.74371 12.8017 5.09091 11.9999 5.09091ZM12 10.1818C11.3975 10.1818 10.9091 10.6703 10.9091 11.2727V17.8182C10.9091 18.4207 11.3975 18.9091 12 18.9091C12.6025 18.9091 13.0909 18.4207 13.0909 17.8182V11.2727C13.0909 10.6703 12.6025 10.1818 12 10.1818Z"
          fill="white"
          class="info-code-2"
        />
      </g>
    </svg>
  </div>
</template>

<script>
import { gsap, TweenMax, MorphSVGPlugin } from "gsap/all";


// register MorphSVGPlugin
if (process.client) {
  gsap.registerPlugin(MorphSVGPlugin);
}

export default {
  props: {
    isInfoActive: {
      type: Boolean,
    }
  },

  watch: {
    isInfoActive() {
      const duration = 0.6

      // toggle between the info icon or close if it is active
      if (this.isInfoActive) {
        TweenMax.to(".info-cicle-1", duration, { morphSVG: { shape: "#close" } });
        TweenMax.to(".info-code-1", duration, { morphSVG: { shape: "#close" } });
      } else {
        TweenMax.to(".info-cicle-1", duration, { morphSVG: { shape: ".info-cicle-2" } });
        TweenMax.to(".info-code-1", duration, { morphSVG: { shape: ".info-code-2" } });
      }
    },
  },
};
</script>

<style scoped>
svg {
  display: inline-block;
  vertical-align: baseline;
  margin-bottom: 4px;
  /* yes, I'm that particular about formatting */
}

/* hides icon */
.info-code-1:hover {
  color: aqua;
  stroke: aqua;
  fill: aqua;
  justify-self: center;
  align-self: center;
  height: 1.4em;
  width: auto;
}
#close,
.info-cicle-2,
.info-code-2 {
  visibility: hidden;
}
</style>
<template>
  <div class="lang-dropdown">
    <select v-model="$i18n.locale" v-on:change="switchLang($i18n.locale)">
      <option
        v-for="lang in $i18n.locales"
        :key="lang.code"
        :value="lang.code"
        >{{ lang.name }}</option
      >
    </select>
  </div>
</template>
<script>
export default {
  computed: {
    locales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  },
  methods: {
    switchLang: function switchLang(locale) {
      var language = locale.toLocaleLowerCase();
      this.$i18n.setLocaleCookie(language)
      this.switchLocalePath(language);
    }
  }
}
</script>
<style lang="scss">
select {
  border-radius: 0;
  color: default-color;
  padding: 1rem 3rem 1rem 1rem;
  border: 1px solid transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 150 50'><polygon fill='rgb(108, 92, 255)' points='0,0 100,0 50,50'/></svg>") no-repeat;
  background-size: 12px;
  background-position: calc(100% - 1rem) center;
  background-repeat: no-repeat;
  text-transform: uppercase;
  transition: border-color .3s;
  cursor: pointer;

  &:hover {
    border-color: default-color;
  }
  
  &:focus {
    outline: none;
  }
}
</style>
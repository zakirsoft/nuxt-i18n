<template>
  <label class="pure-material-textfield-outlined">
    <textarea v-model="localValue" placeholder=" " :required="required" />
    <span>{{ label }}</span>
  </label>
</template>

<script>
export default {
  name: "MaterialTextarea",
  props: {
    label: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    localValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
  },
};
</script>

<style lang="scss">
.pure-material-textfield-outlined {
  position: relative;
  display: inline-block;
  padding-top: 6px;
  font-size: 16px;
  line-height: 1.5;
  overflow: hidden;
  width: 100%;
}

/* Input, Textarea */
.pure-material-textfield-outlined > input,
.pure-material-textfield-outlined > textarea {
  box-sizing: border-box;
  margin: 0;
  border: solid 1px;
  /* Safari */
  border-color: black;
  border-top-color: black;
  border-radius: 4px;
  padding: 15px 13px 15px;
  width: 100%;
  height: inherit;
  color: black;
  background-color: transparent;
  box-shadow: none;
  /* Firefox */
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  caret-color: rgb(165, 47, 47);
  transition: border 0.2s, box-shadow 0.2s;
}

/* Span */
.pure-material-textfield-outlined > input + span,
.pure-material-textfield-outlined > textarea + span {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  border-color: black;
  width: 100%;
  max-height: 100%;
  color: black;
  font-size: 75%;
  line-height: 15px;
  cursor: text;
  transition: color 0.2s, font-size 0.2s, line-height 0.2s;
}

/* Corners */
.pure-material-textfield-outlined > input + span::before,
.pure-material-textfield-outlined > input + span::after,
.pure-material-textfield-outlined > textarea + span::before,
.pure-material-textfield-outlined > textarea + span::after {
  content: "";
  display: block;
  box-sizing: border-box;
  margin-top: 6px;
  border-top: solid 1px;
  border-top-color: black;
  min-width: 10px;
  height: 8px;
  pointer-events: none;
  box-shadow: inset 0 1px transparent;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.pure-material-textfield-outlined > input + span::before,
.pure-material-textfield-outlined > textarea + span::before {
  margin-right: 4px;
  border-left: solid 1px transparent;
  border-radius: 4px 0;
}

.pure-material-textfield-outlined > input + span::after,
.pure-material-textfield-outlined > textarea + span::after {
  flex-grow: 1;
  margin-left: 4px;
  border-right: solid 1px transparent;
  border-radius: 0 4px;
}

/* Hover */
.pure-material-textfield-outlined:hover > input,
.pure-material-textfield-outlined:hover > textarea {
  border-color: black;
  border-top-color: black;
}

.pure-material-textfield-outlined:hover > input + span::before,
.pure-material-textfield-outlined:hover > textarea + span::before,
.pure-material-textfield-outlined:hover > input + span::after,
.pure-material-textfield-outlined:hover > textarea + span::after {
  border-top-color: black;
}

.pure-material-textfield-outlined:hover > input:not(:focus):placeholder-shown,
.pure-material-textfield-outlined:hover
  > textarea:not(:focus):placeholder-shown {
  border-color: black;
}

/* Placeholder-shown */
.pure-material-textfield-outlined > input:not(:focus):placeholder-shown,
.pure-material-textfield-outlined > textarea:not(:focus):placeholder-shown {
  border-top-color: black;
}

.pure-material-textfield-outlined > input:not(:focus):placeholder-shown + span,
.pure-material-textfield-outlined
  > textarea:not(:focus):placeholder-shown
  + span {
  font-size: inherit;
  line-height: 68px;
}

.pure-material-textfield-outlined
  > input:not(:focus):placeholder-shown
  + span::before,
.pure-material-textfield-outlined
  > textarea:not(:focus):placeholder-shown
  + span::before,
.pure-material-textfield-outlined
  > input:not(:focus):placeholder-shown
  + span::after,
.pure-material-textfield-outlined
  > textarea:not(:focus):placeholder-shown
  + span::after {
  border-top-color: transparent;
}

/* Focus */
.pure-material-textfield-outlined > input:focus,
.pure-material-textfield-outlined > textarea:focus {
  border-color: black;
  border-top-color: transparent;
  box-shadow: inset 1px 0 black, inset -1px 0 black, inset 0 -1px black;
  outline: none;
}

.pure-material-textfield-outlined > input:focus + span,
.pure-material-textfield-outlined > textarea:focus + span {
  color: black;
}

.pure-material-textfield-outlined > input:focus + span::before,
.pure-material-textfield-outlined > input:focus + span::after,
.pure-material-textfield-outlined > textarea:focus + span::before,
.pure-material-textfield-outlined > textarea:focus + span::after {
  border-top-color: black !important;
  box-shadow: inset 0 1px black;
}

/* Disabled */
.pure-material-textfield-outlined > input:disabled,
.pure-material-textfield-outlined > input:disabled + span,
.pure-material-textfield-outlined > textarea:disabled,
.pure-material-textfield-outlined > textarea:disabled + span {
  border-color: rgba(var(255, 0, 0, 0), 0.38) !important;
  border-top-color: transparent !important;
  color: rgba(var(255, 0, 0, 0), 0.38);
  pointer-events: none;
}

.pure-material-textfield-outlined > input:disabled + span::before,
.pure-material-textfield-outlined > input:disabled + span::after,
.pure-material-textfield-outlined > textarea:disabled + span::before,
.pure-material-textfield-outlined > textarea:disabled + span::after {
  border-top-color: rgba(var(255, 0, 0, 0), 0.38) !important;
}

.pure-material-textfield-outlined > input:disabled:placeholder-shown,
.pure-material-textfield-outlined > input:disabled:placeholder-shown + span,
.pure-material-textfield-outlined > textarea:disabled:placeholder-shown,
.pure-material-textfield-outlined > textarea:disabled:placeholder-shown + span {
  border-top-color: rgba(var(255, 0, 0, 0), 0.38) !important;
}

.pure-material-textfield-outlined
  > input:disabled:placeholder-shown
  + span::before,
.pure-material-textfield-outlined
  > input:disabled:placeholder-shown
  + span::after,
.pure-material-textfield-outlined
  > textarea:disabled:placeholder-shown
  + span::before,
.pure-material-textfield-outlined
  > textarea:disabled:placeholder-shown
  + span::after {
  border-top-color: transparent !important;
}

/* Faster transition in Safari for less noticable fractional font-size issue */
@media not all and (min-resolution: 0.001dpcm) {
  @supports (-webkit-appearance: none) {
    .pure-material-textfield-outlined > input,
    .pure-material-textfield-outlined > input + span,
    .pure-material-textfield-outlined > textarea,
    .pure-material-textfield-outlined > textarea + span,
    .pure-material-textfield-outlined > input + span::before,
    .pure-material-textfield-outlined > input + span::after,
    .pure-material-textfield-outlined > textarea + span::before,
    .pure-material-textfield-outlined > textarea + span::after {
      transition-duration: 0.1s;
    }
  }
}
</style>

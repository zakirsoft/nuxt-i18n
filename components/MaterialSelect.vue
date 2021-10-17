<template>
  <div class="my-1">
    <div class="select">
      <select v-model="localValue" class="select-text" :required="required">
        <option value="" disabled selected></option>
        <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
        >
          {{ option.label }}
        </option>
      </select>
      <label class="select-label">{{ label }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "MaterialSelect",
  props: {
    label: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
    options: {
      type: Array,
      default: [],
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

<style lang="scss" scoped>
.select {
  position: relative;
}

.select-text {
  width: -webkit-fill-available;
  position: relative;
  font-family: inherit;
  background-color: transparent;
  padding: 15px 13px;
  // font-size: 14px;
  border-radius: 4px;
  border: 2px solid black;
}

/* Remove focus */
.select-text:focus {
  outline: none;
  // border: 1px solid black;
  box-shadow: inset 1px 0 white, inset -1px 0 white, inset 0 -1px white;
}

/* Use custom arrow */
.select .select-text {
  appearance: none;
  -webkit-appearance: none;
  color: black;
}

.select:after {
  position: absolute;
  top: 18px;
  right: 10px;
  /* Styling the down arrow */
  width: 0;
  height: 0;
  padding: 0;
  content: "";
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid rgba(0, 0, 0, 0.12);
  pointer-events: none;
}

.select-label {
  color: black;
  background: black;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  padding: 0 5px;
  left: 10px;
  top: 12px;
  transition: 0.2s ease all;
}

/* active state */
.select-text:focus ~ .select-label,
.select-text:valid ~ .select-label {
  color: rgb(0, 0, 0);
  top: -8px;
  transition: 0.2s ease all;
  font-size: 14px;
}

.select-text:valid:not(focus) ~ .select-label {
  color: black;
  background: white;
}
.select-text:valid:focus ~ .select-label {
  color: black;
}
</style>

<template>
  <div class="modal-backdrop" @click="$emit('close')">
    <div class="modal" @click.stop="">
      <header class="modal-header">
        <slot name="header">
          <h3>{{ $store.state.showingProduct.name }}</h3>
          <button type="button" class="btn-close" @click="close">
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
                id="close"
              />
            </svg>
          </button>
        </slot>
      </header>
      <section class="modal-body">
        <div class="intro-wrapper">
          <H1 class="maderna">Maderna</H1>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "IntroModal",
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-backdrop {
  opacity: 1;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  position: relative;
  width: 100%;
  margin: 0 auto;
  background: black;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: white;
  justify-content: space-between;
  align-items: center;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
  overflow-y: scroll;
}

.btn-close {
  border: none;
  font-size: 24px;
  padding: 8px;
  cursor: pointer;
  font-weight: bold;
  color: white;
  background: transparent;
  margin-right: 20px;
}
.btn-close:hover {
  fill: aqua !important;
  color: aqua;
  stroke: aqua;
}

.intro-wrapper {
  font-family: Mattbilko;
  font-size: 10rem;
  max-width: 80%;
  margin: 0 auto;
}
</style>

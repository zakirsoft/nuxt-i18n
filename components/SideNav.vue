<template>
  <div class="sidebar">
    <div
      class="sidebar-backdrop"
      @click="closeSidebarPanel"
      v-if="isOpened"
    ></div>
    <transition name="menuPanel">
      <div v-if="isOpened" class="sidebar-panel">
        <img src="/images/logo-white.png" class="menu-logo" />
        <ul class="sidebar-panel-nav">
          <li
            v-for="item in items"
            @click="routeto(item.link)"
            class="normal"
            :key="item.id"
            :class="{ overwrite: item.hasMarginTop }"
          >
            {{ item.text }}
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      isOpened: false,
      isLiHovered: [false, false, false, false, false],
      items: [
        //  <!-- TODO[epic=Lang] -->
        // {
        //   text: "Scooter",
        //   link: this.localePath("/produkte2/scooter"),
        //   id: "1",
        //   hasMarginTop: true,
        // },
        // { text: "Truck", link: this.localePath("/produkte2/truck"), id: "2" },
        // {
        //   text: "Tractor",
        //   link: this.localePath("/produkte2/tractor"),
        //   id: "3",
        // },
        // { text: "Bug-e", link: this.localePath("/produkte2/buge"), id: "4" },
        // {
        //   text: "gallery",
        //   link: this.localePath("/gallery"),
        //   id: "5",
        //   hasMarginTop: true,
        // },
        // {
        //   text: "about",
        //   link: this.localePath("/about"),
        //   id: "6",
        //   hasMarginTop: true,
        // },
        // {
        //   text: "contact",
        //   link: this.localePath("/contactpage"),
        //   id: "7",
        //   hasMarginTop: true,
        // },

        {
          text: "Scooter",
          link: "/produkte2/scooter",
          id: "1",
          hasMarginTop: true,
        },
        { text: "Truck", link: "/produkte2/truck", id: "2" },
        { text: "Tractor", link: "/produkte2/tractor", id: "3" },
        // { text: "Bug-e", link: "/produkte2/buge", id: "4" },

        {
          text: "All Products",
          link: "/products",
          id: "4",
          hasMarginTop: true,
        },
        { text: "gallery", link: "/gallery", id: "5", hasMarginTop: true },
        { text: "about", link: "/about", id: "6", hasMarginTop: true },
        { text: "contact", link: "/contactpage", id: "7", hasMarginTop: true },
      ],
    };
  },
  computed: {
    ...mapGetters(["sideBarStatus"]),
  },
  mounted() {
    console.log(this.isSideBarActive);
  },
  methods: {
    routeto(link) {
      this.$router.push(link);
      this.$store.commit("toggleSidebar");
    },
    closeSidebarPanel() {
      this.isBurgerActive = false;
      this.isOpened = false;

      this.$store.commit("toggleSidebar");
    },
    isHoveredIn(index) {
      console.log("hoverdIn");
      this.isLiHovered[index] = true;
    },
    isHoveredOut(index) {
      this.isLiHovered[index] = false;
      console.log("isHoveredOut");
    },
  },
  watch: {
    sideBarStatus() {
      this.isOpened = this.sideBarStatus;
    },
  },
};
</script>
<style lang="scss" scoped>
.menu-logo {
  position: relative;
  transform: translate(-50%, 50%);
}

.menuPanel-enter-active,
.menuPanel-leave-active {
  transition: transform 0.2s ease;
}

.menuPanel-enter,
.menuPanel-leave-to {
  transform: translateX(100%);
  transition: all 150ms ease-in 0s;
}

.sidebar-panel-nav {
  align-items: center;
  margin-top: 60px;
  padding: 3rem 2rem 2rem 2rem;
}
.menu-logo {
  height: 40px;
  position: relative;
  top: 0;
  left: 50%;
  transform: translateX(-50%, 50%);
}
.sidebar-backdrop {
  z-index: 10;
  background-color: rgba(85, 85, 87, 0.4);
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  cursor: pointer;
}

.sidebar-panel {
  text-decoration: none;
  font-family: "BankGothic";
  border-top-left-radius: 50px 50px;
  overflow-y: auto;
  background-color: #000000;
  position: fixed;
  right: 0;
  margin-left: 1rem;
  height: 85%;
  z-index: 999;
  padding: 1rem;
  width: 300px;
}
.normal {
  z-index: 9999;
  cursor: pointer;
  color: #fff;
  font-size: 1.5rem;
  padding-bottom: 0.7em;
  list-style: none;
  transition: margin-left 0.3s linear, font-weight 0.2s linear,
    color 0.3s linear;
  -webkit-transition: margin-left 0.3s linear, font-weight 0.2s linear,
    color 0.3s linear;
  -moz-transition: margin-left 0.3s linear, font-weight 0.2s linear,
    color 0.3s linear;
  -o-transition: margin-left 0.3s linear, font-weight 0.2s linear,
    color 0.3s linear;
  -ms-transition: margin-left 0.3s linear, font-weight 0.2s linear,
    color 0.3s linear;
}
.normal:hover {
  color: cyan;
  margin-left: 10%;
}
.overwrite {
  margin-top: 5%;
  border-top: 1px solid;
}

@media screen and (max-width: 600px) {
  .sidebar-panel {
    width: 100%;
  }
  .sidebar-panel-nav {
    margin: 0;
  }
  .overwrite {
    margin-top: 2%;
    border-top: 1px solid;
  }
  .menu-logo {
    height: 40px;
    position: relative;
    top: 0;

    transform: translateX(-50%, 50%);
  }
}
</style>

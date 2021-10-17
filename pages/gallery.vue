<template>
  <div class="picgallery container-fluid">
    <div class="root">
      <div class="root__item root__item--auto">
        <div class="items">
          <div
            class="items__item"
            :class="{ active: currentCategory == category.name }"
            v-for="(category, index) in categories"
            :key="`cat-${index}`"
            @click.prevent="setCategory(category)"
          >
            <div>{{ category.name }}</div>
          </div>
        </div>
      </div>

      <div class="root__item" v-if="isLoad">
        <transition name="list-complete" class="list-complete" tag="section">
          <Photoswipe class="list-complete-item row">
            <img
              class="list-complete-img img col-sm-6 col-md-4 col-lg-3 col-xxl-2"
              v-for="item in selecetList"
              :key="item.id"
              :src="item.imgURL"
              v-pswp="item.imgURL"
              ref="listImg"
            />
          </Photoswipe>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import _ from "lodash";
import gsap from "gsap";
import { imageList, category } from "../store/data";

export default {
  data() {
    return {
      distributeByPosition: [],
      currentTag: ["all"],
      categories: [],
      imageList: [],
      selecetList: [],
      selectedImage: {},
      isLoad: false,
      currentCategory: null,
    };
  },
  async fetch() {
    this.categories = await category;
    this.imageList = await _.shuffle(imageList);
    this.selecetList = this.imageList;
  },
  mounted() {
    this.gsapAnimate();
  },
  updated() {
    this.gsapAnimate();
  },
  methods: {
    gsapAnimate() {
      this.isLoad = true;
      const tl = gsap.timeline();

      tl.staggerFrom(".list-complete-img", 0.5, {
        y: 100,
        scale: 0.5,
        opacity: 0,
        stagger: distributeByPosition({
          amount: 1.5,
          axis: "x",
        }),
      });

      function distributeByPosition(vars) {
        var ease = vars.ease,
          from = vars.from || 0,
          base = vars.base || 0,
          axis = vars.axis,
          ratio = { center: 0.5, end: 1 }[from] || 0,
          distances;
        return function (i, target, a) {
          var l = a.length,
            originX,
            originY,
            x,
            y,
            d,
            j,
            minX,
            maxX,
            minY,
            maxY,
            positions;
          if (!distances) {
            distances = [];
            minX = minY = Infinity;
            maxX = maxY = -minX;
            positions = [];
            for (j = 0; j < l; j++) {
              d = a[j].getBoundingClientRect();
              x = (d.left + d.right) / 2; //based on the center of each element
              y = (d.top + d.bottom) / 2;
              if (x < minX) {
                minX = x;
              }
              if (x > maxX) {
                maxX = x;
              }
              if (y < minY) {
                minY = y;
              }
              if (y > maxY) {
                maxY = y;
              }
              positions[j] = { x: x, y: y };
            }
            originX = isNaN(from)
              ? minX + (maxX - minX) * ratio
              : positions[from].x || 0;
            originY = isNaN(from)
              ? minY + (maxY - minY) * ratio
              : positions[from].y || 0;
            maxX = 0;
            minX = Infinity;
            for (j = 0; j < l; j++) {
              x = positions[j].x - originX;
              y = originY - positions[j].y;
              distances[j] = d = !axis
                ? Math.sqrt(x * x + y * y)
                : Math.abs(axis === "y" ? y : x);
              if (d > maxX) {
                maxX = d;
              }
              if (d < minX) {
                minX = d;
              }
            }
            distances.max = maxX - minX;
            distances.min = minX;
            distances.v = l = vars.amount || vars.each * l || 0;
            distances.b = l < 0 ? base - l : base;
          }
          l = (distances[i] - distances.min) / distances.max;
          return distances.b + (ease ? ease.getRatio(l) : l) * distances.v;
        };
      }
    },
    handleClick() {
      const pswp = this.$Pswp.open({
        items: [
          {
            src:
              "https://farm4.staticflickr.com/3902/14985871946_24f47d4b53_h.jpg",
          },
        ],
      });

      pswp.listen("close", () => {
        console.log("emitted close");
      });
    },
    shuffle: function () {
      this.imageList = _.shuffle(this.imageList);
    },
    filter: function (tag) {
      this.currentTag = tag;
    },
    setCategory(category) {
      this.isLoad = false;
      this.currentCategory = category.name;

      if (category.name === "All") {
        this.selecetList = _.shuffle(this.imageList);

        return;
      }

      this.selecetList = _.shuffle(
        this.imageList.filter((item) => item.catId == category.id)
      );
    },
  },
};
</script>

<style scoped>
loading {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #ffffff90;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loading__item {
  font-size: 30px;
  color: #000;
}

.root {
  display: flex;
}
.root__item {
  display: flex;
}
.root__item--auto {
  position: sticky;
  left: 0;
  top: 0;
}
.root__item--auto {
  width: auto;
}

.img {
  filter: grayscale(100%);
  transition: 0.2s ease-in;
}
.img:hover {
  filter: grayscale(0%);
}

.items {
  display: flex;
  flex-direction: column;
  margin-left: 20px;
}
.items__item {
  margin: 10px;

  width: 150px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.active,
.items__item:hover {
  color: aqua;
}
.list-complete {
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
}
.list-complete-item {
  margin-left: 60px;
  margin-right: 60px;
  margin-top: 20px;
  transition: transform 1s;
}
.list-complete-img {
  object-fit: cover;
  padding: 10px;
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active for <2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: relative;
}

@media (max-width: 850px) {
  .items {
    display: flex;
    flex-direction: column;
    margin-left: 0;
  }
  .items__item {
    width: 40px;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .items__item div {
    transform: rotateZ(-90deg);
  }
  .list-complete {
    display: flex;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .list-complete-item {
    transition: transform 1s;
    padding: 10px;
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>

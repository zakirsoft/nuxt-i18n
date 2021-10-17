<template>
  <div class="p-3 md:5">
    <div>
      <h4>Currently in Production</h4>
      <!-- <p>{{ cardsSection.snippet }}</p> -->
    </div>
    <div class="grid grid-cols-1 align-baseline content-center md:grid-cols-2">
      <BikeCardNow v-for="card in cards" :key="card.id" :card="card" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["cardsSection"],
  data() {
    return {
      cards: [
        {
          id: 30,
          name: "scooter",
          title: "Scooter",
          category: "Folding",
          productPath: "",
          snippet:
            "The MCS IV, an even lighter version of the MCS III with aluminium frame and suspension fork will be available in Spring 2008.",
          description:
            "The MCS IV, an even lighter version of the MCS III with aluminium frame and suspension fork will be available in Spring 2008.",
          image: "scooter.png",
          path: "scooter-white.png",
          pics: [
            {
              path: "scooter-white.png",
            },
            {
              path: "scooter-white.png",
            },
            {
              path: "scooter/scooter-red.png",
            },
            {
              path: "scooter/scooter-black.png",
            },
          ],
        },
        {
          id: 40,
          title: "Truck",
          name: "truck",
          category: "Cargo",
          snippet:
            "Aluminium alloy, 300L with Slidedoor and Slamlock lockable in RAL colour of request",
          description: "",
          year: "",
          image: "truck.png",
          pics: [
            {
              path: "scooter.png",
            },
            // {
            //   path: "~/images/products/scooter/scooter-white.png"
            //     },
            //      {
            //   path: "~/images/products/scooter/scooter-black.png"
            // }
          ],
        },
        {
          id: 32,
          title: "Tractor",
          name: "tractor",
          category: "Cargo",
          snippet:
            "500L mit Hingedoor and Slamlock lockable in RAL colour of request",
          description: "",
          year: "",
          image: "tractor.png",
          pics: [
            {
              path: "scooter.png",
            },
            // {
            //   path: "~/images/products/scooter/scooter-white.png"
            //     },
            //      {
            //   path: "~/images/products/scooter/scooter-black.png"
            // }
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>

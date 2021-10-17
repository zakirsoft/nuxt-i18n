import { BikeCardSections } from "./bikes.js";
export const state = () => ({
  authModalShow: false,
  currentIndex: 0,
  isSideBarActive: false,
  isNavOpen: false,
  mainSectionNumber: 0,
  slide: 1,
  color: "red",
  hoveredProduct: 0,
  showingProduct: null,
  loadingEnable: true,
  openContactModal: false,
  cards: [
    {
      title: "Truck I",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      img: "AfrikaTruck.jpg",
    },
    {
      title: "Fahrradi",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      img: "Fahrradi.png",
    },

    {
      title: "Vello",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      img: "vello.jpg",
    },
    {
      title: "Bug-e",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      img: "buge.png",
    },
  ],
});

export const getters = {
  currentIndex: (state) => {
    return state.currentIndex;
  },
  cards: (state) => {
    return state.cards;
  },
  sideBarStatus(state) {
    return state.isSideBarActive;
  },
  getContactModal(state) {
    return state.openContactModal;
  },
  getProductById(state, id) {
    return state.items.filter((product) => product.id == id);
  },
};

export const mutations = {
  nextIndex: (state) => {
    if (state.currentIndex < state.cards.length - 1) state.currentIndex++;
  },
  toggleAuthModal: (state) => {
    state.authModalShow = !state.authModalShow;
  },
  prevIndex: (state) => {
    if (state.currentIndex > 0) state.currentIndex--;
  },
  toggleContact(state) {
    state.openContactModal = !state.openContactModal;
  },
  toggleSidebar(state) {
    state.isSideBarActive = !state.isSideBarActive;
  },
  changeSlide(state, slide) {
    state.slide = slide;
    console.log(state.slide);
  },
  changeMainSectionNumber(state, num) {
    state.mainSectionNumber = num;
  },
  changeColor(state, color) {
    state.color = color;
  },
  setIsNavOpen(yesno) {
    state.isNavOpen = yesno;
  },

  toggleNav() {
    state.isNavOpen = !state.isNavOpen;
  },
  setShowingProduct(state, product) {
    state.showingProduct = product;
  },
  setLoadingEnable(state, payload) {
    state.loadingEnable = payload;
  },
};

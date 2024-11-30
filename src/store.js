import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cards: [
      {
        id: 1,
        image: require("@/assets/cardsImages/1.jpg"),
        title: "«Рождение Венеры» Сандро Боттичелли",
        price: "2 000 000 $",
        discountPrice: "1 000 000 $",
        isSold: false,
      },
      {
        id: 2,
        image: require("@/assets/cardsImages/2.jpg"),
        title: "«Тайная вечеря» Леонардо да Винчи",
        price: "3 000 000 $",
        discountPrice: null,
        isSold: false,
      },
      {
        id: 3,
        image: require("@/assets/cardsImages/3.jpg"),
        title: "«Сотворение Адама» Микеланджело",
        price: "6 000 000 $",
        discountPrice: "5 000 000 $",
        isSold: false,
      },
      {
        id: 4,
        image: require("@/assets/cardsImages/4.jpg"),
        title: "«Урок анатомии» Рембрандт",
        price: "2000 ₽",
        discountPrice: null,
        isSold: true,
      },
    ],
    searchQuery: "", // добавляем searchQuery в state
    cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
  },
  mutations: {
    setCards(state, newCards) {
      state.cards = newCards;
    },
    setSearchQuery(state, query) {
      state.searchQuery = query;
    },
    addToCart(state, cardId) {
      if (!state.cartItems.includes(cardId)) {
        state.cartItems.push(cardId);
      }
    },
    removeFromCart(state, cardId) {
      state.cartItems = state.cartItems.filter((id) => id !== cardId);
    },
  },
  actions: {
    updateCards({ commit }, newCards) {
      commit("setCards", newCards);
    },
    updateSearchQuery({ commit }, query) {
      commit("setSearchQuery", query);
    },
    addToCart({ commit, state }, cardId) {
      commit("addToCart", cardId);
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart({ commit, state }, cardId) {
      commit("removeFromCart", cardId);
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
  getters: {
    getCards: (state) => state.cards,
    getSearchQuery: (state) => state.searchQuery,
    getCartItems: (state) => state.cartItems,
  },
});

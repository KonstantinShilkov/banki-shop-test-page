import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cards: [
      {
        id: 1,
        images: [
          require("@/assets/cardsImages/1.jpg"),
          require("@/assets/cardsImages/slide-1-1.jpg"),
          require("@/assets/cardsImages/slide-1-2.jpg"),
          require("@/assets/cardsImages/slide-1-3.jpg"),
        ],
        title: "«Рождение Венеры» Сандро Боттичелли",
        details:
          "Картина выдающегося итальянского живописца периода кватроченто (раннего итальянского Возрождения) флорентийской школы Сандро Боттичелли. Написана темперой на холсте, а не на дереве, как обычно, из-за её большого размера (172,5 × 278,5 см) между 1482 и 1486 годами. ",
        price: "2 000 000 $",
        discountPrice: "1 000 000 $",
        isSold: false,
      },
      {
        id: 2,
        images: [
          require("@/assets/cardsImages/2.jpg"),
          require("@/assets/cardsImages/slide-2-1.png"),
          require("@/assets/cardsImages/slide-2-2.jpeg"),
          require("@/assets/cardsImages/slide-2-3.png"),
        ],
        title: "«Тайная вечеря» Леонардо да Винчи",
        details:
          "Монументальная роспись работы Леонардо да Винчи, изображающая сцену последней трапезы Христа со своими учениками. Создана в 1495—1498 годы в доминиканском монастыре Санта-Мария-делле-Грацие в Милане.",
        price: "3 000 000 $",
        discountPrice: null,
        isSold: false,
      },
      {
        id: 3,
        images: [
          require("@/assets/cardsImages/3.jpg"),
          require("@/assets/cardsImages/slide-3-1.webp"),
          require("@/assets/cardsImages/slide-3-2.jpeg"),
          require("@/assets/cardsImages/slide-3-3.jpeg"),
        ],
        title: "«Сотворение Адама» Микеланджело",
        details:
          "Фреска написанная около 1511 года. Фреска является четвёртой из девяти центральных композиций потолка Сикстинской капеллы, посвящённых девяти сюжетам книги Бытия. Фреска иллюстрирует эпизод:'И сотворил Бог человека по образу Своему' ",
        price: "6 000 000 $",
        discountPrice: "5 000 000 $",
        isSold: false,
      },
      {
        id: 4,
        images: [
          require("@/assets/cardsImages/4.jpg"),
          require("@/assets/cardsImages/slide-4-1.jpeg"),
          require("@/assets/cardsImages/slide-4-2.jpeg"),
          require("@/assets/cardsImages/slide-4-3.jpeg"),
        ],
        title: "«Урок анатомии» Рембрандт",
        details:
          " Картина написанная в 1632 году. Центральная фигура картины — доктор Николас Тульп, который показывает собравшимся устройство мускулатуры руки человека. Труп — Адриаан Адриаанс по прозвищу Арис Киндт (Малыш). В своё время он тяжело ранил в Утрехте тюремного охранника и в Амстердаме избил и ограбил человека. За это 31 января 1632 года он был повешен и передан для публичной аутопсии амстердамской гильдии хирургов.",
        price: "2000 ₽",
        discountPrice: null,
        isSold: true,
      },
    ],
    searchQuery: "",
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

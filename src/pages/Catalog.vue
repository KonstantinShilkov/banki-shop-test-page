<template>
  <div class="catalogContainer">
    <div class="cardsContainer">
      <div class="cardsContainerTittle">
        <h1>Картины эпохи Возрождения</h1>
      </div>
      <div class="cardsBox">
        <div
          class="card"
          v-for="card in filteredCards"
          :key="card.id"
          :class="{ soldCard: card.isSold }"
        >
          <div class="cardImage" @click="openModal(card)">
            <img :src="card.images[0]" :alt="card.title" class="cardImage" />
          </div>
          <div class="cardTittle" @click="openModal(card)">
            <h2>{{ card.title }}</h2>
          </div>
          <div
            class="priceButtonBox"
            :class="{ priceButtonBoxSold: card.isSold }"
          >
            <div class="priceBox">
              <div v-if="card.isSold" class="soldText">Продана на аукционе</div>
              <div v-else>
                <div
                  :class="{ cardPrice: true, cancelPrice: card.discountPrice }"
                >
                  {{ card.price }}
                </div>
                <div v-if="card.discountPrice" class="cardDiscountPrice">
                  <h3>{{ card.discountPrice }}</h3>
                </div>
              </div>
            </div>
            <div class="cardButton" v-if="!card.isSold">
              <button
                class="cartButton"
                :class="{ inCart: isInCart(card.id) }"
                :disabled="isLoading === card.id"
                @click="handleCartAction(card.id)"
              >
                <template v-if="isLoading === card.id">
                  <span class="loader"></span>
                </template>
                <template v-else-if="isInCart(card.id)">
                  <img src="@/assets/icons/feather_check.svg" />
                  В корзине
                </template>
                <template v-else> Купить </template>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <template v-if="isCardMobileView">
      <CardInfoReduced
        :card="selectedCard"
        :isVisible="isModalVisible"
        @close="closeModal"
      />
    </template>
    <template v-else>
      <CardInfo
        :card="selectedCard"
        :isVisible="isModalVisible"
        @close="closeModal"
      />
    </template>
  </div>
</template>

<script>
import CardInfo from "@/components/CardInfo.vue";
import CardInfoReduced from "@/components/CardInfoReduced.vue";

export default {
  name: "CatalogPage",
  components: {
    CardInfo,
    CardInfoReduced,
  },
  data() {
    return {
      isLoading: null,
      isModalVisible: false,
      selectedCard: null,
    };
  },
  computed: {
    cards() {
      return this.$store.getters.getCards;
    },
    filteredCards() {
      const searchQuery = this.$store.state.searchQuery.toLowerCase();
      return this.cards.filter((card) =>
        card.title.toLowerCase().includes(searchQuery)
      );
    },
    isCardMobileView() {
      return this.$store.getters.isCardMobileView;
    },
  },
  mounted() {
    this.updateViewSize();
    window.addEventListener("resize", this.updateViewSize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateViewSize);
  },
  methods: {
    isInCart(cardId) {
      return this.$store.getters.getCartItems.includes(cardId);
    },
    handleCartAction(cardId) {
      this.isLoading = cardId;
      setTimeout(() => {
        if (this.isInCart(cardId)) {
          this.$store.dispatch("removeFromCart", cardId);
        } else {
          this.$store.dispatch("addToCart", cardId);
        }
        this.isLoading = null;
      }, 2000);
    },
    openModal(card) {
      this.selectedCard = card;
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
      this.selectedCard = null;
    },
    updateViewSize() {
      const isCardMobileView = window.innerWidth <= 800;
      this.$store.dispatch("updateIsCardMobileView", isCardMobileView);
    },
  },
};
</script>

<style scoped></style>

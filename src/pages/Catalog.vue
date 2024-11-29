<template>
  <div class="catalogContainer">
    <div class="cardsContainer">
      <div class="cardsContainerTittle"><h1>Картины эпохи Возрождения</h1></div>
      <div class="cardsBox">
        <div
          class="card"
          v-for="card in cards"
          :key="card.id"
          :class="{ soldCard: card.isSold }"
        >
          <div class="cardImage">
            <img :src="card.image" :alt="card.title" class="cardImage" />
          </div>
          <div class="cardTittle">
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
                  :class="{
                    cardPrice: true,
                    cancelPrice: card.discountPrice,
                  }"
                >
                  {{ card.price }}
                </div>
                <div v-if="card.discountPrice" class="cardDiscountPrice">
                  <h3>{{ card.discountPrice }}</h3>
                </div>
              </div>
            </div>

            <div class="cardButton" v-if="!card.isSold">
              <button class="cartButton">Купить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CatalogPage",
  data() {
    return {
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
          title: "«Тайная вечеря»  Леонардо да Винчи",
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
          title: "«Урок анатомии»  Рембрандт",
          price: "2000 ₽",
          discountPrice: null,
          isSold: true,
        },
      ],
    };
  },
  methods: {
    handleBuy(card) {
      console.log(
        `Покупка: ${card.title} за ${card.discountPrice || card.price}`
      );
    },
  },
};
</script>

<style>
.catalogContainer {
  display: flex;
  justify-content: center;
  width: 100%;
}

.cardsContainer {
  display: flex;
  flex-direction: column;
}
</style>

<template>
  <div class="cardInfoModal" v-if="isVisible" @click.self="closeModal">
    <div class="cardInfo">
      <div class="cardInfoImgTittlePrice">
        <div class="cardInfoImage">
          <!-- Кнопка переключения назад -->
          <span class="arrow-icon left" @click="prevImage">❮</span>
          <!-- Контейнер для изображения -->
          <div class="image-container">
            <img :src="currentImage" :alt="card.title" />
          </div>
          <!-- Кнопка переключения вперед -->
          <span class="arrow-icon right" @click="nextImage">❯</span>
        </div>
        <div class="cardInfoTittle">
          <h2>{{ card.title }}</h2>
        </div>
        <div class="priceBox">
          <div v-if="card.isSold" class="soldText">Продана на аукционе</div>
          <div v-else>
            <div :class="{ cardPrice: true, cancelPrice: card.discountPrice }">
              {{ card.price }}
            </div>
            <div v-if="card.discountPrice" class="cardDiscountPrice">
              <h3>{{ card.discountPrice }}</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="cardInfoDetails">
        <p class="cardInfoDescription">{{ card.details }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card: Object,
    isVisible: Boolean,
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  computed: {
    currentImage() {
      return this.card.images[this.currentIndex];
    },
  },
  watch: {
    isVisible(newVal) {
      if (newVal) {
        this.currentIndex = 0;
      }
    },
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    prevImage() {
      if (this.currentIndex === 0) {
        this.currentIndex = this.card.images.length - 1;
      } else {
        this.currentIndex--;
      }
    },
    nextImage() {
      if (this.currentIndex === this.card.images.length - 1) {
        this.currentIndex = 0;
      } else {
        this.currentIndex++;
      }
    },
  },
};
</script>

<style scoped>
.cardInfoModal {
    display: flex;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
    z-index: 999;
  }
  
  .cardInfo {
    display: flex;
    background-color: #f6f3f3;
    padding: 20px;
    width: 1000px;
    height: 500px;
    box-sizing: border-box;
  }
  
  .cardInfoImgTittlePrice {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  
  .cardInfoImage {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
  }
  
  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 300px; 

    overflow: hidden; 
  }
  
  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: contain; 
    transition: opacity 0.5s ease-in-out; 
  }
  
  .arrow-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 30px;
    color: rgba(213, 213, 213, 0.926);
    user-select: none;
    transition: background 0.3s, transform 0.4s;
  }
  
  .arrow-icon.left {
    left: 20px;
  }
  
  .arrow-icon.right {
    right: 20px;
  }
  
  .arrow-icon:hover {
    transform: translateY(-50%) scale(1.3);
  }
  
  .cardInfoDetails {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    font-size: 18px;
    margin-bottom: 80px;
    margin-left: 20px;
  }
  
  .cardInfoModal .cardInfo {
    cursor: default;
  }
</style>

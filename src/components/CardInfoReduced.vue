<template>
  <div class="cardInfoModal" v-if="isVisible" @click.self="closeModal">
    <div class="cardInfoColumn">
      <div class="cardInfoContent">
        <div class="cardInfoTittle">
          <h2>{{ card.title }}</h2>
        </div>
        <div class="cardInfoImage">
          <span class="arrow-icon left" @click="prevImage">❮</span>
          <div class="image-container">
            <img :src="currentImage" :alt="card.title" />
          </div>
          <span class="arrow-icon right" @click="nextImage">❯</span>
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
        <div class="cardInfoDescription">
          <p>{{ card.details }}</p>
        </div>
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
  
  .cardInfoColumn {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f6f3f3;
    width: 350px;
    height: 400px; 
    box-sizing: border-box;
    padding: 10px;
    border-radius: 10px;
    overflow: hidden;
  }
  
  .cardInfoContent {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow-y: auto; 
  }
  
  .cardInfoTittle {
    margin-bottom: 10px;
    font-size: 16px;
    text-align: center;
  }
  
  .cardInfoImage {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 150px;
    margin-bottom: 10px;
  }
  
  .image-container {
    width: 100%;
    height: 100%;
    padding: 5px;
    box-sizing: border-box;
  }
  
  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
  .arrow-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
    color: rgba(213, 213, 213, 0.926);
    user-select: none;
    transition: background 0.3s, transform 0.4s;
  }
  
  .arrow-icon.left {
    left: 10px;
  }
  
  .arrow-icon.right {
    right: 10px;
  }
  
  .arrow-icon:hover {
    transform: translateY(-50%) scale(1.2);
  }
  
  .priceBox {
    text-align: center;
    margin-bottom: 10px;
  }
  
  .cardInfoDescription {
    font-size: 14px;
    text-align: left;
    color: #343030;
    margin-top: 10px;
    padding-right: 5px;
  }
  
  .cardInfoDescription::-webkit-scrollbar {
    width: 6px;
  }
  
  .cardInfoDescription::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 3px;
  }
  
  .cardInfoDescription::-webkit-scrollbar-thumb:hover {
    background: #aaa;
  }
</style>

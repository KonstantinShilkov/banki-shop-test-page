<template>
  <div class="headerMenuContainer">
    <div v-if="isDesktopView" class="menuLinks">
      <router-link to="/catalog" exact-active-class="router-link-active">
        Каталог
      </router-link>
      <router-link to="/delivery" exact-active-class="router-link-active">
        Доставка
      </router-link>
      <router-link to="/payment" exact-active-class="router-link-active">
        Оплата
      </router-link>
      <router-link to="/contacts" exact-active-class="router-link-active">
        Контакты
      </router-link>
      <router-link to="/about" exact-active-class="router-link-active">
        О Компании
      </router-link>
    </div>

    <div v-else>
      <el-dropdown placement="bottom-start" trigger="click">
        <el-button type="text">
          <i class="el-icon-menu"></i>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              <router-link to="/catalog">Каталог</router-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <router-link to="/delivery">Доставка</router-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <router-link to="/payment">Оплата</router-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <router-link to="/contacts">Контакты</router-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <router-link to="/about">О Компании</router-link>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>

    <div class="searchInput">
      <form @submit.prevent="handleSearch">
        <input
          type="text"
          v-model="searchQuery"
          :placeholder="'Поиск по названию картины'"
        />
        <button type="submit">
          <template v-if="isMobileView">
            <i class="el-icon-search"></i>
          </template>
          <template v-else>Поиск</template>
        </button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "HeaderMenu",
  computed: {
    isDesktopView() {
      return this.$store.getters.isDesktopView;
    },
    isMobileView() {
      return this.$store.getters.isMobileView;
    },
    searchQuery: {
      get() {
        return this.$store.getters.getSearchQuery;
      },
      set(query) {
        this.$store.dispatch("updateSearchQuery", query);
      },
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
    updateViewSize() {
      const isDesktop = window.innerWidth > 1024;
      const isMobile = window.innerWidth <= 560;
      this.$store.dispatch("updateIsDesktopView", isDesktop);
      this.$store.dispatch("updateIsMobileView", isMobile);
    },
  },
};
</script>
<style scoped>
.el-icon-menu {
  font-size: 48px; 
  color: #403432; 
  cursor: default;
}
.el-button{
  cursor: default;
  padding: 0;

}
.el-dropdown-menu {
  font-size: 28px;  
  min-width: 200px; 
  background-color: #fefdfd;
}
</style>

<template>
  <div class="headerMenuContainer">
    <div class="menuLinks">
      <router-link to="/catalog" exact-active-class="router-link-active"
        >Каталог</router-link
      >
      <router-link to="/delivery" exact-active-class="router-link-active"
        >Доставка</router-link
      >
      <router-link to="/payment" exact-active-class="router-link-active"
        >Оплата</router-link
      >
      <router-link to="/contacts" exact-active-class="router-link-active"
        >Контакты</router-link
      >
      <router-link to="/about" exact-active-class="router-link-active"
        >О Компании</router-link
      >
    </div>
    <div class="searchInput">
      <form @submit.prevent="handleSearch">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Поиск по названию картины"
        />
        <button type="submit">Поиск</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderMenu",
  data() {
    return {
      searchQuery: "",
    };
  },
  watch: {
    searchQuery(newQuery) {
      this.$store.dispatch("updateSearchQuery", newQuery);
    },
  },
  methods: {
    handleSearch() {
      this.$store.dispatch("updateSearchQuery", this.searchQuery);
    },
  },
};
</script>
<style></style>

<template>
  <div class="headerMenuContainer">
      <div class="menuLinks">
          <router-link to="/catalog">Каталог</router-link>
          <router-link to="/delivery">Доставка</router-link>
          <router-link to="/payment">Оплата</router-link>
          <router-link to="/contacts">Контакты</router-link>
          <router-link to="/about">О Компании</router-link>
      </div>
      <div class="searchInput">
          <form @submit.prevent="handleSearch"> <!-- Обработка отправки формы -->
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
  name: 'HeaderMenu',
  data() {
      return {
          searchQuery: '', // Переменная для хранения значения поля ввода
      };
  },
  methods: {
      handleSearch() {
          console.log(this.searchQuery); // Вывод введенных данных в консоль
          this.searchQuery = ''; // Очистка поля ввода после отправки
      },
  },
};
</script>

<style>
.headerMenuContainer{
  display: flex;
  align-items: center;
  width: 100%;

}
.menuLinks {
  display: flex;
  gap: 48px;
}

</style>
<template>
  <div class="footerMenuContainer">
    <div v-if="isDesktopView" class="menuLinksFooter">
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
      <el-dropdown placement="top-start" trigger="click">
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

    <div class="phoneLocationContainer">
      <div class="contactPhoneBox">
        <div class="phoneIcon">
          <img src="@/assets/icons/phoneIcon.svg" alt="Phone Icon" />
        </div>
        <div class="phoneNumber">+7 (812) 555-55-55</div>
      </div>
      <div class="locationBox">
        <div class="locationIcon">
          <img src="@/assets/icons/locationIcon.svg" alt="Location Icon" />
        </div>
        <div v-if="isDesktopView" class="address">
          г. Санкт-Петербург, ул. Ефимова, 3
        </div>
        <div v-else class="address">г. СПб, ул. Ефимова, 3</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterNavigation",

  computed: {
    isDesktopView() {
      return this.$store.getters.isDesktopView;
    },
  },
};
</script>

<style>
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

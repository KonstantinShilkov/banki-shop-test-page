<template>
  <div class="footerMenuContainer">
    <div class="menuLinksFooter">
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
    <div class="contactPhoneBox">
      <div class="phoneIcon">
        <img src="@/assets/icons/phoneIcon.svg" alt="Phone Icon" />
      </div>
      <div class="phoneNumber">+7 (812) 555-55-55</div>
    </div>
    <div class="locationBox">
      <div class="locationIcon">
        <img src="@/assets/icons/locationIcon.svg" alt="Phone Icon" />
      </div>
      <div class="address">г. Санкт-Петербург, ул. Ефимова, 3</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterNavigation",
};
</script>
<style></style>

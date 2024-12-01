<template>
  <div id="app" class="mainContainer">
    <div class="headerBar">
      <HeaderBar />
    </div>
    <div class="wrappedContainer">
      <router-view></router-view>
    </div>
    <div class="footerBar">
      <FooterBar />
    </div>
  </div>
</template>

<script>
import HeaderBar from "./components/header/HeaderBar.vue";
import FooterBar from "./components/footer/FooterBar.vue";

export default {
  name: "App",
  components: {
    HeaderBar,
    FooterBar,
  },
};
</script>

<style>
.mainContainer {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  background-color: #f6f3f3;
  height: 100vh;
  min-width: 1320px;

}

.wrappedContainer {
  display: flex;
  height: 100vh;
  padding: 0 30px;
}
</style>

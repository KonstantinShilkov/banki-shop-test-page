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
  width: auto;
  height: auto;
  overflow-x: auto;
  overflow-y: auto;
  background-color: #f6f3f3;
  height: 100vh;
}

.wrappedContainer {
  display: flex;
  /* width: 1920px; */
  height: 100vh;
  padding: 0 30px;
  overflow: visible; 
}
</style>

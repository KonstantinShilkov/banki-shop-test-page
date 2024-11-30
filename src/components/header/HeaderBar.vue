<template>
  <div class="headerMenuMainContainer">
    <HeaderMenu />
  </div>
</template>

<script>
import HeaderMenu from "./HeaderMenu.vue";
export default {
  name: "HeaderBar",
  components: {
    HeaderMenu,
  },
};
</script>

<style>
.headerMenuMainContainer {
  display: flex;
  width: 100%;
}
</style>

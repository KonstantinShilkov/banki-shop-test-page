<template>
  <div class="footerNavContainer"><FooterNavigation /></div>
</template>

<script>
import FooterNavigation from "./FooterNavigation.vue";
export default {
  name: "FooterBar",
  components: {
    FooterNavigation,
  },
};
</script>

<style>
.footerNavContainer{
  display: flex;
  width: 100%;
  justify-content: center; 
  overflow-x: auto; 
  flex-wrap: nowrap;
}
</style>

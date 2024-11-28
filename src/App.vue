<template>
  <div id="app" class="mainContainer">
    <div class="headerBar">
    <HeaderBar />
  </div>
    <div class="wrappedContainer">
      <router-view></router-view> 
    </div>
    <div class="footerBar">
    <FooterBar/>
  </div>
     </div>
</template>

<script>
import HeaderBar from './components/header/HeaderBar.vue'; 
import FooterBar from './components/footer/FooterBar.vue';

export default {
  name: 'App',
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
  /* max-width: 100%;  */
  /* max-height: 100%;  */
  overflow-x: auto;
  overflow-y: auto;
  background-color: #F6F3F3;
}



.wrappedContainer{
  display: flex;
}

  .footerBar{
    display: flex;
  }
</style>
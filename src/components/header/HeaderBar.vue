<template>
    <div class="headerMenuContainer" >
      <HeaderMenu/>
    </div>
  </template>

  <script>
  import HeaderMenu from './HeaderMenu.vue'
  export default {
    name: 'HeaderBar',
    components :{
      HeaderMenu,
    }
  };
  </script>

  <style>
  .headerMenuContainer{
    display: flex;
    width: 100%;
    justify-content: center;
  }
  </style>
<script>
import HeaderComp from './components/HeaderComp.vue';
export default {
  components: { HeaderComp }
}
</script>

<style>
@import "@/assets/global.css";
  body{
    scroll-behavior: smooth;
    font-family: 'Archivo';
  }
</style>

<template>
  <HeaderComp/>
  <main class="">
    <router-view></router-view>
  </main>
  
</template>

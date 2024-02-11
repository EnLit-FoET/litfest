<script>
import HeaderComp from './components/HeaderComp.vue';
export default {
  components: { HeaderComp }
}
</script>

<style>
  body{
    scroll-behavior: smooth;
  }
</style>

<template>
  <HeaderComp/>
  <main class="container">
    <router-view></router-view>
  </main>
  
</template>

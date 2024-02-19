<template>
  <header class="container-fluid">
    <nav>
      <ul>
        <li>
          <router-link to="/"
            ><h2>Lit Fest <sup class="theme1">2024</sup></h2></router-link
          >
        </li>
      </ul>
      <ul>
        <li><a href="#about" class="contrast dissappear">About</a></li>
        <li><a href="#events" class="contrast dissappear">Events</a></li>
        <li :aria-busy="this.loading">
          <router-link
            v-if="!this.loading && !this.loggedIn"
            role="button"
            class="outline contrast"
            to="/register"
            >Login</router-link
          >
          <router-link
            v-else-if="!this.loading && this.loggedIn"
            role="button"
            class="outline contrast"
            to="/dashboard"
            >Dashboard</router-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<style>
@media screen and (max-width: 350px) {
  .dissappear {
    display: none !important;
  }
}
</style>

<script>
export default {
  data() {
    return {
      loading: true,
      loggedIn: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  },
};
</script>

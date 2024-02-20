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
        <li v-if="!this.loading && !loggedIn">
          <router-link
            role="button"
            class="outline contrast"
            to="/register"
            :aria-busy="this.loading"
            >Login</router-link
          >
        </li>
        <li v-else-if="loggedIn">
          <ul>
            <li>
              <router-link
                v-if="this.dashboardOpen"
                role="button"
                class="route-link"
                to="/"
                @click="toggleDashboard()"
                >Home</router-link
              >
              <router-link
                v-if="!this.dashboardOpen"
                role="button"
                class="route-link"
                to="/dashboard"
                @click="toggleDashboard()"
                >Dashboard</router-link
              >
            </li>
            <li v-if="!this.loading">
              <router-link
                role="button"
                class="outline contrast"
                :aria-busy="this.loading"
                to="/"
                @click="logout()"
                >Logout</router-link
              >
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style>
.route-link {
  background-color: #000000;
  border: none;
}
.route-link:hover {
  text-decoration: underline;
}

@media screen and (max-width: 350px) {
  .dissappear {
    display: none !important;
  }
}
</style>

<script>
  import { ref } from "vue";
  import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

  let auth;
export default {
  data() {
    return {
      loading: true,
      dashboardOpen: ref(true),
      loggedIn: ref(false),
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
    auth = getAuth();
    onAuthStateChanged(auth, (user)=>{
      if(user){
        this.loggedIn = true;
        this.dashboardOpen = true;
      }else{
        this.loggedIn = false;
      }
      console.log(this.loggedIn);
    });
  },
  methods: {
    toggleDashboard() {
      this.dashboardOpen = !this.dashboardOpen;
    },
    logout() {
      signOut(auth);
    },
  },
};
</script>


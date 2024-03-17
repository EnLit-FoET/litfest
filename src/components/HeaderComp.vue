<template>
  <header class="container-fluid">
    <nav>
      <ul>
        <li>
          <router-link to="/" class="logo"
            ><h2>Lit Fest <sup class="theme1">2024</sup></h2></router-link
          >
        </li>
      </ul>
      <ul :aria-busy="this.loading">
        <li v-if="!loggedIn && !loading">
          <router-link
            role="button"
            class="outline contrast"
            to="/register"
            >Login</router-link
          >
        </li>
        <li v-else-if="loggedIn">
          <ul v-if="!this.loading">
            <li>
              <router-link
                to="/dashboard"
              >
              <img :src="user.photoURL" height="35" width="35" style="object-fit: cover;border-radius: 50%;"/>
              </router-link>
            </li>
            <li>
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

.logo:hover{
  text-decoration: none;
}
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
  import {auth} from '@/utils'
  export default {
  data() {
    return {
      loading: true,
      loggedIn: false,
      user: null
    };
  },
  created() {
    auth.onAuthStateChanged((user)=>{
      if(user){
        this.loggedIn = true;
        this.user = user;
      }else{
        this.loggedIn = false;
      }
      this.loading= false;
    });
  },
  methods: {
    logout() {
      auth.signOut();
    },
  },
};
</script>


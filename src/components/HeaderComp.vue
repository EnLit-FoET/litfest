<template>
  <header class="container-fluid navbar" :class="{ 'background-1': isBackground1, 'background-2': isBackground2 }">
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
          <router-link role="button" class="outline contrast" to="/register"
            >Login</router-link
          >
        </li>
        <li v-else-if="loggedIn">
          <ul v-if="!this.loading">
            <li>
              <router-link to="/" style="color: #fff !important"
                >Home
              </router-link>
            </li>
            <li>
              <router-link to="/timeline" style="color: #fff !important"
                >Schedule
              </router-link>
            </li>
            <li>
              <router-link to="/sponsor" style="color: #fff !important"
                >Sponsors
              </router-link>
            </li>
            <li>
              <router-link to="/dashboard">
                <img
                  :src="user.photoURL"
                  height="35"
                  width="35"
                  style="object-fit: cover; border-radius: 50%"
                />
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
.navbar {
  position: sticky;
  top: 0;
  z-index: 999;
}

.background-1 {
  background-color: #13171f00; 
}

.background-2 {
  background-color: #13171f2f; 
  /* border-bottom: 1px solid rgba(0, 128, 128, 0.5); */
  box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.2);
   backdrop-filter: blur(15px);
}

.logo:hover {
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
import { auth } from "@/utils";
export default {
  data() {
    return {
      loading: true,
      loggedIn: false,
      user: null,
      isBackground1: false,
      isBackground2: false,
    };
  },
  created() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.loggedIn = true;
        this.user = user;
      } else {
        this.loggedIn = false;
      }
      this.loading = false;
    });
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    logout() {
      auth.signOut();
    },
    handleScroll() {
  const position = window.scrollY;

  if (position > 100) {
    this.isBackground1 = false;
    this.isBackground2 = true;
  } else {
    this.isBackground1 = true;
    this.isBackground2 = false;
  }
  
  // Reset background colors when back to initial position
  if (position === 0) {
    this.isBackground1 = false;
    this.isBackground2 = false;
  }
},
  },
};
</script>

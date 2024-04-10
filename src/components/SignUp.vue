<template>
  <LoaderComp v-if="loading" />
  <div class="container" v-else>
    <div style="text-align: center;">
      <hgroup style="text-align: left;">
        <h1>Get Lit</h1>
        <h2>Sign up now and dive into this extravaganza</h2>
      </hgroup>
      <button @click="handleGoogleLogin()" class="btn">Sign In With Google</button>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import { auth } from "@/utils";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import LoaderComp from "./LoaderComp.vue";

export default {
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    handleGoogleLogin(){
      this.loading = true;
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider).then((result)=>{
        console.log(result.user);
        router.push("/dashboard");
      }).catch((error) =>{
        console.log(error.message);
      })
      .finally(() => {
        this.loading = false;
      });
    }
  },
  components: {
    LoaderComp,
  },
  created() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        router.push("/dashboard");
      }
    });
  },
};
</script>

<style scoped>
button{
  width : 100%;
}
.container{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}

</style>

<template>
  <div class="googleLogin">
    <div id="id">
      <button @click="handleGoogleLogin()" class="btn">Sign In With Google</button>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default {
  methods: {
    handleGoogleLogin(){
      const provider = new GoogleAuthProvider();
      signInWithPopup(getAuth(), provider).then((result)=>{
        console.log(result.user);
        router.push("/dashboard");
      }).catch((error) =>{
        console.log(error.message);
      })
    }
  },
};
</script>

<style>
.googleLogin {
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
#id {
  width: 50%;
  height: 90%;
  border: 3px solid var(--theme1);
  display: flex;
  align-items: center;
  justify-content: center;
}

@media screen and (max-width: 800px) {
  #id {
    width: 70%;
  }
}
</style>

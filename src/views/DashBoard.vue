<template>
    <div class="container" :aria-busy="this.loading">
        <h1>Dashboard</h1>
        <div v-if="!loading">
            <p v-if="this.user"> <img :src="this.user.photoURL" alt=""> Welcome {{user.displayName}}</p>
        </div>
        
    </div>
</template>
<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";
export default{
    name: "DashBoard",
    data(){
        return{
            user: null,
            loading: true
        }
    },
    created(){
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                this.$router.push("/");
            }
            else{
                this.user = user;
                console.log(user)
                this.loading = false;
            }
        });
    }
}
</script>
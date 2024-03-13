<template>
    <div class="container" :aria-busy="this.loading">
        <div v-if="this.loading">
            <p>Loading...</p>
        </div>
        <div v-else>
            <RegisterForm v-if="!this.registered"/>
            <div v-else>
                <h1>Dashboard</h1>
                <p>Registered</p>
                <p>Name: {{this.userData.name}}</p>
                <p>College: {{this.userData.college}}</p>
                <p>Year: {{this.userData.year}}</p>
                <p>Phone: {{this.userData.phone}}</p>
            </div>
        </div>
    </div>
</template>
<script>
import RegisterForm from '@/components/RegisterForm.vue';
import { auth,db } from '@/utils';
import { getDoc, collection, doc } from 'firebase/firestore';
export default{
    name: "DashBoard",
    data(){
        return{
            user: null,
            userData: null,
            registered: false,
            loading: true
        }
    },
    components: {
        RegisterForm
    },
    created(){
        let usersDb = collection(db, "users");
        auth.onAuthStateChanged((user) => {
            if (!user) {
                this.$router.push("/");
            }
            else{
                this.user = user;
                getDoc(doc(usersDb, user.email)).then((doc) => {
                    if (doc.exists()) {
                        this.registered = true;
                        this.userData = doc.data();
                    }
                    this.loading = false;
                });
            }
        });
    }
}
</script>

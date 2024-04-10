<template>
    <LoaderComp v-if="this.loading"/>
    <div class="container" v-else-if="this.allowed">
        <h1>Register</h1>
        <form @submit.prevent="registerUser">
            <div>
                <label for="email">Email address</label>
                <input type="email" id="email" v-model="email" required readonly>
            </div>
            <div>
                <label for="name">Name</label>
                <input type="text" id="name" v-model="name" required>
            </div>
            <div>
                <label for="college">College</label>
                <select v-model="college" required>
                    <option v-for="college in collegeList" :key="college" :value="college">{{ college }}</option>
                </select>
            </div>
            <div>
                <label for="year">Year</label>
                <select v-model="year" required>
                    <option value="1st">1st Year</option>
                    <option value="2nd">2nd Year</option>
                    <option value="3rd">3rd Year</option>
                    <option value="4th">4th Year</option>
                    <option value="5th">5th Year</option>
                </select>
            </div>
            <div>
                <label for="phone">Phone</label>
                <input type="text" id="phone" v-model="phone" required minlength="10" maxlength="10">
            </div>
            <button type="submit" class="btn">Register</button>
        </form>
    </div>
    <div v-else>
        <h1>Registration is closed</h1>
        <h4>See you at the event!</h4>
    </div>
</template>

<script>
    import { auth,db } from "@/utils"
    import { collection, setDoc, doc, getDoc } from "firebase/firestore";
import LoaderComp from "./LoaderComp.vue";
    export default{
        data(){
            return{
                email: "",
                name : "",
                college : "",
                year : "",
                phone : "",
                collegeList : [],
                allowed: false,
                loading : true
            }
        },
        created(){
            let varDoc = doc(collection(db, "config"), "variables");
            getDoc(varDoc).then((doc) => {
                if (doc.exists()) {
                    this.allowed = doc.data().register;
                }
            })
            .finally(() => {
                this.loading = false;
            });
        },
        mounted(){
            auth.onAuthStateChanged((user) => {
                if (user) {
                    this.email = user.email;
                    this.name = user.displayName;
                }
            });
            let configDb = collection(db, "config");
            let docRef = doc(configDb, "form-list");
            getDoc(docRef).then((doc) => {
                if (doc.exists()) {
                    this.collegeList = doc.data().colleges;
                }
            });
        },
        methods:{
            async registerUser(){
                this.loading = true;
                if(!this.allowed){
                    this.loading = false;
                    return;
                }
                let usersDb = collection(db, "users");
                let user = auth.currentUser;
                let userData = {
                    email: this.email,
                    name: this.name,
                    college: this.college,
                    year: this.year,
                    phone: this.phone,
                    photo : user.photoURL,
                    events :[]
                }
                await setDoc(doc(usersDb, user.email), userData);
                this.$emit("register")
                this.loading=false
            }
        },
        components : {
            LoaderComp
        }
    }
</script>
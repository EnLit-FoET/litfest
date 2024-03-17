<template>
    <div class="container" :aria-busy="this.loading">
        <div v-if="this.loading">
            <p>Loading...</p>
        </div>
        <div v-else>
            <RegisterForm v-if="!this.registered"/>
            <div v-else>
                <h1>Welcome, {{ this.userData.name }}</h1>
                <article v-if="this.isEventLive && this.isRegforcurrentEvent">
                    <header><GreenDot/> Event is happening</header>
                    <hgroup>
                        <h5>{{ this.liveEvent.event_name }}</h5>
                        <p>{{ this.liveEvent.timing }}</p>
                    </hgroup>
                    <p v-if="this.liveEvent.notice">{{ this.liveEvent.notice }}</p>
                    <footer v-if="this.liveEvent.submissions">
                        <fieldset role="group" v-if="!this.submission.uploaded">
                            <input name="submissions-file" id="event_submission" type="file" placeholder="Submissions are open. Submit now." />
                            <input type="submit" value="Submit" @click="this.uploadFile" :aria-busy="this.submission.loading" :disabled="this.submission.loading"/>
                        </fieldset>
                        <p v-else>
                            <a :href="this.submission.fileURL" target="_blank">View your submission</a>
                        </p>
                    </footer>
                </article>
                <div class="grid" style="position :relative">
                    <div v-if="this.unRegisteredEvents.length>0">
                        <h4>Register for more events</h4>
                        <ul>
                            <li v-for="event in this.unRegisteredEvents" :key="event.event_id">
                                <article>
                                    <header>{{ event.name }}</header>
                                    <p>{{ event.description }}</p>
                                    <footer>
                                        <button @click="this.registerForEvent(event.event_id)">Register</button>
                                    </footer>
                                </article>
                            </li>
                        </ul>
                    </div>
                    <div style="position: static">
                        <h3>Your Registration Details</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Email</td>
                                    <td>{{ this.userData.email }}</td>
                                </tr>
                                <tr>
                                    <td>Name</td>
                                    <td>{{ this.userData.name }}</td>
                                </tr>
                                <tr>
                                    <td>College</td>
                                    <td>{{ this.userData.college }}</td>
                                </tr>
                                <tr>
                                    <td>Year</td>
                                    <td>{{ this.userData.year }}</td>
                                </tr>
                                <tr>
                                    <td>Phone</td>
                                    <td>{{ this.userData.phone }}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div v-if="this.userEvents.length>0">
                            <h4>Registered Events</h4>
                            <ul>
                                <li v-for="event in this.userEvents" :key="event.event_id">
                                    <article>
                                        <header>{{ event.name }}</header>
                                        <p>{{ event.description }}</p>
                                    </article>
                                </li>
                            </ul>
                        </div>
                        <div v-else>
                            <p>You have not registered for any events yet.</p>
                        </div>
                        <div v-if="this.userData.submissions">
                            <h4>Your Submissions</h4>
                            <ul>
                                <li v-for="submission in this.userData.submissions" :key="submission.id">
                                    <article>
                                        <header>{{ submission.event_id }}</header>
                                        <p>{{ submission.time }}</p>
                                        <footer>
                                            <a :href="submission.fileURL" target="_blank">View your submission</a>
                                        </footer>
                                    </article>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import GreenDot from '@/components/GreenDot.vue';
import RegisterForm from '@/components/RegisterForm.vue';
import { auth,db,storage } from '@/utils';
import { getDoc, getDocs, collection, doc, setDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
export default{
    name: "DashBoard",
    data(){
        return{
            user: null,
            userData: null,
            registered: false,
            events : [],
            loading: true,
            isEventLive: false,
            liveEvent : null,
            submission : {
                fileURL : null,
                fileRef : null,
                loading : false,
                uploaded : false
            }
        }
    },
    components: {
        RegisterForm,
        GreenDot
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
        this.getEvents();
    },
    computed: {
        userEvents(){
            return this.events.filter((event) => {
                return this.userData.events.indexOf(event.event_id)!=-1;
            });
        },
        unRegisteredEvents(){
            return this.events.filter((event) => {
                return this.userData.events.indexOf(event.event_id)==-1;
            });
        },
        isRegforcurrentEvent(){
            return this.userData.events.indexOf(this.liveEvent.event_id)!=-1;
        }
    },
    methods : {
        getEvents(){
            let eventsDb = collection(db, "events");
            getDocs(eventsDb).then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    this.events.push(doc.data());
                });
            });
        },
        registerForEvent(event){
            let usersDb = collection(db, "users");
            let userDoc = doc(usersDb, this.user.email);
            let events = this.userData.events;
            events.push(event);
            setDoc(userDoc, {events: events}, {merge: true});
        },
        uploadFile(){
            if(!this.isRegforcurrentEvent){
                return
            }
            this.submission.loading = true;
            let submissionDb = collection(db, "submissions");
            let event = this.liveEvent.event_id;
            let file = document.querySelector("#event_submission").files[0];
            let storageRef = ref(storage, `submissions/${event}/${this.user.email}/${file.name}`);
            uploadBytes(storageRef, file).then(async()=>{
                const url = await getDownloadURL(storageRef);
                let submissionRef = doc(submissionDb, `${event}-${this.user.email}`);
                setDoc(submissionRef, {
                    fileURL: url,
                    time : new Date(),
                    user : doc(collection(db, "users"), this.user.email)
                });
                let usersDb = collection(db, "users");
                let userDoc = doc(usersDb, this.user.email);
                let userSubmissions = this.userData.submissions;
                userSubmissions.push(submissionRef);
                setDoc(userDoc, {submissions: userSubmissions}, {merge: true});

                this.submission.uploaded = true;
                this.submission.fileURL = url;
                this.submission.fileRef = storageRef;
            })
            .catch(e => {
                alert(e.message)
            })
            .finally(()=>{
               this.submission.loading = false;
            })
        }
    }
}
</script>

<template>
    <div class="container" :aria-busy="this.loading">
        <div v-if="this.loading">
            <p>Loading...</p>
        </div>
        <div v-else>
            <RegisterForm v-if="!this.registered" />
            <div v-else>
                <h1>Welcome, {{ this.userData.name }}</h1>
                <article v-if="this.isEventLive && this.isRegforcurrentEvent">
                    <header>
                        <GreenDot /> Event is happening
                    </header>
                    <hgroup>
                        <h5>{{ this.liveEvent.name }}</h5>
                        <p>{{ this.liveEvent.timing }}</p>
                    </hgroup>
                    <p v-if="this.liveEvent.notice">{{ this.liveEvent.notice }}</p>
                    <footer v-if="this.liveEvent.submissions">
                        <fieldset role="group" v-if="!this.submission.uploaded">
                            <input name="submissions-file" id="event_submission" type="file"
                                placeholder="Submissions are open. Submit now." />
                            <input type="submit" value="Submit" @click="this.uploadFile"
                                :aria-busy="this.submission.loading" :disabled="this.submission.loading" />
                        </fieldset>
                        <p v-else>
                            <a :href="this.submission.fileURL" target="_blank" class="btn">View your submission</a>
                        </p>
                    </footer>
                </article>

                <RegisterModal @done="d => this.userData.events.push(d)" :open="this.modalOpen" @close="this.modalOpen=false" :user_email="this.user.email" :event="this.selectedEvent" v-if="this.selectedEvent" />

                <div class="grid" style="position :relative">
                    <div v-if="this.unRegisteredEvents.length > 0">
                        <h4>Register for more events</h4>
                        <ul class="event-list">
                            <li v-for="event in this.unRegisteredEvents" :key="event.id">
                                <article>
                                    <header>{{ event.name }}</header>
                                    <p>{{ event.rule[0].overview[0].des }}</p>
                                    <footer>
                                        <button @click="this.selectedEvent=event;this.modalOpen=true">Register</button>
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
                        <div v-if="this.userEvents.length > 0">
                            <h4>Registered Events</h4>
                            <ul class="event-list">
                                <li v-for="event in this.userEvents" :key="event.id">
                                    <article>
                                        <header>{{ event.name }} <mark>{{ event.confirmed ? 'Confirmed' : 'Pending Approval'  }}</mark></header>
                                        <p>{{ event.rule[0].overview[0].des }}</p>
                                    </article>
                                </li>
                            </ul>
                        </div>
                        <div v-else>
                            <p>You have not registered for any events yet.</p>
                        </div>
                        <div v-if="this.userData.submissions">
                            <h4>Your Submissions</h4>
                            <ul v-if="this.liveEvent">
                                <li v-for="(submission, i) in this.userData.submissions" :key="i">
                                    <SubmissionBox :sub="submission" :liveEvent="this.liveEvent.id"
                                        @submittedForLive="(e) => { this.submission.uploaded = true; this.submission.fileURL = e }" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.event-list {
    padding-left: 0 !important;
}
.event-list li{
    list-style-type: none;
}
.event-list footer{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: rgba(0, 0, 0, 0);
    text-align: center;
}

.event-list footer a {
    text-decoration: none !important;}

.link-reg{
    color: #fff;
    background-color: teal;
    border: 1px solid teal;
    padding: 10px 2%;
    width: 30%;
    border-radius: 0 !important;
}
.link-reg:hover{
    background-color: rgba(0, 128, 128, 0);
    border: 1px solid teal;
}
</style>
<script>
import GreenDot from '@/components/GreenDot.vue';
import RegisterForm from '@/components/RegisterForm.vue';
import SubmissionBox from '@/components/SubmissionBox.vue';
import RegisterModal from '@/components/RegisterModal.vue';
import { auth, db, storage } from '@/utils';
import { getDoc, getDocs, collection, doc, setDoc, onSnapshot } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
export default {
    name: "DashBoard",
    data() {
        return {
            user: null,
            userData: null,
            registered: false,
            events: [],
            loading: true,
            isEventLive: false,
            liveEvent: null,
            submission: {
                fileURL: null,
                fileRef: null,
                loading: false,
                uploaded: false
            },
            modalOpen : false,
            selectedEvent : null
        }
    },
    components: {
        RegisterForm,
        GreenDot,
        SubmissionBox,
        RegisterModal
    },
    created() {
        let usersDb = collection(db, "users");
        auth.onAuthStateChanged((user) => {
            if (!user) {
                this.$router.push("/");
            }
            else {
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
        this.checkEventLive();
    },
    computed: {
        userEvents() {
            let out=[]
            for (let i in this.userData.events) {
                let event = this.events.find((e) => e.id == this.userData.events[i].event_id);
                if (event) {
                    out.push({
                        ...event,
                        confirmed: this.userData.events[i].confirmed,

                    });
                }
            }
            return out;
        },
        unRegisteredEvents() {
            return this.events.filter((event) => {
                for(let i in this.userData.events){
                    if(event.id == this.userData.events[i].event_id){
                        return false;
                    }
                }
                return true;
            });
        },
        isRegforcurrentEvent() {
            if (!this.liveEvent) {
                return false;
            }
            return this.userData.events.indexOf(this.liveEvent.id) != -1;
        }
    },
    methods: {
        getEvents() {
            let eventsDb = collection(db, "events");
            getDocs(eventsDb).then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    this.events.push(doc.data());
                });
            });
        },
        
        uploadFile() {
            if (!this.isRegforcurrentEvent) {
                return
            }
            this.submission.loading = true;
            let submissionDb = collection(db, "submissions");
            let event = this.liveEvent.id;
            let file = document.querySelector("#event_submission").files[0];
            let storageRef = ref(storage, `submissions/${event}/${this.user.email}/${file.name}`);
            if (!this.isEventLive || !this.isRegforcurrentEvent || !file || !this.liveEvent.submissions) {
                return
            }
            uploadBytes(storageRef, file).then(async () => {
                const url = await getDownloadURL(storageRef);
                let submissionRef = doc(submissionDb, `${event}-${this.user.email}`);
                setDoc(submissionRef, {
                    fileURL: url,
                    time: new Date(),
                    user: doc(collection(db, "users"), this.user.email),
                    event: {
                        id: this.liveEvent.id,
                        name: this.liveEvent.name
                    }
                });
                let usersDb = collection(db, "users");
                let userDoc = doc(usersDb, this.user.email);
                let userSubmissions = this.userData.submissions;
                userSubmissions.push(submissionRef);
                setDoc(userDoc, { submissions: userSubmissions }, { merge: true });

                this.submission.uploaded = true;
                this.submission.fileURL = url;
                this.submission.fileRef = storageRef;
            })
                .catch(e => {
                    alert(e.message)
                })
                .finally(() => {
                    this.submission.loading = false;
                })
        },
        checkEventLive() {
            let configDb = collection(db, "config");
            let configDoc = doc(configDb, "live");
            onSnapshot(configDoc, (d) => {
                this.isEventLive = d.data().isLive;
                if (this.isEventLive) {
                    getDoc(d.data().event)
                        .then((doc) => {
                            this.liveEvent = doc.data();
                            this.liveEvent["notice"] = d.data().notice;
                            this.liveEvent["timing"] = d.data().timing;
                        });
                }
            });
        }
    }
}
</script>

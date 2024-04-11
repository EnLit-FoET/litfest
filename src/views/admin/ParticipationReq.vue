<template>
    <div class="container">
        <input type="search" v-model="search" name="search" placeholder="Search" aria-label="Search" />
        <fieldset>
            <input type="checkbox" id="approved" name="approved" v-model="this.includeApproved" />
            <label for="approved">Include Approved</label>
        </fieldset>
        <table>
            <thead>
                <tr>
                    <th>Email</th>
                    <th>Event</th>
                    <th>Transaction No</th>
                    <th>Amount</th>
                    <th>Approved</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="request in filteredRequests" :key="request.id">
                    <td>{{ request.user_email }}</td>
                    <td>{{ request.event_id }}</td>
                    <td>{{ request.transactionNo }}</td>
                    <td>{{ request.amount }}</td>
                    <td>{{ !request.pending }}</td>
                    <td>
                        <button @click="acceptRequest(request)" v-if="request.pending">Accept</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

</template>

<script>
import { db } from '@/utils';
import { collection, onSnapshot, getDoc, doc, setDoc } from 'firebase/firestore';
export default {
    data() {
        return {
            requests: [],
            search: '',
            includeApproved: false
        }
    },
    created() {
        this.getRequests();
    },
    computed: {
        filteredRequests() {
            if (!this.search) {
                if (this.includeApproved){
                    return this.requests;
                }
                return this.requests.filter(request => request.pending);
            }
            if (this.includeApproved){
                return this.requests.filter(request => request.user_email.includes(this.search) || request.user.name.includes(this.search));
            }
            return this.requests.filter(request => request.pending && (request.user_email.includes(this.search) || request.user.name.includes(this.search)));
        }
    },
    methods: {
        getRequests() {
            let requestsDb = collection(db, 'requests');
            onSnapshot(requestsDb, (querySnapshot) => {
                let requests = [];
                querySnapshot.forEach((doc) => {
                    let data = {
                        id: doc.id,
                        ...doc.data()
                    }
                    requests.push(data);
                });
                this.requests = requests;
            });
        },
        async acceptRequest(request) {
            let requestsDb = collection(db, 'requests');
            let usersDb = collection(db, 'users');
            let requestDoc = await getDoc(doc(requestsDb, request.id));
            if (requestDoc.exists()) {
                await setDoc(doc(requestsDb, request.id), {
                    pending: false
                }, { merge: true });

                let user = await getDoc( request.user);
                let userEvents = user.data().events;
                let event = userEvents.find(event => event.event_id === request.event_id);

                event.confirmed = true;

                if (event.members) {
                    for (let member of event.members) {
                        let memberDoc = await getDoc(doc(usersDb, member));
                        let memberEvents = memberDoc.data().events;
                        memberEvents.push({
                            event_id: request.event_id,
                            event: request.event,
                            confirmed: true,
                            participation: requestDoc
                        });
                    }
                }
                await setDoc(request.user, {events : userEvents}, { merge: true });
            }
        }
    }
}

</script>
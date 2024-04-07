<template>
    <dialog :open="this.open">
        <article>
            <header>
                <p>
                    <strong>🗓️  Register for {{ event.name }}</strong>
                </p>
            </header>
            <ul>
                <li>Participation: {{ event.rule[0].participation }}</li>
                <li>Participation Fee: {{event.participationFee}}</li>
            </ul>
            <form @submit.prevent="this.checkAll">
                <p v-if="event.members">This is a team event. Make sure all the members are registered on the website and enter the registered emails here.</p>
                <p v-if="event.members">
                    <input type="email" v-for="i in event.members" :key="i" :id="'member' + i" v-model="this.members[i-1]" :placeholder="'Enter registered email for member ' + i" required>
                </p>
                <p>
                    <label for="t-no">Pay on the QR code given below and enter transaction number.</label>
                    <input type="text" id="t-no" placeholder="Enter transaction ID" v-model="transactionNo" required>
                </p>
                <p>
                    Pay for the participation fee to confirm your registration.
                    <ul>
                        <li>UPI number : 8303556897</li>
                        <li>UPI Id : <a :href="`upi://pay?pa=manvendrajwada@paytm&pn=Litfest-Enlit&cu=INR&tn=${event.name} Litfest`">8303556897@paytm</a></li>
                        <li>QR code :</li>
                    </ul>
                    <img src="@/assets/images/qr-code.png">
                </p>
                <button type="submit" ref="formbtn" hidden></button>
            </form>
            <footer>
                <button type="subimt" @click="this.$refs.formbtn.click()">Confirm</button>
                <button className="secondary" @click="this.$emit('close')">
                    Cancel
                </button>
            </footer>
        </article>
    </dialog>
</template>

<script>
import { db } from '@/utils';
import { getDoc, doc, collection, setDoc } from 'firebase/firestore';
export default{
    data(){
        return {
            members : [],
            transactionNo : ''
        }
    },
    props : ['open', 'event', 'user_email'],
    created(){
        if(this.event.members>1){
            for(let index in this.event.members){
                this.members[index]= '';
            }
        }
    },
    methods : {
        async checkAll(){
            let allFilled = true;
            if(this.event.members>1){
                for(let i in this.members){
                    if(!this.members[i]){
                        allFilled = false;
                        break;
                    }
                }
            }
            if(allFilled && this.transactionNo){
                let usersDb = collection(db, 'users');
                if(this.event.members>1){
                    for(let i in this.members){
                        let userDoc = await getDoc(doc(usersDb, this.members[i]));
                        if(!userDoc.exists()){
                            alert('User with email ' + this.members[i] + ' is not registered on the website.');
                            return;
                        }
                    }
                }
                let participationReq = {
                    event_id : this.event.id,
                    event : this.event.name,
                    participation : this.event.rule[0].participation,
                    amount : this.event.participationFee,
                    members : this.event.members>1 ? this.members : null,
                    transactionNo : this.transactionNo,
                    pending : true
                }
                this.registerForEvent(participationReq);
            }
            else{
                alert('Please fill all the fields');
            }
        },
        async registerForEvent(participationReq) {
            let usersDb = collection(db, "users");
            let requestDb = collection(db, "requests");

            let userDoc = doc(usersDb, this.user_email);
            let requestDoc = doc(requestDb, `${this.user_email}-${participationReq.event_id}`);

            await setDoc(requestDoc, {
                user: userDoc,
                user_email: this.user_email,
                ...participationReq
            });

            let userDocData = await getDoc(userDoc);
            let userEvents = userDocData.data().events;
            userEvents.push({
                event_id: participationReq.event_id,
                event: participationReq.event,
                participation: requestDoc,
                confirmed: false
            });
            await setDoc(userDoc, {
                events: userEvents
            }, { merge: true });
            this.$emit('done', {
                event_id: participationReq.event_id,
                event: participationReq.event,
                participation: requestDoc,
                confirmed: false
            })
            this.$emit('close');
        },
    }
}
</script>
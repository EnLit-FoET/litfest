<template>
    <article :aria-busy="this.loading">
        <p v-if="this.loading">
            Fetching...
        </p>
        <header>{{ this.event_name }}</header>
        <p>Submitted at <br><i>{{ Date(submission.time) }}</i></p>
        <footer>
            <a :href="submission.fileURL" target="_blank">View your submission</a>
        </footer>
    </article>
</template>

<script>
import {getDoc} from 'firebase/firestore'
export default {
    data(){
        return {
            submission: {},
            loading : true,
            event_name : ""
        }
    },
    props: {
        "sub" : {
            type: Object,
            required: true
        },
        "liveEvent" : {
            type: String,
            required: true
        }
    },
    created(){
        getDoc(this.sub)
        .then(
            (doc) => {
                if(doc.exists()){
                    this.submission = doc.data()
                    this.event_name = this.submission.event.name
                    if(this.submission.event.id===this.liveEvent){
                        this.$emit("submittedForLive",this.submission.fileURL)
                    }
                }
            }
        )
        .finally(
            () => {
                this.loading = false
            }
        )
    }
}
</script>
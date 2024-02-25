<template>
  <div class="rule">
    <h1 class="main-heading">{{ creativeFlair.name }}</h1>
    <p><span>Overview :</span> {{ creativeFlair.overview }}</p>
    <p><span>Participation :</span> {{ creativeFlair.participation }}</p>
    <p class="optional">
      <span>{{ creativeFlair.participationNo }}</span>
    </p>
    <p class="rule-highlight">Description of the round :</p>
    <div
      v-for="des in creativeFlair.description"
      :key="des.roundNo"
      class="list-rule"
    >
      <p class="optional">{{ des.roundNo }}</p>
      <ul v-for="round in des.rounds" :key="round">
        <li>{{ round.des }}</li>
      </ul>
    </div>
    <p class="rule-highlight">Time breakdown :</p>
    <ul
      v-for="time in creativeFlair.timeBreakdown"
      :key="time"
      class="list-rule"
    >
      <li>{{ time.des }}</li>
    </ul>
    <p class="rule-highlight">Judging/Scoring criteria :</p>
    <ul
      v-for="judge in creativeFlair.judgingCriteria"
      :key="judge"
      class="list-rule"
    >
      <li>{{ judge.des }}</li>
    </ul>
    <p class="rule-highlight">Note :</p>
    <ul v-for="note in creativeFlair.notes" :key="note" class="list-rule">
      <li>{{ note.des }}</li>
    </ul>
    <p><span>Participation Fee :</span> {{ creativeFlair.participationFee }}</p>
    <button class="btn">Participate Now</button>
  </div>
</template>

<style>
.optional {
  margin: 0;
  padding: 0;
}

.rule {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.rule p {
  width: 80%;
}

.list-rule {
  width: 75%;
}

.rule span,
.rule-highlight {
  color: var(--theme1);
  font-weight: 600;
  font-size: larger;
}
</style>

<script>
import { useRoute } from "vue-router";
export default {
  data() {
    return {
      ruleBook: "",
      creativeFlair: {
        name: "Creative Flair (Est:50 min)",
        overview:
          "Weave a web with words to inspire wonder and awe. This is a competition for all the storytellers out there who like working with pen and paper. The participants have to write the narrative based on the prompts.",
        participation: "Individual",
        participationNo: "",
        description: [
          {
            roundNo: "",
            rounds: [
              {
                des: "The participants will be given a new word every 4 minutes which they will have to incorporate in their prose. Total of 4 words + 1 bonus word will be given.",
              },
              {
                des: "Not incorporating the 4 mandatory words in composition will lead to disqualification.",
              },
              {
                des: "Incorporating the bonus word will lead to bonus points being granted.",
              },
            ],
          },
        ],
        timeBreakdown: [
          {
            des: "Introduction and Prompt Explanation (5 minutes)",
          },
          {
            des: "Brainstorming and Planning (7 minutes)",
          },
          {
            des: "Writing Time (20 minutes)",
          },
          {
            des: "Submission and Closing (3 minutes)",
          },
        ],
        judgingCriteria: [
          {
            des: "Entries must be an original piece of work- plagiarism of any sort if detected will result in immediate disqualification.",
          },
        ],
        notes: [
          {
            des: "Jury decisions are final and binding.",
          },
          {
            des: "There will be a knock-out round in case of tie.",
          },
          {
            des: "The organizing team reserves the right to change or modify the rules.",
          },
        ],
        participationFee: 50,
      },
      kissa: {
        name: "Kissa(Est: 2hrs)",
        overview:
          "Weave a web with words to inspire wonder and awe. This is a competition for all the storytellers out there who like working with pen and paper. The participants have to write the narrative based on the prompts.",
        participation: "Team",
        participationNo: "<span> Total no. of team members: </span> 2",
        description: [
          {
            roundNo: "",
            rounds: [
              {
                des: "The participants will be given a new word every 4 minutes which they will have to incorporate in their prose. Total of 4 words + 1 bonus word will be given.",
              },
              {
                des: "Not incorporating the 4 mandatory words in composition will lead to disqualification.",
              },
              {
                des: "Incorporating the bonus word will lead to bonus points being granted.",
              },
            ],
          },
        ],
        timeBreakdown: [
          {
            des: "Introduction and Prompt Explanation (5 minutes)",
          },
          {
            des: "Brainstorming and Planning (7 minutes)",
          },
          {
            des: "Writing Time (20 minutes)",
          },
          {
            des: "Submission and Closing (3 minutes)",
          },
        ],
        judgingCriteria: [
          {
            des: "Entries must be an original piece of work- plagiarism of any sort if detected will result in immediate disqualification.",
          },
        ],
        notes: [
          {
            des: "Jury decisions are final and binding.",
          },
          {
            des: "There will be a knock-out round in case of tie.",
          },
          {
            des: "The organizing team reserves the right to change or modify the rules.",
          },
        ],
        participationFee: 50,
      },
    };
  },
  mounted() {
    const route = useRoute();
    console.log("route: ", route.params.to);
  },
};
</script>

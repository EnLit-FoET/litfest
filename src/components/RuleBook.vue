<template>
  <div class="rule">
    <h1 class="main-heading">{{ ruleBook.name }}</h1>
    <p><span>Overview :</span> {{ ruleBook.overview }}</p>
    <p><span>Participation :</span> {{ ruleBook.participation }}</p>
    <p class="optional">
      <span>{{ ruleBook.participationNo }}</span>
    </p>
    <p class="rule-highlight">Description of the round :</p>
    <div
      v-for="des in ruleBook.description"
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
      v-for="time in ruleBook.timeBreakdown"
      :key="time"
      class="list-rule"
    >
      <li>{{ time.des }}</li>
    </ul>
    <p class="rule-highlight">Judging/Scoring criteria :</p>
    <ul
      v-for="judge in ruleBook.judgingCriteria"
      :key="judge"
      class="list-rule"
    >
      <li>{{ judge.des }}</li>
    </ul>
    <p class="rule-highlight">Note :</p>
    <ul v-for="note in ruleBook.notes" :key="note" class="list-rule">
      <li>{{ note.des }}</li>
    </ul>
    <p><span>Participation Fee :</span> {{ ruleBook.participationFee }}</p>
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
import ruleBooks from "@/components/RuleBook.json";
export default {
  data() {
    return {
      ruleBook: null,
      ruleBooks: ruleBooks,
      event_id : ""
    };
  },
  created() {
    this.event_id = this.$route.params.to
    this.ruleBook = this.ruleBooks.filter((rule) => rule.id == this.event_id);
  },
};
</script>

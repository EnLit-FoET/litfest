<template>
  <div
    class="rule"
    v-for="rulebook in ruleBook"
    :key="rulebook"
    :id="rulebook.id"
  >
    <h1>{{ rulebook.name }}</h1>
    <div class="rule-cont" v-for="rules in rulebook.rule" :key="rules">
      <p class="optional">
        <span>{{ rules.ruleName }}</span>
      </p>
      <p><span>Overview :</span></p>
      <ul
        class="list-rule"
        v-for="overviews in rules.overview"
        :key="overviews"
      >
        <li>{{ overviews.des }}</li>
      </ul>
      <p><span>Participation :</span> {{ rules.participation }}</p>
      <p>
        <span>Total no. of team members : </span> {{ rules.participationNo }}
      </p>

      <p class="rule-highlight">Description of the round :</p>
      <div class="" v-for="desc in rules.description" :key="desc">
        <p>{{ desc.roundNo }}</p>
        <div class="list-rule">
          <ul v-for="round in desc.rounds" :key="round">
            <li>{{ round.des }}</li>
          </ul>
        </div>
      </div>
      <p class="rule-highlight">Time breakdown :</p>
      <ul v-for="time in rules.timeBreakdown" :key="time" class="list-rule">
        <li>{{ time.des }}</li>
      </ul>

      <p class="rule-highlight">Judging/Scoring criteria :</p>
      <ul v-for="judge in rules.judgingCriteria" :key="judge" class="list-rule">
        <li>{{ judge.des }}</li>
      </ul>
      <p class="rule-highlight">Note :</p>
      <ul v-for="note in rules.notes" :key="note" class="list-rule">
        <li>{{ note.des }}</li>
      </ul>
    </div>
    <p><span>Participation Fee :</span> {{ rulebook.participationFee }}</p>
    <button
      @click="this.registerForEvent(rulebook.id)"
      class="btn"
      style="margin-bottom: 75px"
    >
      Register
    </button>
  </div>
</template>

<style>
.rule {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.rule p,
.rule-cont {
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
      event_id: "",
    };
  },
  created() {
    this.event_id = this.$route.params.to;
    this.ruleBook = this.ruleBooks.filter((rule) => rule.id == this.event_id);
  },
};
</script>

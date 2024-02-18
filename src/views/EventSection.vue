<template>
  <section id="events">
    <h1 class="main-heading">Events</h1>
    <img src="../assets/images/influencers.svg" alt="influencers" class="inf" />
    <div class="events">
      <div class="exhibitions"></div>
      <div class="timeline"></div>
    </div>
    <CompetitionSection />
  </section>
</template>

<style>
.main-heading {
  padding-top: 3%;
  font-size: 3.5rem;
  text-align: center;
  color: #fff;
  background-color: #00000000;
}

.inf {
  width: 100%;
}

@media  screen and (max-width:600px){
  .main-heading{
    font-size: 2.5em;
  }
}
@media  screen and (max-width:300px){
  .main-heading{
    font-size: 2em;
  }
}
</style>

<script>
import CompetitionSection from './CompetitionSection.vue';
export default {
  components: { CompetitionSection },
};
</script>

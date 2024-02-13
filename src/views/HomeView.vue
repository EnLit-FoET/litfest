<template>
  <section id="hero">
    <h1>EnLit</h1>
    <p class="theme1">presents</p>
    <h1 id="heading">Lit Fest</h1>
    <p>
      The first rule of <span class="theme2">Lit-Fest</span>, Don't talk about
      <span class="theme2">Lit-Fest</span>
    </p>
	<TimeBox />
  </section>
  <EventSection />
</template>

<script>
import EventSection from "./EventSection.vue";
import TimeBox from "../components/TimeBox.vue";

export default {
  name: "HomeView",
  components: { EventSection, TimeBox },
};
</script>

<style scoped>
#hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 85vh;
}

#hero p {
  font-weight: 500;
  padding: 0;
  margin: 0;
  font-size: 1.16rem;
}

#hero h1 {
  padding: 0;
  margin: 0;
}
#heading {
  margin: 0;
  padding: 0;
  font-size: 6rem !important;
  animation: shimmer 3s linear 1 !important;
  font-weight: 800;
  line-height: 1em !important;
}
@keyframes shimmer {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>

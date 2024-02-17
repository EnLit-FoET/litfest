<template>
  <section id="events">
    <h1 class="main-heading">Events</h1>
    <img src="../assets/images/influencers.svg" alt="influencers" class="inf">
    <h1 class="main-heading">Competitions</h1>
    <section v-for="event in events" :key="event.title" :style="{ background: ` ${event.backgroundImage}` }" :class="`head-space-cont ${event.title.toLowerCase()}`">
      <div>
        <h1 class="heading">{{ event.title }}</h1>
        <div class="more">
          <p>{{ event.para }}</p>
          <a :href="event.linkto">View More</a>
        </div>
      </div>
    </section>
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

.inf{
  width: 100%;
}

#events {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#sec1,
#sec3,
#sec2,
#sec4 {
  min-height: fit-content;
}

.event-head {
  padding: 5% 0;
}

.head-space-cont .more a{
  text-decoration: none;
  padding: 2% 3%;
  font-weight: 500;
  background-color: #fff;
  color: #000;
}
.head-space-cont .more a:hover{
  background-color: var(--theme2);
  color: #fff;
}
</style>

<script>
export default {
  data() {
    return {
      events: [
        {
          title: 'Alfaaz',
          backgroundImage: 'url(../assets/images/drama1.JPG)',
          para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel veniam maxime dolores eius dolorum, odit magni provident est odio nesciunt quasi error tempora doloremque accusamus.',
          linkto: '#alphaaz'
        },
        {
          title: 'RangRaaz',
          backgroundImage: 'url(https://raw.githubusercontent.com/EnLit-FoET/litfest/main/src/assets/images/rangrachna.jpg?token=GHSAT0AAAAAACNOIMTXAMATDWQMKVKAWRIIZOQ5FTQ)',
          para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel veniam maxime dolores eius dolorum, odit magni provident est odio nesciunt quasi error tempora doloremque accusamus.',
          linkto: '#rangraaz'
        },
        {
          title: 'Word Odyssey',
          backgroundImage: 'url(../assets/images/speech.JPG)',
          para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel veniam maxime dolores eius dolorum, odit magni provident est odio nesciunt quasi error tempora doloremque accusamus.',
          linkto: '#word'
        },
        {
          title: 'Nagma',
          backgroundImage: 'url(https://github.com/EnLit-FoET/litfest/blob/main/src/assets/images/nagma.JPG)',
          para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel veniam maxime dolores eius dolorum, odit magni provident est odio nesciunt quasi error tempora doloremque accusamus.',
          linkto: '#nagma'
        },
      ]
    };
  }
};

</script>
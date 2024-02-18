<template>
    <h1 class="main-heading">Competitions</h1>
    <div class="event-cont" v-for="event in events" :key="event.id" >
      <section class="head-space-cont" :id="`${event.id}`">
        <div>
          <h1 class="heading">{{event.title}}</h1>
        </div>
      </section>
      <div class="competition" v-for="name in event.eventnames" :key="name.eventnames">
        <div class="img">
          <img v-bind:src="name.eventImage" :alt="name.eventName" />
        </div>
        <div class="detail">
          <h1>{{ name.eventName }}</h1>
          <p>{{ name.eventabout }}</p>
          <div class="link-cont">
            <a href="#">Know more...</a>
          </div>
        </div>
      </div>
    </div>
</template>

<style>
#events {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#events section {
  background-attachment: fixed !important;
  height: 70vh;
}
.event-head {
  padding: 5% 0;
}

.event-cont {
  width: 100%;
}

#alfaaz {
  background: linear-gradient(#00000079, #00000079),
    url(../assets/images/alfaaz.jpg);
}

#rangrachna {
  background: linear-gradient(#00000079, #00000079),
    url(../assets/images/rangrachna.jpg);
}
#word {
  background: linear-gradient(#00000079, #00000079),
    url(../assets/images/speech.svg);
}
#nagma {
  background: linear-gradient(#00000061, #00000061),
    url(../assets/images/nagma.jpg);
}

.competition{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: fit-content;
}

.competition:nth-child(even){
  flex-direction: row-reverse;
}

.img, .detail{
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.img img{
  width: 70%;
}

.detail h1{
  width: 100%;
  text-align: left;
  color: var(--theme1);
}

.detail p{
  text-align: left;
  width: 100%;
}

.link-cont{
  display: flex;
  justify-content: left;
  width: 100%;
}

.link-cont a{
  text-decoration: none;
  color: #000;
  background-color: var(--theme2);
  padding: 1% 2%;
  font-weight: 500;
}
.link-cont a:hover{
  color: var(--theme2);
  background-color: var(--theme1);
}
</style>

<script>
export default {
  data() {
    return {
      events: [
        { 
          id: "alfaaz",
          title: "Alfaaz",
          eventnames: [
            {
              eventName: "Creative Writing",
              eventImage: require("../assets/images/events/creative.svg"),
              eventabout: "Those with creativity, wit and imagination are provided with a stage to showcase their crafting in the presence of a captivated audience, united by shared interests and ignited passions.",
            },
            {
              eventName: "Story Writing",
              eventImage: require("../assets/images/events/story.svg"),
              eventabout: "Crafting compelling tales within a confined timeframe, story writers captivate judges with originality and emotion in concise novellas. It's a test of literary skill, urging participants to distill their narrative prowess into succinct, impactful stories.",
            },
            {
              eventName: "Debate",
              eventImage: require("../assets/images/events/debate.svg"),
              eventabout: "Debate competitions demand concise, precise arguments, showcasing participants' quick thinking, articulate expression, and strategic use of evidence within a competitive framework.",
            },
            {
              eventName: "Speech Extempo",
              eventImage: require("../assets/images/events/speechex.svg"),
              eventabout: "The competition is a dynamic showcase of spontaneous eloquence. Participants deliver unrehearsed speeches on given topics, showcasing quick thinking, persuasive communication, and depth of knowledge in a limited preparation time. It's a concise yet impactful test of extemporaneous speaking skills.",
            },
            {
              eventName: "Poetry",
              eventImage: require("../assets/images/events/poetry.svg"),
              eventabout: "A poetry competition is a creative battleground where participants weave emotions and imagery into concise verses, expressing themes with precision. It's a celebration of linguistic finesse and emotional resonance, showcasing the power of succinct poetic expression.",
            },
            {
              eventName: "Shayari",
              eventImage: require("../assets/images/events/shayari.svg"),
              eventabout: "The Shayari competition is a poetic showdown where participants succinctly express their emotions in Urdu and Hindi, creating a captivating tapestry of linguistic finesse and creativity.",
            },
          ],
        },
        { 
          id: "rangrachna",
          title: "RangRachna",
          eventnames: [
            {
              eventName: "Meme Making",
              eventImage: require("../assets/images/events/meme.svg"),
              eventabout: "Debate competitions demand concise, precise arguments, showcasing participants' quick thinking, articulate expression, and strategic use of evidence within a competitive framework.",
            },
            {
              eventName: "Poster Making",
              eventImage: require("../assets/images/events/poster.svg"),
              eventabout: " The competition is a dynamic showcase of spontaneous eloquence. Participants deliver unrehearsed speeches on given topics, showcasing quick thinking, persuasive communication, and depth of knowledge in a limited preparation time. It's a concise yet impactful test of extemporaneous speaking skills.",
            },
            {
              eventName: "Calligraphy",
              eventImage: require("../assets/images/events/calligraphy.svg"),
              eventabout: "Those with creativity, wit and imagination are provided with a stage to showcase their crafting in the presence of a captivated audience, united by shared interests and ignited passions.",
            },
            {
              eventName: "Origami",
              eventImage: require("../assets/images/events/origami.svg"),
              eventabout: "Crafting compelling tales within a confined timeframe, story writers captivate judges with originality and emotion in concise novellas. It's a test of literary skill, urging participants to distill their narrative prowess into succinct, impactful stories.",
            },
          ],
        },
        { 
          id: "word",
          title: "Word Odyssey",
          eventnames: [
            {
              eventName: "Spell Bee",
              eventImage: require("../assets/images/events/spellbee.svg"),
              eventabout: "The Spell Bee competition is a linguistic contest meticulously designed to assess participants' prowess in spelling. With precision and efficiency, it challenges individuals to showcase their mastery of language, ensuring a rigorous examination of their spelling skills.",
            },
            {
              eventName: "Theme Quiz",
              eventImage: require("../assets/images/events/quiz.svg"),
              eventabout: "A dynamic challenge where participants showcase their expertise on interesting topics. It’s a quick and engaging test of knowledge, requiring precision and efficiency to conquer the theme-based questions",
            },
            {
              eventName: "Open Mic",
              eventImage: require("../assets/images/events/openmic.svg"),
              eventabout: "Standup Comedy and Story Telling",
            },
          ],
        },
        { 
          id: "nagma",
          title: "Nagma",
          eventnames: [
            {
              eventName: "Short Film",
              eventImage: require("../assets/images/events/shortfilm.svg"),
              eventabout: "Those with creativity, wit and imagination are provided with a stage to showcase their crafting in the presence of a captivated audience, united by shared interests and ignited passions.",
            },
            {
              eventName: "Theatre",
              eventImage: require("../assets/images/events/theatre.svg"),
              eventabout: "Crafting compelling tales within a confined timeframe, story writers captivate judges with originality and emotion in concise novellas. It's a test of literary skill, urging participants to distill their narrative prowess into succinct, impactful stories.",
            },
            {
              eventName: "Monoact",
              eventImage: require("../assets/images/events/monoact.svg"),
              eventabout: "Those with creativity, wit and imagination are provided with a stage to showcase their crafting in the presence of a captivated audience, united by shared interests and ignited passions.",
            },
            {
              eventName: "Nukkad Natak",
              eventImage: require("../assets/images/events/nukkad.svg"),
              eventabout: " Crafting compelling tales within a confined timeframe, story writers captivate judges with originality and emotion in concise novellas. It's a test of literary skill, urging participants to distill their narrative prowess into succinct, impactful stories.",
            },
          ],
        },
        
      ],
    };
  },
};
</script>

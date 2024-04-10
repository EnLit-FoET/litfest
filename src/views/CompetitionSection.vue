<template>
  <h1 class="main-heading" id="competition">Competitions</h1>
  <div class="event-cont" v-for="event in events" :key="event.id" >
    <section class="head-space-cont" :id="`${event.id}`">
      <div>
        <h1 class="heading">{{event.title}}</h1>
      </div>
    </section>
    <div class="competition" v-for="name in event.eventnames" :key="name.eventName">
      <div class="img">
        <img v-bind:src="name.eventImage" :alt="name.eventName" />
      </div>
      <div class="detail">
        <h1>{{ name.eventName }}</h1>
        <p>{{ name.eventabout }}</p>
        <div class="link-cont">
          <router-link :to="'/rulebook/'+name.id" class="link" >Know more...</router-link>
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
height: 70vh !important;
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
  url(../assets/images/speech.png);
}
#nagma {
background: linear-gradient(#00000061, #00000061),
  url(../assets/images/nagma.JPG);
}

.competition{
display: flex;
align-items: center;
justify-content: center;
width: 100%;
min-height: fit-content;
margin-bottom: 20px;
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

.link-cont .link{
text-decoration: none;
color: #000;
background-color: var(--theme2);
padding: 1% 2%;
font-weight: 500;
}
.link-cont .link:hover{
color: var(--theme2);
background-color: var(--theme1);
}


@media only screen and (max-width: 930px) {
  .img img{
    width: 100% !important;
  }

  .img, .detail{
    width: 45%;
  }

  .media-partners{
    flex-direction: column;
  }

  .media-partners img{
    margin: 2% 0;
  }
}
@media only screen and (max-width: 600px) {
  .competition{
    flex-direction: column !important;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 27px;
  }
  .detail, .img{
    width: 90% !important;
  }

  .img omg{
    width: 90% !important;
  }
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
            id : "creativeFlair",
            eventName: "Creative Flair",
            eventImage: require("../assets/images/events/creative.png"),
            eventabout: "Those with creativity, wit and imagination are provided with a stage to showcase their crafting in the presence of a captivated audience, united by shared interests and ignited passions.",
          },
          {
            id : "kissa",
            eventName: "Kissa",
            eventImage: require("../assets/images/events/story.png"),
            eventabout: "Crafting compelling tales within a confined timeframe, story writers captivate judges with originality and emotion in concise novellas. It's a test of literary skill, urging participants to distill their narrative prowess into succinct, impactful stories.",
          },
          {
            id : "clashOfOpinions",
            eventName: "Clash of Opnions",
            eventImage: require("../assets/images/events/debate.png"),
            eventabout: "Debate competitions demand concise, precise arguments, showcasing participants' quick thinking, articulate expression, and strategic use of evidence within a competitive framework.",
          },
          {
            id : "oration",
            eventName: "Oration",
            eventImage: require("../assets/images/events/speechex.png"),
            eventabout: "The competition is a dynamic showcase of spontaneous eloquence. Participants deliver unrehearsed speeches on given topics, showcasing quick thinking, persuasive communication, and depth of knowledge in a limited preparation time. It's a concise yet impactful test of extemporaneous speaking skills.",
          },
          {
            id : "rythmicRivals",
            eventName: "Rythmic Rivals",
            eventImage: require("../assets/images/events/poetry.png"),
            eventabout: "A poetry competition is a creative battleground where participants weave emotions and imagery into concise verses, expressing themes with precision. It's a celebration of linguistic finesse and emotional resonance, showcasing the power of succinct poetic expression.",
          },
          {
            id : "nazm",
            eventName: "Nazm",
            eventImage: require("../assets/images/events/shayari.png"),
            eventabout: "The Shayari competition is a poetic showdown where participants succinctly express their emotions in Urdu and Hindi, creating a captivating tapestry of linguistic finesse and creativity.",
          },
        ],
      },
      { 
        id: "rangrachna",
        title: "Rang Rachna",
        eventnames: [
          {
            id : "memeLit",
            eventName: "Meme Lit",
            eventImage: require("../assets/images/events/meme.png"),
            eventabout: "The art of crafting concise, humorous visual stories that resonate with internet culture. Meme making requires a sharp eye for relevance, as creators distill complex ideas into a format that resonates with a wide audience, making it a dynamic and influential form of contemporary expression.",
          },
          {
            id : "palletProwess",
            eventName: "Palette Prowess",
            eventImage: require("../assets/images/events/poster.png"),
            eventabout: "In the Poster Making Competition, participants channel their creativity to visually communicate a provided theme through compelling artworks, combining artistry and effective messaging on a poster.",
          },
          {
            id : "PixelQuill",
            eventName: "PixelQuill",
            eventImage: require("../assets/images/events/calligraphy.png"),
            eventabout: "Those with creativity, wit and imagination are provided with a stage to showcase their crafting in the presence of a captivated audience, united by shared interests and ignited passions.",
          },
          {
            id : "CreaseCrisp",
            eventName: "Crease Crisp",
            eventImage: require("../assets/images/events/origami.png"),
            eventabout: "Crafting compelling tales within a confined timeframe, story writers captivate judges with originality and emotion in concise novellas. It's a test of literary skill, urging participants to distill their narrative prowess into succinct, impactful stories.",
          },
        ],
      },
      { 
        id: "word",
        title: "Word Odyssey",
        eventnames: [
          {
            id : "DictionSnap",
            eventName: "Diction Snap",
            eventImage: require("../assets/images/events/spellbee.png"),
            eventabout: "The Spell Bee competition is a linguistic contest meticulously designed to assess participants' prowess in spelling. With precision and efficiency, it challenges individuals to showcase their mastery of language, ensuring a rigorous examination of their spelling skills.",
          },
          {
            id : "StellarQuizzes",
            eventName: "Stellar Quizzes",
            eventImage: require("../assets/images/events/quiz.png"),
            eventabout: "A dynamic challenge where participants showcase their expertise on interesting topics. It’s a quick and engaging test of knowledge, requiring precision and efficiency to conquer the theme-based questions",
          },
          {
            id : "STANDUP",
            eventName: "Standup",
            eventImage: require("../assets/images/events/standup.png"),
            eventabout: "The Lit-Fest’s own version of a stand-up comedy hunt where comedians showcase their wit and humor, aiming to entertain and engage the audience. Get ready to indulge in a rich fair of laughter and fun.",
          },
          {
            id : "aurFIR",
            eventName: "Aur Fir",
            eventImage: require("../assets/images/events/storytelling.png"),
            eventabout: "Dive into captivating tales at our Storytelling Competition, where participants weave enchanting narratives that will leave you asking, 'aur fir?'' Join us for a mesmerizing experience.",
          },
        ],
      },
      { 
        id: "nagma",
        title: "Nagma",
        eventnames: [
          {
            id : "FilmyEpics",
            eventName: "Filmy Epics",
            eventImage: require("../assets/images/events/shortfilm.png"),
            eventabout: "'Filmy Epics' aims to celebrate the art of storytelling through short films. Filmmakers are encouraged to unleash their creativity, explore diverse themes, and captivate audiences with compelling narratives within a limited time frame.",
          },
          {
            id : "Theatre",
            eventName: "Cameo",
            eventImage: require("../assets/images/events/theatre.png"),
            eventabout: "Welcome to an immersive world where the stage comes alive with emotion, intrigue, and the magic of storytelling. Our theatrical drama promises an unforgettable experience that transcends the boundaries of ordinary entertainment.",
          },
          {
            id : "Monoact",
            eventName: "Spotlight",
            eventImage: require("../assets/images/events/monoact.png"),
            eventabout: "In the spotlight, a solo performer captivates with the art of monologue performance. Expressing a range of emotions through nuanced gestures and shifting tones, they weave a mesmerizing narrative. Each moment is a brushstroke on the canvas of imagination, leaving the audience spellbound.",
          },
          {
            id : "NukkadNatak",
            eventName: "Natya Nirvana",
            eventImage: require("../assets/images/events/nukkad.png"),
            eventabout: "A celebration of raw, unfiltered expressions that unfold in the hustle and bustle of everyday life. Set against the backdrop of a bustling street corner, our Nukkad Natak delves into the lives of ordinary people, exploring their joys, struggles, and the intricate dance of human connections.",
          },
        ],
      },
      
    ],
  };
},
};
</script>

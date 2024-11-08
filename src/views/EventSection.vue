<template>
  <section id="events">
    <h1 class="main-heading">Events</h1>
    <img src="../assets/images/influencers.png" alt="influencers" class="inf" />
    <div class="events">
      <div class="competition" v-for="name in guests" :key="name.guestName">
        <div class="img">
          <img v-bind:src="name.guestImage" :alt="name.guestName" />
        </div>
        <div class="detail">
          <h1>{{ name.guestName }}</h1>
          <p>{{ name.eventabout }}</p>
        </div>
      </div>
      <section
        class="head-space-cont"
        v-for="ex in exhibitions"
        :key="ex.id"
        :id="ex.id"
        style="height: 100vh !important"
      >
        <div class="active">
          <h1 class="heading">{{ ex.name }}</h1>
          <div class="more">
            <p>{{ ex.eventabout }}</p>
          </div>
        </div>
      </section>
    </div>
    <CompetitionSection />
  </section>
</template>

<style>
.main-heading {
  padding: 3% 0;
  font-size: 3.5rem;
  text-align: center;
  background-color: #00000000;
}

.inf {
  width: 100%;
}

#WritingWorkshop{
  background: url(../assets/images/guests/writework.png);
}
#ArtWorkshop{
  background: url(../assets/images/guests/artwork.png);
}

#ArtExhibition {
  background: linear-gradient(#00000079, #00000079),
    url(../assets/images/guests/artexhibition.png);
}
#BookExhibition {
  background: linear-gradient(#00000079, #00000079),
    url(../assets/images/guests/bookexhibition.png);
}

@media screen and (max-width: 600px) {
  .main-heading {
    font-size: 2.5em;
  }
}
@media screen and (max-width: 300px) {
  .main-heading {
    font-size: 2em;
  }
}
</style>

<script>
import CompetitionSection from "./CompetitionSection.vue";
export default {
  components: { CompetitionSection },
  data() {
    return {
      guests: [
        {
          guestName: "Laughter Fraction:",
          guestImage: require("../assets/images/guests/standup.png"),
          eventabout:
            "An afternoon of laughter awaits at the Lit-fiesta stand-up show. Prepare for laughter as Rajat Dikshit takes the stage, weaving humor into the fabric of literature. In this minimalistic setting, enjoy punchy jokes and witty anecdotes that promise to leave you entertained and uplifted.",
        },
        {
          guestName: "Dastaan",
          guestImage: require("../assets/images/guests/daastan.png"),
          eventabout:
            "Embark on a mesmerizing storytelling journey at Lit-Fiesta with the famed storyteller,Himanshu Bajpai. Join us for an evening of enchanting stories that linger in the heart and mind. Known for his captivating tales, the minimalistic yet powerful narratives will transport you to uncharted realms.",
        },
        {
          guestName: "Poetry",
          guestImage: require("../assets/images/guests/poets.png"),
          eventabout:
            "Indulge yourself in the magic of language and experience the transformative power of poetry. Featuring the profound expressions of Nainsy Srivastava, the enchanting verses of Akriti Tiwari, and the poetic prowess of Dr. Krishna Singh, this event promises an evening filled with eloquence and emotion. Join us as these distinguished poets grace the stage, weaving verses that resonate with the soul. This poetic rendezvous is not just an event; it's a celebration of the spoken word",
        },
        {
          guestName: " Influencer meet",
          guestImage: require("../assets/images/guests/influencer.png"),
          eventabout:
            "Dive into the pulse of our literature fest with an exclusive Influencer Program featuring the dynamic Saurabh Chandra (Things to do in Lucknow) and the charismatic Prince Maurya (Lucknow Darshan). Join us as these influencers share their insights, experiences, and unique perspectives on the city's vibrant culture and hidden gems. Be part of this engaging session, where they unravel the tapestry of Lucknow's charm.",
        },
        {
          guestName: " Panel Discussion",
          guestImage: require("../assets/images/guests/panel.png"),
          eventabout:
            "Opinion and discourse, the hallmarks of the civilized, beckons us. Noblesse oblige demands our unity as we stand witness to the revelation of defining subjects. In our quest for understanding, painting the world with the vibrant hues of diverse perspectives.",
        },
      ],
      exhibitions: [
        {
          id: "ArtExhibition",
          name: "Art Exhibition",
          guestImage: require("../assets/images/guests/artexhibition.png"),
          eventabout:
            "To inspire and provoke thoughts, offering a canvas for diverse perspectives and creative expressions, the art exhibition and fair serves as a platform to showcase the power of visual storytelling, inviting attendees to explore the intersections of art and narrative. Discover the fusion of literature and art unveiled by The Lalit Kala Academy. From evocative paintings to thought-provoking sculptures, experience a sensory feast that redefines beauty and imagination.",
        },
        {
          id: "BookExhibition",
          name: "Book Exhibition",
          eventabout:
            " Immerse yourself in a haven of words, ideas, and stories that transcend boundaries. From classic novels to contemporary bestsellers, the book fair promises a treasure trove for every avid reader. The world of literature scattered by Being Bookish and Universal Books awaits you to delve into the entrancing world of literature. Come, explore, and let the pages of these literary wonders ignite your imagination.",
        },
        {
          id: "WritingWorkshop",
          name: "Writing Workshop",
          eventabout:
            "Join us as we embark on a journey of self-discovery, imaginative exploration, and most importantly, the power of expression in our writing workshop. Come with us as we venture into uncharted territories, delve into the depths of creativity, and unearth the writer within you. Step into the world of writers, where each word and idea shared is a stride towards realizing your own literary potential. Join our community of writers, where inspiration, creation, and learning unite, regardless of your experience level or background.",
        },
        {
          id: "ArtWorkshop",
          name: "Art Workshop",
          eventabout:
            "Join us as we set off on a voyage of introspection, creative vision, and—above all—expression in our art workshop. Come along on this journey with us as we explore new frontiers, tap into the depths of creativity, and uncover the inner artist. Enter the realm of artists, where each brushstroke and concept exchanged is a step toward realizing your own creative potential. Come along with us as we inspire, create, and learn as a community of artists, no matter how experienced or inexperienced.",
        },
      ],
    };
  },
};
</script>

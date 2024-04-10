<template>
  <div class="sponsorus">
    <hgroup>
      <h1>SPONSORS AND PARTNERS</h1>
    </hgroup>
    <h4>Interested in sponsoring us?</h4>
    <div class="sponsor-btn-cont">
      <a href="" class="sponsor-link" target="_blank">Event Brochure</a>
      <a href="mailto:contact@enlit.club" class="sponsor-link" target="_blank">Get in touch</a>
    </div>
  </div>
  <h1 class="main-head">Associates</h1>
  <div class="marquee">
    <div
      v-for="(slide, index) in slides"
      :key="index"
      class="ass-slide marquee-content scroll"
    >
      <img
        v-for="ass in associates"
        :key="ass.id"
        v-bind:src="ass.image"
        :alt="ass.id"
      />
    </div>
  </div>
  <h1 class="main-head">Literature Partner</h1>
  <div class="sponsors">
    <img
      v-bind:src="sponsor.image"
      :alt="sponsor.id"
      v-for="sponsor in sponsors"
      :key="sponsor.id"
    />
  </div>
  <h1 class="main-head">Media Partners</h1>
  <div class="media-partners">
    <img
      v-bind:src="media.image"
      :alt="media.id"
      v-for="media in mediaPartners"
      :key="media.id"
    />
  </div>
  <div class="space"></div>
</template>

<style>
.space{
  height: 70px;
  width: 100%;
}
.sponsor-link {
  color: #fff;
  background-color: rgba(0, 128, 128, 0);
  border: 1px solid teal;
  padding: 10px 2%;
  border-radius: 0 !important;
  text-decoration: none;
  margin-right: 17px;
  margin-top: 15px;
}

.sponsor-link:hover {
  background-color: teal;
}

.sponsor-btn-cont{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sponsorus {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  flex-direction: column;
}

.media-partners,
.sponsors {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.media-partners img,
.sponsors img {
  width: 300px;
  background-color: var(--theme2);
}
.main-head {
  padding: 4% 0;
  margin: 2% 0;
  font-size: 2em;
  text-transform: uppercase;
  text-align: center;
  color: var(--theme2);
}

.marquee::before,
.marquee::after {
  position: absolute;
  top: 0;
  width: 17%;
  height: 100%;
  content: "";
  z-index: 2;
}
.marquee::after {
  right: 0;
  background: linear-gradient(to left, #000, #00000000);
}
.marquee::before {
  left: 0;
  background: linear-gradient(to right, #000, #00000000);
}

.marquee {
  overflow: hidden;
  display: flex;
  gap: 1vw;
  align-items: center;
  position: relative;
  user-select: none;
  background-color: var(--theme2);
}

.marquee-content {
  background-color: var(--theme2);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-width: 100%;
  gap: 1vw;
  padding: 7px 0;
}

.marquee-content p {
  font-weight: 600;
  font-size: 1.7vw;
  margin: 0;
  padding: 0;
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - 1vw));
  }
}

.scroll {
  animation: scroll 10s linear infinite !important;
}

.marquee:hover .marquee-content {
  animation-play-state: paused !important;
}
.marquee-content img {
  background-color: var(--theme2);
  height: 150px;
  margin: 0 40px;
}

@media screen and (max-width: 350px) {
  .media-partners img {
    width: 250px;
  }
}
</style>

<script>
export default {
  data() {
    return {
      associates: [
        {
          id: "universal",
          image: require("../assets/images/partners/universal.png"),
        },
        {
          id: "thingtodo",
          image: require("../assets/images/partners/thingtodo.png"),
        },
        {
          id: "beingbook",
          image: require("../assets/images/partners/beingbook.png"),
        },
        {
          id: "lalitkala",
          image: require("../assets/images/partners/lalitkala.png"),
        },
        {
          id: "lkdarshan",
          image: require("../assets/images/partners/lkdarshan.png"),
        },
        {
          id: "vead",
          image: require("../assets/images/partners/vead.png"),
        },
      ],
      sponsors: [
        {
          id: "some",
          image: require("../assets/images/partners/book.png"),
        },
      ],
      mediaPartners: [
        {
          id: "amar",
          image: require("../assets/images/partners/amar.png"),
        },
        {
          id: "radio",
          image: require("../assets/images/partners/radio.png"),
        },
        {
          id: "dainik",
          image: require("../assets/images/partners/dainik.png"),
        },
      ],
    };
  },
  computed: {
    slides() {
      return [this.associates, this.associates];
    },
  },
};
</script>

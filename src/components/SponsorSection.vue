<template>
  <h1 class="main-head">Associates</h1>
  <div class="marquee">
    <div v-for="(slide, index) in slides" :key="index" class="ass-slide marquee-content scroll">
      <img
        v-for="ass in associates"
        :key="ass.id"
        v-bind:src="ass.image"
        :alt="ass.id"
      />
    </div>
  </div>
  <h1 class="main-head">Potential sponsors</h1>
  <div class="sponsors"></div>
  <h1 class="main-head">Media Partners</h1>
  <div class="media-partners">
    <img
      v-bind:src="media.image"
      :alt="media.id"
      v-for="media in mediaPartners"
      :key="media.id"
    />
  </div>
  <div class="sponsorus">
    <div class="spform">
      <form>
        <fieldset role="group">
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            autocomplete="email"
          />
          <input type="submit" value="Sponsor Us" style="background-color: var(--theme1);"/>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<style>

.sponsorus{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
}
.spform{
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
}

.spform form{
  width: 60%;
}

.media-partners {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.media-partners img {
  width: 300px;
  background-color: var(--theme2);
}
.main-head {
  padding: 4% 0;
  margin: 2% 0;
  font-size: 2.3em;
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

/* @media screen and (max-width: 768px) {
  .marquee-content img {
    height: 100px;
  }
} */
/* 
@media screen and (max-width: 480px) {
  .ass-slide {
    animation: none !important;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: #000;
  }

  .associates {
    background-color: #00000000;
  }

  .associates::after,
  .associates::before {
    display: none;
  }

  .ass-slide:last-child {
    display: none;
  }
  .ass-slide img {
    height: auto;
    width: 250px;
    margin: 11px 0;
  }
} */

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
          image: require("../assets/images/partners/universal.svg"),
        },
        {
          id: "thingtodo",
          image: require("../assets/images/partners/thingstodo.svg"),
        },
        {
          id: "beingbook",
          image: require("../assets/images/partners/beingbook.svg"),
        },
        {
          id: "lalitkala",
          image: require("../assets/images/partners/lalitkala.svg"),
        },
        {
          id: "lkdarshan",
          image: require("../assets/images/partners/lkdarshan.svg"),
        },
        {
          id: "vead",
          image: require("../assets/images/partners/vead.svg"),
        },
      ],
      sponsors: [
        {
          id: "some",
          image: "",
        },
      ],
      mediaPartners: [
        {
          id: "amar",
          image: require("../assets/images/partners/amar.svg"),
        },
        {
          id: "radio",
          image: require("../assets/images/partners/radio.svg"),
        },
        {
          id: "dainik",
          image: require("../assets/images/partners/dainik.svg"),
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

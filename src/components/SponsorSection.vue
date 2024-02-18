<template>
  <div class="associates">
    <div class="ass-slide" >
      <img v-for="ass in associates" :key="ass.id" v-bind:src="ass.image" :alt="ass.id" />
    </div>
  </div>
</template>

<style>

.associates {
  overflow: hidden;
  padding: 11px 0;
  background-color: var(--theme2);
  white-space: nowrap;
  position: relative;
}

.associates::before,
.associates::after {
  position: absolute;
  top: 0;
  width: 17%;
  height: 100%;
  content: "";
  z-index: 2;
}
.associates::after {
  right: 0;
  background: linear-gradient(to left, #000, #00000000);
}
.associates::before {
  left: 0;
  background: linear-gradient(to right, #000, #00000000);
}
.ass-slide {
  background-color: var(--theme2);
  display: inline-block;
}

.ass-slide img {
  background-color: var(--theme2);
  height: 150px;
  margin: 0 40px;
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
          id: "vead",
          image: require("../assets/images/partners/vead.svg"),
        },
        {
          id: "lkdarshan",
          image: require("../assets/images/partners/lkdarshan.svg"),
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
};
</script>

<template>
  <div class="divider">
    <a href="#register" class="line">Register Now >>></a>
    <a href="#events" class="line">Know More About Competitions >>></a>
  </div>
  <div class="participation"></div>
  <section id="about" class="head-space-cont">
    <div
      :class="{ active: isHovered }"
      @mouseenter="handleHover"
      @mouseleave="handleHover"
    >
      <h1 class="heading">About Lit-Fest</h1>
      <div class="more">
        <p>
          Lit-Fiesta unfolds as a grand literature extravaganza, where the
          immerse captivating fusion of authors, poets, and literary enthusiasts
          as they weave tales, share insights, and explore the diverse
          landscapes of verse revelries. Step into this three-day odyssey, where
          literary prowess takes center stage, and let the words weave a
          tapestry of inspiration and excellence.
        </p>
      </div>
    </div>
  </section>
</template>

<style>
.line {
  display: block;
  width: 100%;
  height: fit-content;
  padding: 0.7% 5%;
  margin-top: 5px;
  text-decoration: none;
  color: #000;
  font-weight: 600;
  background-color: var(--theme2);
}

.line:first-child {
  background-color: var(--theme1);
}

.line:last-child:hover {
  background-color: var(--theme1);
}
.line:hover {
  background-color: var(--theme2);
  padding-left: 7%;
  transition: all 7s ease-in;
  cursor: pointer;
}

.head-space-cont {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: flex-end;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background-position: center !important;
}

.head-space-cont div {
  margin-bottom: 75px;
  width: 70%;
  background: linear-gradient(to right, #000, #0000001f);
  padding: 1% 5%;
  transition: all 5s ease-in-out;
  min-height: fit-content;
}
.head-space-cont div .more {
  display: none;
  opacity: 0;
  background-color: #00000000;
  transition: all 5s ease-in-out;
}
.head-space-cont div p {
  background-color: #00000000;
}

.heading {
  background-color: #00000000;
  font-size: 3rem;
  text-align: left;
  color: #fff;
  padding: 1% 2%;
  border-left: 10px solid var(--theme1);
}

.head-space-cont div.active {
  bottom: 75px;
  .more {
    display: inline;
    opacity: 1;
  }
}

#about {
  background: linear-gradient(#00000079, #00000079),
    url(../assets/images/about.JPG);
}

@media screen and (max-width: 350px) {
  .head-space-cont div {
    width: 100%;
  }

  .line {
    font-size: smaller;
  }
}
</style>

<script>
export default {
  data() {
    return {
      isHovered: false,
    };
  },
  methods: {
    handleHover(event) {
      this.isHovered = event.type === "mouseenter";
    },
  },
};
</script>

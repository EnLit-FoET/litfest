<template>
  <div class="divider">
    <a href="#register" class="line">Register Now >>></a>
    <a href="#events" class="line">Know More About Competitions >>></a>
  </div>
  <section id="about" class="head-space-cont">
    <div
      :class="{ active: isHovered }"
      @mouseenter="handleHover"
      @mouseleave="handleHover"
    >
      <h1 class="heading">About Lit-Fest</h1>
      <div class="more">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel veniam
          maxime dolores eius dolorum, odit magni provident est odio nesciunt
          quasi error tempora doloremque accusamus.
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
}

.line:first-child {
  background-color: var(--theme1);
}

.line:last-child {
  background-color: var(--theme2);
}
.line:hover {
  background-color: white;
  padding-left: 7%;
  transition: all 7s ease-in;
  cursor: pointer;
}

#about {
  background: linear-gradient(#00000079, #00000079),
    url(../assets/images/about.JPG);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
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

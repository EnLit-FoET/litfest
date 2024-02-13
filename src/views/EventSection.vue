<template>
  <div class="line" style="background-color: #fcc6d3">
    <a href="#">Lets gooooooooo >>></a>
  </div>
  <div class="line" style="background-color: #68e8e8">
    <a href="#">Lets gooooooooo >>></a>
  </div>
  <section id="events">
    <h1 class="main-heading">Events</h1>
    <section id="sec1">
      <h1 class="event-head">Alphaaz</h1>
      <div>
        <img src="">
      </div>
    </section>
    <section id="sec2">
      <h1 class="event-head">RangRaaz</h1>
      <div>
      </div>
    </section>
    <section id="sec3">
      <h1 class="event-head">Word Odyssey</h1>
      <div>
        <article>
          <header>Creative Writing</header>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            necessitatibus!
          </p>
        </article>
      </div>
    </section>
    <section id="sec4">
      <h1 class="event-head">Fables and Tales</h1>
      <div>
        <article>
          <header>Creative Writing</header>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            necessitatibus!
          </p>
        </article>
      </div>
    </section>
  </section>
</template>

<style>
.main-heading {
  margin-top: 3%;
  font-size: 4rem;
  text-align: center;
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

.line {
  width: 100%;
  height: fit-content;
  padding: 0.7% 5%;
  margin-top: 5px;
}

.line a{
  text-decoration: none;
  color: #000;
  

}
</style>

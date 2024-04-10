<template>
  <div class="timeline-sec">
    <h1 class="main-heading" style="padding: 2%; margin: 0">
      <span style="color: teal;">The Timeline</span>
    </h1>
    <section class="timeline">
      <div class="info">
        <h2>Lit Fest</h2>
        <p>
          This is how the sequence of events will take place at LitFest, University of Lucknow.
        </p>
      </div>

      <ol>
        <li v-for="(n, i) in timeLine" :key="i">
          <div>
            <time>{{ n.time }}</time>
            <p class="date">&lt;{{ n.day }}&gt;</p>
            <p>{{ n.event }}</p>
          </div>
        </li>

        <li></li>
      </ol>
    </section>
  </div>
  <TeamComp />
</template>

<style>
:root {
  --white: #fff;
  --black: #323135;
  --crystal: #e4e3e3;
}
.timeline-sec {
  margin: 0;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.timeline {
  position: relative;
  white-space: nowrap;
  max-width: 100%;
  padding: 0 10px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 320px auto;
  height: 480px;
}

.timeline::before,
.timeline::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 30px;
  width: 100px;
  z-index: 2;
}

.timeline .info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 40px;
  color: var(--white);
  background: rgba(0, 128, 128, 0.1);
  box-shadow: 0 8px 32px 0 rgba(0, 128, 128, 0.3);
  z-index: 10;
  border: 2px solid rgba(0, 128, 128, 0.7);
  backdrop-filter: blur(25px);
  white-space: normal;
  border-radius: 10px;
  height: 423px;
}

.timeline .info img {
  margin-bottom: 20px;
}
.timeline .info h2 {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-weight: 600;
}

.timeline .info p {
  margin-top: 10px;
  color: #fff;
}

.timeline ol::-webkit-scrollbar {
  display: none;
}

.timeline ol {
  font-size: 0;
  height: 423px;
  padding-top: 216px;
  margin: 0;
  transition: all 1s;
  overflow-y: hidden;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.timeline ol li {
  position: relative;
  display: inline-block;
  list-style-type: none;
  width: 160px;
  height: 5px;
  background: #fff;
  scroll-snap-align: start;
  cursor: default;
}

.timeline ol li:last-child {
  width: 340px;
}

.timeline ol li:not(:first-child) {
  margin-left: 14px;
}

.timeline ol li:not(:last-child)::after {
  content: "";
  position: absolute;
  top: 50%;
  left: calc(100% + 1px);
  bottom: 0;
  width: 16px;
  height: 16px;
  transform: translateY(-50%);
  border-radius: 50%;
  background: var(--theme1);
  z-index: 1;
}

.timeline ol li div {
  position: absolute;
  left: calc(100% + 7px);
  width: 280px;
  padding: 15px;
  font-size: 1rem;
  white-space: normal;
  color: var(--white);
  background: rgb(255, 255, 255, 0.1);
  border: 2px solid rgb(255, 255, 255, 0.7);
  z-index: 9;
  backdrop-filter: blur(25px);
  border-radius: 0 10px 10px 10px;
}
.timeline ol li div:hover {
  border: 2px solid rgb(255, 255, 255, 0.8);
  backdrop-filter: blur(25px);
  box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.3);
}

.timeline ol li div::before {
  content: "";
  position: absolute;
  top: 100%;
  left: 0;
  width: 0;
  height: 0;
  border-style: solid;
}

.timeline ol li:nth-child(odd) div {
  top: -16px;
  transform: translateY(-100%);
  border-radius: 10px 10px 10px 0;
}

.timeline ol li:nth-child(odd) div::before {
  top: 100%;
  border-width: 8px 8px 0 0;
  border-color: #fff transparent transparent transparent;
}

.timeline ol li:nth-child(even) div {
  top: calc(100% + 16px);
}

.timeline ol li:nth-child(even) div::before {
  top: -8px;
  border-width: 8px 0 0 8px;
  border-color: transparent transparent transparent #fff;
}

.timeline time {
  display: block;
  font-size: 1.4rem;
  font-weight: bold;
  color: var(--theme1);
  line-height: 20px;
}
.timeline .date {
  display: block;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: #e3e3e3;
  text-transform: uppercase;
}
.timeline p {
  display: block;
  font-size: 1.1rem;
  margin-left: 5px;
}

/* MEDIA QUERIES
  –––––––––––––––––––––––––––––––––––––––––––––––––– */
@media screen and (max-width: 800px) {
  .timeline {
    display: block;
  }

  .timeline::before,
  .timeline::after {
    width: 50px;
  }

  .timeline::before {
    left: 0;
  }

  .timeline .info {
    display: none;
  }
}
</style>

<script>
import TeamComp from '@/components/TeamComp.vue';
export default {
  name: "TimeShedule",
  components: { TeamComp },
  data() {
    return {
      timeLine: [
        {
          time: "9:00 am",
          day: "DAY 1",
          event: "Hello World",
        },
        {
          time: "9:00 am",
          day: "Day 1",
          event: "Hello World",
        },
        {
          time: "9:00 am",
          day: "Day 1",
          event: "Hello World",
        },
        {
          time: "9:00 am",
          day: "Day 1",
          event: "Hello World",
        },
        {
          time: "9:00 am",
          day: "Day 1",
          event: "Hello World",
        },
        {
          time: "9:00 am",
          day: "Day 1",
          event: "Hello World",
        },
        {
          time: "9:00 am",
          day: "Day 1",
          event: "Hello World",
        },
        {
          time: "9:00 am",
          day: "Day 1",
          event: "Hello World",
        },
        {
          time: "9:00 am",
          day: "Day 1",
          event: "Hello World",
        },
        {
          time: "9:00 am",
          day: "Day 1",
          event: "Hello World",
        },
        {
          time: "9:00 am",
          day: "Day 1",
          event: "Hello World",
        },
        {
          time: "9:00 am",
          day: "Day 1",
          event: "Hello World",
        },
        {
          time: "9:00 am",
          day: "Day 1",
          event: "Hello World",
        },
        {
          time: "9:00 am",
          day: "Day 1",
          event: "Hello World",
        },
        {
          time: "9:00 am",
          day: "Day 1",
          event: "Hello World",
        },
      ],
    };
  },
};
</script>

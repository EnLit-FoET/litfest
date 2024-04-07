<template>
  <div id="countdown">
    <div>
      <span class="cal">{{ displayDays }}</span>
      <span class="cap theme1"> Days</span>
    </div>
    <div>
      <span class="cal">{{ displayHours }}</span>
      <span class="cap theme2"> Hours</span>
    </div>
    <div>
      <span class="cal">{{ displayMinutes }}</span>
      <span class="cap theme1"> Minutes</span>
    </div>
    <div>
      <span class="cal">{{ diaplaySeconds }}</span>
      <span class="cap theme2"> Seconds</span>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    displayDays: 0,
    displayHours: 0,
    displayMinutes: 0,
    diaplaySeconds: 0,
  }),

  computed: {
    seconds: () => 1000,
    minutes() {
      return this.seconds * 60;
    },
    hours() {
      return this.minutes * 60;
    },
    days() {
      return this.hours * 24;
    },
  },
  mounted(){
    this.showRemaining();
  },
  methods: {
    showRemaining() {
      const timer = setInterval(() => {
        const now = new Date();
        const end = new Date(2024, 3, 24, 10, 10, 10);
        const distance = end.getTime() - now.getTime();
        if (distance<0){
          clearInterval(timer);
          return
        }

        const days = Math.floor(distance/this.days);
        const hours = Math.floor((distance%this.days) / this.hours);
        const minutes = Math.floor((distance%this.hours) / this.minutes);
        const seconds = Math.floor((distance%this.minutes) / this.seconds);
        this.displayMinutes = minutes <10? "0" + minutes : minutes;
        this.diaplaySeconds = seconds <10? "0" + seconds : seconds;
        this.displayHours = hours <10? "0" + hours : hours;
        this.displayDays = days <10? "0" + days : days;

      },1000);
    },
  },
};
</script>

<style>

.cal {
  font-size: 2em;
}
.cap {
  font-size: 0.9em;
}

#countdown {
  color: white;
  display: flex;
  margin: 25px 0;
  min-width: fit-content;
}
#countdown div {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;
}

/* --------------media-querry------------ */

@media screen and (max-width: 430px) {
  .cal {
    font-size: 1.5em;
  }
  #countdown {
    width: fit-content;
  }
  .cap {
    font-size: 0.8em;
  }

  #countdown div {
    margin: 0 4px;
  }
}
</style>

<template>
  <div class="rule">
    <h1 class="main-heading" style="color: teal;">
      <span>Meet The Team</span>
    </h1>
    <!-- ---------team card --------- -->
    <p class="highlight">Core Team</p>
    <div class="speaker" >
      <div
        class="pb-5 anime"
        v-for="member in team"
        :key="member.title"
      >
        <div class="card " style="height: 310px; width: 250px;">
          <img
            :src="`https://github.com/${member.github}.png`"
            class="card-img-top"
            :alt="imageAlt"
          />
          <div class="card-body w-100 d-flex flex-column align-items-center">
            <h5 class="card-title w-100">{{ member.title }}</h5>
            
          </div>
        </div>
      </div>
    </div>
    <!-- ---------speaker card --------- -->
  </div>
</template>

<style>

.speaker{
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
}
.anime h5 {
  color: #faf1e6;
  font-size: 1.2em;
  text-align: center;
}

.anime {
  transition: 0.3s transform;
  margin-top: 11px;
}

.anime:hover {
  transform: scale(1.05);
}
.rule {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}


.highlight {
  font-size: 2em !important;
  color: #fff !important;
  font-weight: 700 !important;
}
p span {
  color: var(--theme1);
  font-weight: 500;
  font-size: larger;
}



.card {
  background-color: rgb(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(25px);
  box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.card img{
  width: 100%;
}

@media screen and (max-width: 531px) {
  .speaker{
    flex-direction: column;
  }
  
}
</style>

<script>
export default {
  data() {
    return {
        team: [
          {
            title: "Siddhartha Mishra",
            github: "SiddharthaMishra-dev",
          },
          {
            title: "Arvind Srivastav",
            github: "alwenpy",
          },
        ]
    };
  },
};
</script>

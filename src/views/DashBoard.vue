<template>
  <div class="container" :aria-busy="this.loading">
    <div v-if="!loading">
      <p v-if="this.user">Welcome {{ user.displayName }}</p>
    </div>

    <nav style="justify-content: center">
      <ul>
        <li>
          <a href="#" @click.prevent="showComponent('ProfileComp')">Profile</a>
        </li>
        <li>
          <a href="#" @click.prevent="showComponent('RuleBook')">Rulebooks</a>
        </li>
        <li>
          <a href="#" @click.prevent="showComponent('NoticeComp')">Notices</a>
        </li>
      </ul>
    </nav>

    <div>
      <component :is="selectedComponent"></component>
    </div>
  </div>
</template>
<script>
import CompetitionSection from "./CompetitionSection.vue";
import NoticeComp from "@/components/dasboard/NoticeComp.vue";
import ProfileComp from "@/components/dasboard/ProfileComp.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";
export default {
  name: "DashBoard",
  data() {
    return {
      user: null,
      loading: true,
      selectedComponent: ProfileComp,
    };
  },
  created() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        this.$router.push("/");
      } else {
        this.user = user;
        this.loading = false;
      }
    });
  },
  methods: {
    showComponent(componentName) {
      switch (componentName) {
        case "ProfileComp":
          this.selectedComponent = ProfileComp;
          break;
        case "RuleBook":
          this.selectedComponent = CompetitionSection;
          break;
        case "NoticeComp":
          this.selectedComponent = NoticeComp;
          break;
        default:
          this.selectedComponent = ProfileComp;
      }
    },
  },
};
</script>

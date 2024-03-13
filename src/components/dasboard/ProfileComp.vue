<template>
    <div class="profile">
      <h2>Profile</h2>
      <form @submit.prevent="saveProfile">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="profile.name" required />
        </div>
        <div class="form-group">
          <label for="phone">Phone Number</label>
          <input type="tel" id="phone" v-model="profile.phone" required />
        </div>
        <div class="form-group">
          <label for="college">College</label>
          <select id="college" v-model="profile.college" required>
            <option value="College A">College A</option>
            <option value="College B">College B</option>
            <option value="College C">College C</option>
          </select>
        </div>
        <div class="form-group">
          <label for="year">Year of Study</label>
          <input type="text" id="year" v-model="profile.yearOfStudy" required />
        </div>
        <div class="form-group">
          <label for="team">Team Name</label>
          <input type="text" id="team" v-model="profile.teamName" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="profile.email" disabled />
        </div>
  
        <div v-if="error" class="error-message">{{ error }}</div>
  
        <button type="submit">Save Profile</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { getAuth } from "firebase/auth";
  import { getFirestore, doc, updateDoc, getDoc } from "firebase/firestore";
  
  export default {
    setup() {
      const auth = getAuth();
      const db = getFirestore();
  
      const profile = ref({
        name: '',
        phone: '',
        college: '',
        yearOfStudy: '',
        teamName: '',
        email: '',
      });
  
      const error = ref(null);
  
      // Function to fetch user's email from Firestore
      const fetchEmail = async () => {
        try {
          const user = auth.currentUser;
          if (user) {
            const userDoc = doc(db, 'users', user.uid);
            const userSnap = await getDoc(userDoc);
            if (userSnap.exists()) {
              profile.value.email = userSnap.data().email;
            }
          }
        } catch (err) {
          console.error('Error fetching email:', err);
          error.value = 'An error occurred while fetching your email.';
        }
      };
  
      // Call fetchEmail when component is mounted
      onMounted(fetchEmail);
  
      // Function to save profile data
      const saveProfile = async () => {
        try {
          const user = auth.currentUser;
          if (user) {
            const userDoc = doc(db, 'users', user.uid);
            await updateDoc(userDoc, profile.value);
            console.log('Profile saved successfully!');
          }
        } catch (err) {
          console.error('Error saving profile:', err);
          error.value = 'An error occurred while saving your profile.'; // Update error state for display
        }
      };
  
      return {
        profile,
        error,
        saveProfile
      };
    }
  };
  </script>
  
  <style scoped>
  /* Add your component styles here */
  </style>
  
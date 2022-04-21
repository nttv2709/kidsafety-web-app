<template>
  <div class="frame position-absolute top-50 start-50 translate-middle">
    <form @submit.prevent='login'>
      <div class="frame avt-user rounded-circle">
      </div>
      <div class="content">
        <div class="mb-3">
          <label for="baby-name">Baby name</label>
          <input type="text" class="form-control rounded-pill" v-model="baby_form.baby_name"  id="baby-name" aria-describedby="babyName" >
        </div>
        <div class="mb-3">
          <label for="baby-birth">Baby birth</label>
          <input type="date" class="form-control rounded-pill" v-model="baby_form.baby_birth"  id="baby-birth" aria-describedby="babyBirth" >
        </div>
        <div class="mb-3">
          <label for="baby-height">Baby height</label>
          <input type="number" class="form-control rounded-pill" v-model="baby_form.baby_height" id="baby-height" aria-describedby="babyHeight" ><span> cm</span>
        </div>
        <div class="mb-3">
          <label for="baby-weight">Baby weight</label>
          <input type="number" class="form-control rounded-pill" v-model="baby_form.baby_weight" id="baby-weight" aria-describedby="babyWeight" > kg
        </div>
        <div class="mb-3">
          <label for="parent-name">Parent name</label>
          <input type="text" class="form-control rounded-pill" v-model="baby_form.parent_name"  id="parent-name" aria-describedby="parentName" >
        </div>
        <div class="mb-3">
          <label for="parent-phone">Parent phone</label>
          <input type="tel" class="form-control rounded-pill" v-model="baby_form.parent_phone"  id="parent-phone" aria-describedby="parentPhone" required>
        </div>
      </div>
      <div class="container-fluid">
        <button type="submit" class="btn1 btn rounded-pill" @click="save">Save</button>
      </div>
</form>
  </div>
</template>

<script>
// import { useStore } from 'vuex'
// import { ref } from 'vue'
import { auth } from '../firebase'
import { ref, get, set } from 'firebase/database'
import { ref as reff } from 'vue'

import StatusDataService from '../services/StatusDataService'

/* eslint-disable */
export default {
  name: 'InfoUser',
  data () {
    console.log(auth.currentUser)
    const baby_form = reff({})
    const db = StatusDataService.getAll()
    get(ref(db, 'babys/' + auth.currentUser.uid)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val())
    baby_form.value = snapshot.val()
    console.log(baby_form.value)
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});
    
    return {
      baby_form
    }
  },
  methods : {
    save() {
      console.log(this.baby_form)
      console.log(auth.currentUser.uid)
      const db = StatusDataService.getAll()
      set(ref(db, 'babys/' + auth.currentUser.uid), this.baby_form)
    }
  }
  }

</script>

<style scoped>
form {
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 25px;
    margin: 5rem;
    padding: 2rem 4rem;
  }
  .content {
    text-align: left;
  }
  .btn {
    margin-top: 25px;
padding: 0.75rem 1.25rem;
  }
    .btn1 {
    background-color: #557DCA;
    color: white;
  }
  .btn2 {
    background-color: #ffffff;
    border-color: #557DCA;
    color: black;
  }
  .avt-user {
    background-image: url('../assets/user.png');
  }
</style>

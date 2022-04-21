<template>
  <div class="container-fluid position-absolute top-50 start-50 translate-middle" id="frame">
    <form @submit.prevent='login'>
      <div class=" image d-flex flex-column justify-content-center align-items-center mb-3"> <button class="btn btn-secondary rounded-circle"> <img src="../assets/user.png" height="100" width="100" /></button> <span class="name mt-3">User information</span></div>
      <div class="content row align-items-start">
        <div class="baby col">
          <div class="mb-3">
            <label for="babyName" class="form-label">Baby name</label>
            <input type="text" class="form-control rounded-pill" v-model="babyName"  id="baby-name" aria-describedby="babyName" required>
          </div>
          <div class="mb-3">
            <label for="babyName" class="form-label">Baby birthday</label>
            <input type="date" class="form-control rounded-pill" v-model="babyBirth"  id="baby-birth" aria-describedby="babyBirth" required>
          </div>
          <div class="mb-3 input-group">
            <label for="babyName" class="form-label">Baby height</label>
            <div class="input-group">
              <input type="number" class="form-control rounded-pill" v-model="babyHeight" id="baby-height" aria-describedby="babyHeight" required>
              <span class="align-items-center"> cm</span>
            </div>
          </div>
          <div class="mb-3">
            <label for="babyName" class="form-label">Baby weight</label>
            <div class="input-group">
              <input type="number" class="form-control rounded-pill" v-model="babyWeight" id="baby-weight" aria-describedby="babyWeight" required>
              <span class="text-center align-middle">kg</span>
            </div>
          </div>
        </div>
        <div class="parent col">
          <div class="mb-3">
            <label for="parentName" class="form-label">Parent name</label>
            <input type="text" class="form-control rounded-pill" v-model="parentName"  id="parent-name" aria-describedby="parentName" required>
          </div>
          <div class="mb-3">
            <label for="parentPhone" class="form-label">Parent phone</label>
            <input type="tel" class="form-control rounded-pill" v-model="parentPhone"  id="parent-phone" aria-describedby="parentPhone" required>
          </div>
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
import { ref, get } from 'firebase/database'
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
  methods: {
    updateValue () {
      document.getElementById('baby-name').value = this.babyName
      document.getElementById('baby-birth').value = this.babyBirth
      document.getElementById('baby-height').value = this.babyHeight
      document.getElementById('baby-weight').value = this.babyWeight
      document.getElementById('parent-name').value = this.parentName
      document.getElementById('parent-phone').value = this.parentPhone
    }
  },
  mounted () {
    this.updateValue()
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
  .name {
    color: #557DCA;
  }
  #frame {
    width: 75vw;
  }
</style>

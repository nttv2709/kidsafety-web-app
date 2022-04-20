<template>
  <div class="frame position-absolute top-50 start-50 translate-middle">
    <form @submit.prevent='login'>
      <div class="frame avt-user rounded-circle">
      </div>
      <div class="content">
        <div class="mb-3">
          <input type="text" class="form-control rounded-pill" v-model="babyName"  id="baby-name" aria-describedby="babyName" required>
        </div>
        <div class="mb-3">
          <input type="date" class="form-control rounded-pill" v-model="babyBirth"  id="baby-birth" aria-describedby="babyBirth" required>
        </div>
        <div class="mb-3">
          <input type="number" class="form-control rounded-pill" v-model="babyHeight" id="baby-height" aria-describedby="babyHeight" required><span> cm</span>
        </div>
        <div class="mb-3">
          <input type="number" class="form-control rounded-pill" v-model="babyWeight" id="baby-weight" aria-describedby="babyWeight" required> kg
        </div>
        <div class="mb-3">
          <input type="text" class="form-control rounded-pill" v-model="parentName"  id="parent-name" aria-describedby="parentName" required>
        </div>
        <div class="mb-3">
          <input type="tel" class="form-control rounded-pill" v-model="parentPhone"  id="parent-phone" aria-describedby="parentPhone" required>
        </div>
      </div>
      <div class="container-fluid">
        <button type="submit" class="btn1 btn rounded-pill">Save</button>
      </div>
</form>
  </div>
</template>

<script>
// import { useStore } from 'vuex'
// import { ref } from 'vue'
import { auth } from '../firebase'
import { ref, get } from 'firebase/database'

import StatusDataService from '../services/StatusDataService'

/* eslint-disable */
export default {
  name: 'InfoUser',
  data () {
    // const db = getDatabase(app)
    // console.log(db)
    console.log(auth)
    const db = StatusDataService.getAll()
    get(ref(db, 'babys/' + auth.currentUser.uid)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.babyName);
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});
    
    return {
      babyName: 'Baby name',
      babyBirth: '01/01/2000',
      babyHeight: 0,
      babyWeight: 0,
      parentName: 'Parent name',
      parentPhone: '0000000'
    }
  },
  mounted () {
    document.getElementById('baby-name').value = this.babyName
    document.getElementById('baby-birth').value = this.babyBirth
    document.getElementById('baby-height').value = this.babyHeight
    document.getElementById('baby-weight').value = this.babyWeight
    document.getElementById('parent-name').value = this.parentName
    document.getElementById('parent-phone').value = this.parentPhone

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

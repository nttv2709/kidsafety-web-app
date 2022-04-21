<template>
<div class="float-sm-start row rounded-pill g-0 m-5 bg-light position-relative" style="width:20%; background-color: white;">
  <div class="col-md-6 mb-md-0 p-md-4">
    <img src="../../assets/hot.png" class="w-100" alt="...">
  </div>
  <div class="col-md-6 p-4 ps-md-0">
    <h1 class="value py-3">{{ currentValue }}<span>&#x2103;</span></h1>
    <p class="text-start">Status: {{ status }}</p>
  </div>
</div>
</template>

<script>
import StatusDataService from '../../services/StatusDataService'
import { onValue, ref } from 'firebase/database'
export default {
  name: 'TempStatus',
  data () {
    return {
      currentValue: '',
      temperature: [],
      status: ''
    }
  },
  mounted () {
    onValue(ref(StatusDataService.getAll(), '/iot/temp'), (snapshot) => {
      const data = snapshot.val()
      this.currentValue = data.value
      this.temperature.push(this.currentValue)
      if (this.currentValue >= 27 && this.currentValue < 32) {
        this.status = 'Normal'
      } else if (this.currentValue >= 25 && this.currentValue < 27) {
        this.status = 'Cool'
      } else { this.status = 'Hot' }
    })
  }
}
</script>
<style scoped>
span {
  content: "\2103";
}
</style>

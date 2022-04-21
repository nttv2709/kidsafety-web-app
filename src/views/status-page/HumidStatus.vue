<template>
<div class="row rounded-pill m-5 bg-light position-relative" style="width:20%">
  <div class="col-md-6 mb-md-0 p-md-4">
    <img src="../../assets/humid.png" class="w-100" alt="...">
  </div>
  <div class="col-md-6 p-4 ps-md-0">
    <h1 class="value py-3">{{ currentValue }}%</h1>
    <p class="text-start">Status: {{ status }}</p>
  </div>
</div>
</template>

<script>
import StatusDataService from '../../services/StatusDataService'
import { onValue, ref } from 'firebase/database'
export default {
  name: 'HumidStatus',
  props: { getHumid: Function },
  data () {
    return {
      currentValue: '',
      humid: [],
      status: ''
    }
  },
  mounted () {
    onValue(ref(StatusDataService.getAll(), '/iot/humi'), (snapshot) => {
      const data = snapshot.val()
      this.currentValue = data.value
      this.humid.push(this.currentValue)
      this.getHumid(this.humid)
      if (this.currentValue >= 50) {
        this.status = 'High'
      }
    })
  }
}
</script>

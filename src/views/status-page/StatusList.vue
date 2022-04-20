<template>
<sound-status></sound-status>
<div class="humid">
  <humid-status :getHumid='getHumid'></humid-status>
</div>
<div class="temp">
  <temp-status></temp-status>
</div>
<!-- <line-chart></line-chart> -->
</template>

<script>
import HumidStatus from './HumidStatus.vue'
import TempStatus from './TempStatus.vue'
// import LineChart from './LineChart.vue'
import SoundStatus from './SoundStatus.vue'
export default {
  name: 'StatusList',
  components: { HumidStatus, TempStatus, SoundStatus },
  data () {
    return {
      humid: [],
      sound: [],
      temp: []
    }
  },
  methods: {
    getHumid (humidValues) {
      this.humid = humidValues
    },
    getSound (soundValues) {
      this.sound = soundValues
    },
    getTemp (tempValues) {
      this.temp = tempValues
    }
  }
}
</script>

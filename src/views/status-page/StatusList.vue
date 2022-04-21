<template>
<div class="container">
    <sound-status></sound-status>
    <humid-status></humid-status>
    <temp-status></temp-status>
  <div class="position-absolute top-50 end-0 translate-middle-y">
    <line-chart></line-chart>
  </div>
</div>
</template>

<script>
// import HumidStatus from './HumidStatus.vue'
import TempStatus from './TempStatus.vue'
import SoundStatus from './SoundStatus.vue'
import LineChart from './LineChart.vue'
import HumidStatus from './HumidStatus.vue'

export default {
  name: 'StatusList',
  components: { TempStatus, SoundStatus, LineChart, HumidStatus },
  data () {
    return {
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

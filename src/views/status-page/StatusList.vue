<template>
<div class="d-flex justify-content-center">
    <sound-status></sound-status>
    <humid-status></humid-status>
    <temp-status></temp-status>
</div>
<div class="p-5 row align-items-start">
  <div class="col">
  <news-list></news-list>
  </div>
  <div class="col-6">
  <line-chart></line-chart>
  </div>
</div>
</template>

<script>
import TempStatus from './TempStatus.vue'
import SoundStatus from './SoundStatus.vue'
import HumidStatus from './HumidStatus.vue'
import NewsList from './NewsList.vue'
import LineChart from './LineChart.vue'

export default {
  name: 'StatusList',
  components: { LineChart, TempStatus, SoundStatus, HumidStatus, NewsList }
}
</script>

<template>
<div class="humid">
  <humid-status></humid-status>
</div>
<div class="temp">
  <temp-status></temp-status>
</div>
<div class="sound">
  <sound-status></sound-status>
</div>
</template>

<script>
import HumidStatus from './HumidStatus.vue'
import TempStatus from './TempStatus.vue'
import SoundStatus from './SoundStatus.vue'
export default {
  name: 'StatusList',
  components: { HumidStatus, TempStatus, SoundStatus }
}
</script>

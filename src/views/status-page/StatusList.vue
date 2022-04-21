<template>
<div class="d-flex justify-content-center">
    <sound-status></sound-status>
    <humid-status></humid-status>
    <temp-status></temp-status>
</div>
<div class="p-5">
  <news-list></news-list>
</div>
</template>

<script>
import TempStatus from './TempStatus.vue'
import SoundStatus from './SoundStatus.vue'
import HumidStatus from './HumidStatus.vue'
import NewsList from './NewsList.vue'

export default {
  name: 'StatusList',
  components: { TempStatus, SoundStatus, HumidStatus, NewsList }
}
</script>

<template>
<div class="d-flex justify-content-center">
  <div class="humid ">
    <humid-status></humid-status>
  </div>
  <div class="temp">
    <temp-status></temp-status>
  </div>
</div>
  <div class="sound">
    <sound-status></sound-status>
  </div>
</template>

<script>
import HumidStatus from './HumidStatus.vue'
import TempStatus from './TempStatus.vue'
import SoundStatus from './SoundStatus.vue'
// import StatusDataService from '../../services/StatusDataService'
// import { onValue, ref } from 'firebase/database'
// export default {
//   name: 'StatusList',
//   data () {
//     return {
//       currentValue: '',
//       currentIndex: -1
//     }
//   },
//   mounted () {
//     onValue(ref(StatusDataService.getAll(), 'humi'), (snapshot) => {
//       const data = snapshot.val()
//       this.currentValue = data.value
//     })
//   }
// }
export default {
  name: 'StatusList',
  components: { HumidStatus, TempStatus, SoundStatus }
}
</script>

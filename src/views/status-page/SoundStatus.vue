<template>
<div class="crying" v-if="crying">
<div class="alert alert-success" role="alert">
  <h4 class="alert-heading">SOS</h4>
</div>
  </div>
</template>

<script>
import StatusDataService from '../../services/StatusDataService'
import { onValue, ref } from 'firebase/database'
export default {
  name: 'SoundStatus',
  data () {
    return {
      currentValue: '',
      crying: false
    }
  },
  mounted () {
    onValue(ref(StatusDataService.getAll(), '/iot/sound'), (snapshot) => {
      const data = snapshot.val()
      this.currentValue = data.value
      if (this.currentValue >= 50) {
        this.crying = true
      }
    })
  }
}
</script>

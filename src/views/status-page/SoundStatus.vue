<template>
<div class="crying" v-if="crying">
<div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Well done!</h4>
  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
  <hr>
  <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
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
      crying: true
    }
  },
  mounted () {
    onValue(ref(StatusDataService.getAll(), 'sound'), (snapshot) => {
      const data = snapshot.val()
      this.currentValue = data.value
      if (this.currentValue >= 50) {
        this.crying = true
      }
    })
  }
}
</script>

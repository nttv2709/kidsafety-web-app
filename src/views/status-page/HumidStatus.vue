<template>
  <div class="card m-5" style="width: 18rem; border-radius: 40px;">
    <div class="card-body">
      <h5 class="card-title">{{ currentValue }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>
</template>

<script>
import StatusDataService from '../../services/StatusDataService'
import { onValue, ref } from 'firebase/database'
export default {
  name: 'HumidStatus',
  data () {
    return {
      currentValue: ''
    }
  },
  mounted () {
    onValue(ref(StatusDataService.getAll(), 'humi'), (snapshot) => {
      const data = snapshot.val()
      this.currentValue = data.value
    })
  }
}
</script>
<style scoped>

</style>

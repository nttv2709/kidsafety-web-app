<template>
<div class="modal" id="id1">
  <div class="modal-dialog position-absolute w-75 top-50 start-50 translate-middle">
    <div class="modal-content " style="border-radius: 25px">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" @click="hiddenNotify" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Baby is crying</p>
      </div>
    </div>
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
      sound: [],
      crying: false
    }
  },
  mounted () {
    onValue(ref(StatusDataService.getAll(), '/iot/sound'), (snapshot) => {
      const data = snapshot.val()
      this.currentValue = data.value
      this.sound.push(this.currentValue)
      if (this.currentValue >= 50) {
        this.crying = true
        this.displayNotify()
      }
    })
  },
  methods: {
    displayNotify () {
      document.getElementById('id1').style.display = 'block'
    },
    hiddenNotify () {
      document.getElementById('id1').style.display = 'none'
    }
  }
}
</script>
<style scoped>
  .modal {
    position: absolute;
  }
</style>

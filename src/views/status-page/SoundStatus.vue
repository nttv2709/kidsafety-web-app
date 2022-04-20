<template>
<div class="row rounded-pill g-0 m-5 bg-light position-relative" style="width:20%">
  <div class="col-md-6 mb-md-0 p-md-4">
    <img v-if="crying == 3" src="../../assets/cry2.png" class="w-100" alt="...">
    <img v-else-if="crying == 2" src="../../assets/cry1.png" class="w-100" alt="...">
    <img v-else-if="crying == 1" src="../../assets/smile.png" class="w-100" alt="...">
    <img v-else src="../../assets/sleepy.png" class="w-100" alt="...">
  </div>
</div>
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
      crying: 0
    }
  },
  mounted () {
    onValue(ref(StatusDataService.getAll(), '/iot/sound'), (snapshot) => {
      const data = snapshot.val()
      this.currentValue = data.value
      this.sound.push(this.currentValue)
      if (this.currentValue >= 70) {
        this.crying = 3
        this.displayNotify()
      } else if (this.currentValue >= 40 && this.currentValue < 70) {
        this.crying = 2
        this.displayNotify()
      } else if (this.currentValue > 0 && this.currentValue < 40) {
        this.crying = 1
      } else this.crying = 0
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

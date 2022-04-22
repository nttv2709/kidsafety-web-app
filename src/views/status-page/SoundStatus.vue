<template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <div class="card bg-c-pink order-card rounded-pill w-50">
      <div class="card-block">
          <h6 class="h5 m-b-20">Baby Status</h6>
          <h2 class="text-right d-flex justify-content-center">
            <div class="col-md-4 mb-md-6 p-md-6">
              <img v-if="crying == 3" src="../../assets/cry2.png" alt="...">
              <img v-else-if="crying == 2" src="../../assets/cry1.png" alt="...">
              <img v-else-if="crying == 1" src="../../assets/smile.png" alt="...">
              <img v-else src="../../assets/sleepy.png" alt="...">
            </div>
          </h2>
      </div>
  </div>
  <div class="notice">
<div class="modal faded" id="id1">
  <div class="modal-dialog position-absolute w-75 top-50 start-50 translate-middle">
    <div class="modal-content" style="border-radius: 25px; ">
      <div class="modal-header" style="border-radius: 25px 25px 0px 0px; background: #ab204a; color: white">
        <button type="button" class="btn-close" @click="hiddenNotify" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h5>Baby is crying</h5>
      </div>
    </div>
  </div>
</div>
  <div class="modal-backdrop" id="modal-backdrop"></div>
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
      status: '',
      crying: 0
    }
  },
  mounted () {
    onValue(ref(StatusDataService.getAll(), '/iot/sound'), (snapshot) => {
      const data = snapshot.val()
      this.currentValue = data.value
      if (this.currentValue >= 70) {
        this.crying = 3
        this.status = 'Crying'
        this.displayNotify()
      } else if (this.currentValue >= 40 && this.currentValue < 70) {
        this.crying = 2
        this.status = 'Crying'
        this.displayNotify()
      } else if (this.currentValue > 0 && this.currentValue < 40) {
        this.crying = 1
        this.status = 'Smiling'
      } else {
        this.crying = 0
        this.status = 'Sleeping'
      }
    })
  },
  methods: {
    displayNotify () {
      document.getElementById('modal-backdrop').style.display = 'block'
      document.getElementById('id1').style.display = 'block'
    },
    hiddenNotify () {
      document.getElementById('id1').style.display = 'none'
      document.getElementById('modal-backdrop').style.display = 'none'
    }
  }
}
</script>
<style scoped>
  .modal {
    position: absolute;
  }
  .wrapper{
    -webkit-filter: blur(8px);
    -ms-filter: blur(8px);
    -moz-filter: blur(8px);
    -o-filter: blur(8px);
    filter: blur(8px);
  }
  body{
    background:#FAFAFA;
}
.order-card {
    color: #fff;
}

.bg-c-pink {
  background: #c36b85;
    /* background: linear-gradient(45deg,#dea2b4,#b75a47); */
}

.card {
    border-radius: 5px;
    -webkit-box-shadow: 0 1px 2.94px 0.06px rgba(4,26,55,0.16);
    box-shadow: 0 1px 2.94px 0.06px rgba(4,26,55,0.16);
    border: none;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}
.card .card-block {
    padding: 25px;
}

.order-card i {
    font-size: 26px;
}
.modal-backdrop
{
    opacity:0.5 !important;
    display: none;
}
/* img {
   width: 72.5%;
} */
</style>

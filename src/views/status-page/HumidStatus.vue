<template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <div class="card bg-c-blue order-card rounded-pill w-50">
                <div class="card-block">
                    <h5 class="m-b-20">Humidity</h5>
                    <h2 class="text-right">
                      <h1 class="value py-3">{{ currentValue }}%</h1>
                      <p class="text" id="status-humid">{{ status }}</p>
                    </h2>
                </div>
            </div>
</template>

<script>
import StatusDataService from '../../services/StatusDataService'
import { onValue, ref } from 'firebase/database'
export default {
  name: 'HumidStatus',
  props: { getHumid: Function },
  data () {
    return {
      currentValue: '',
      status: ''
    }
  },
  mounted () {
    onValue(ref(StatusDataService.getAll(), '/iot/humi'), (snapshot) => {
      const data = snapshot.val()
      this.currentValue = data.value
      if (this.currentValue >= 40 && this.currentValue <= 60) {
        this.status = 'Comfort'
        document.getElementById('status-humid').style.color = 'white'
      } else if (this.currentValue > 60) {
        this.status = 'Too moist'
        document.getElementById('status-humid').style.color = '#6FDFDF'
      } else {
        this.status = 'Too dry'
        document.getElementById('status-humid').style.color = '#F8B400'
      }
    })
  }
}
</script>
<style>
body{
    /* margin-top:20px; */
    background:#FAFAFA;
}
.order-card {
    color: #fff;
}

.bg-c-blue {
  background: #406a93;
  /* background: linear-gradient(45deg,#a3d0d3,#2e5b89); */
}

.card {
    margin: 3rem;
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
</style>

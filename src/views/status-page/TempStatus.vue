<template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <div class="card d-flex bg-c-green order-card rounded-pill w-50">
                <div class="card-block">
                    <h5 class="m-b-20">Temperature</h5>
                    <h2 class="text">
                      <h1 class="value py-3">{{ currentValue }}<span>&#x2103;</span></h1>
                      <p class="text" id="status-temp">{{ status }}</p>
                    </h2>
                </div>
            </div>
</template>

<script>
import StatusDataService from '../../services/StatusDataService'
import { onValue, ref } from 'firebase/database'
const TempArr = []
export default {
  name: 'TempStatus',
  data () {
    return {
      currentValue: '',
      status: ''
    }
  },
  mounted () {
    onValue(ref(StatusDataService.getAll(), '/iot/temp'), (snapshot) => {
      const data = snapshot.val()
      TempArr.push(data.value)
      this.currentValue = data.value
      if (this.currentValue >= 20 && this.currentValue < 22) {
        this.status = 'Comfortable'
        document.getElementById('status-temp').style.color = 'white'
      } else if (this.currentValue >= 18 && this.currentValue < 20) {
        this.status = 'Cool'
        document.getElementById('status-temp').style.color = '#A1E3D8'
      } else if (this.currentValue >= 22) {
        this.status = 'Hot'
        document.getElementById('status-temp').style.color = '#FF7878'
      } else {
        this.status = 'Too cool'
        document.getElementById('status-temp').style.color = '#40DFEF'
      }
    })
  }
}
</script>
<style scoped>
span {
  content: "\2103";
}
body{
    margin-top:20px;
    background:#FAFAFA;
}
.order-card {
    color: #fff;
}

.bg-c-green {
  background: #419484;
    /* background: linear-gradient(45deg,#9fca9f,#339481); */
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
</style>

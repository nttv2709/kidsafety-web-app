<template>
  <div class="chart p-5">
    <apexchart width="100%" type="line" :options="this.options" :series="this.series"></apexchart>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
// import { VueApexCharts } from 'vue3-apexcharts'
import StatusDataService from '../../services/StatusDataService'
import { get, ref } from 'firebase/database'
export default defineComponent({
  name: 'LineChart',
  el: '#app',
  async data () {
    const { labels, tempData, humidData } = await this.getStatusData()
    return await {
      options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: labels
        }
      },
      series: [{
        name: 'Temperature',
        data: tempData
      },
      {
        name: 'Humidity',
        data: humidData
      }]
    }
  },
  methods: {
    getData: async () => {
      const labels = []
      const db = StatusDataService.getAll()
      const tempData = await get(ref(db, 'tempArr/')).then((snapshot) => {
        if (snapshot.exists()) {
          const tempArr = []
          for (const i in snapshot.val()) {
            tempArr.push(snapshot.val()[i])
            const d = new Date()
            labels.push(d.getHours() + ':' + d.getMinutes())
          }
          return tempArr
        } else {
          console.log('No data available')
        }
      }).catch((error) => {
        console.error(error)
      })
      const humidData = await get(ref(db, 'humidArr/')).then((snapshot) => {
        if (snapshot.exists()) {
          const humidArr = []
          for (const i in snapshot.val()) {
            humidArr.push(snapshot.val()[i])
          }
          return humidArr
        } else {
          console.log('No data available')
        }
      }).catch((error) => {
        console.error(error)
      })
      return { labels, tempData, humidData }
    },
    async getStatusData () {
      const { labels, tempData, humidData } = await this.getData()
      return { labels, tempData, humidData }
    }
  }
})
</script>

<style>
.chart {
  background: rgb(55, 54, 54);
  border-radius: 25px;
  position: relative;
}
</style>

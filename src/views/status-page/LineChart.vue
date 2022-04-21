<template>
   <div id="chart">
      <apexchart type="line" height="350" ref="chart" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>
<script>
import { defineComponent } from 'vue'
import { VueApexCharts, lastDate, getNewSeries, resetData, XAXISRANGE } from 'vue3-apexcharts'
import StatusDataService from '../../services/StatusDataService'
import { onValue, ref } from 'firebase/database'
export default defineComponent({
  name: 'LineChart',
  el: '#app',
  components: {
    apexchart: VueApexCharts
  },
  data () {
    return {
      series:
      [
        {
          name: 'Humid',
          data: [0, 29, 33, 36, 32, 32, 32]
        }
      ],
      chartOptions: {
        chart: {
          id: 'realtime',
          height: 350,
          type: 'line',
          animations: {
            enabled: true,
            easing: 'linear',
            dynamicAnimation: {
              speed: 1000
            }
          },
          toolbar: {
            show: false
          }
        },
        colors: ['#77B6EA', '#545454'],
        dataLabels: {
          enabled: true
        },
        stroke: {
          curve: 'smooth'
        },
        title: {
          text: 'Average High & Low Temperature',
          align: 'left'
        },
        markers: {
          size: 0
        },
        xaxis: {
          type: 'datetime',
          range: XAXISRANGE
        },
        yaxis: {
          max: 100
        },
        legend: {
          show: false
        }
      }
    }
  },
  mounted: function () {
    onValue(ref(StatusDataService.getAll(), '/iot/humi'), (snapshot) => {
      const data = snapshot.val()
      this.series.data.push(data.value)
    })
    const me = this
    window.setInterval(function () {
      getNewSeries(lastDate, {
        min: 10,
        max: 90
      })

      me.$refs.chart.updateSeries([{
        data: this.dataValue.humid
      }])
    }, 1000)

    // every 60 seconds, we reset the data to prevent memory leaks
    window.setInterval(function () {
      resetData()

      me.$refs.chart.updateSeries([{
        data: this.dataValue.humid
      }], false, true)
    }, 60000)
  }
})
</script>

<style>
canvas.chartjs-render-monitor{
  position: relative;
  display: block;
  width: 800px !important;
  height: 600px !important;
  aspect-ratio: auto 1 / 1;
  margin-top: 5rem;
  margin-right: 7rem;
}
</style>

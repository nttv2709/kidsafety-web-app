<script>
import { defineComponent } from 'vue'
import { Line } from 'vue3-chart-v2'

export default defineComponent({
  name: 'LineChart',
  extends: Line,
  data () {
    return {
      humidData: [1, 5, 7, null, null, null],
      tempData: [1, 3, 4, null, null, null],
      labels: [1, 3, 4, 5, 6, 7]
    }
  },
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: this.labels,
      datasets: [
        {
          label: 'Humid',
          borderColor: 'blue',
          backgroundColor: '#FFFFFFAA',
          data: this.humidData
        },
        {
          label: 'Temperature',
          borderColor: 'red',
          backgroundColor: '#FFFFFFAA',
          data: this.tempData
        }
      ]
    })
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

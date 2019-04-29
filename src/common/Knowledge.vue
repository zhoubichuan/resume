<template>
  <li ref="kno" :style="{width:'200px',height:'200px'}"></li>
</template>
<script>
export default {
  props: {
    op: {
      type: Object
    }
  },
  data () {
    return {
    }
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      let myChart = this.$echarts.init(this.$refs.kno)

      let option = {
        title: [
          {
            show: true,
            text: this.op.e + '%',
            x: 'center',
            y: 'center',
            textStyle: {
              fontSize: '15',
              color: 'red',
              fontWeight: 'normal'
            }
          },
          {
            show: true,
            text: this.op.name,
            x: 'center',
            y: 'bottom',
            textStyle: {
              fontSize: '15',
              color: 'blue',
              fontWeight: 'normal'
            }
          }
        ],
        tooltip: {
          trigger: 'item',
          formatter: '{d}%',
          show: false
        },
        legend: {
          orient: 'vertical',
          x: 'left',
          show: false
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: true,
            hoverAnimation: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: false,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: this.op.e, name: '' },
              { value: 100 - this.op.e, name: '' }
            ]
          }
        ]
      }
      myChart.setOption(option)
    }
  }
}
</script>

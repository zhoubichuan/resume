<template>
  <li >
    <div ref="kno" :style="{width:'180px',height:'180px'}"></div>
    <p>{{op.name}}</p>
  </li>
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
              fontSize: '14',
              color: 'red',
              fontWeight: 'normal'
            }
          },
          {
            show: true,
            text: this.op.title,
            x: 'center',
            y: 'bottom',
            textStyle: {
              fontSize: '14',
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
                  fontSize: '18',
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
              { value: this.op.e, title: '' },
              { value: 100 - this.op.e, title: '' }
            ]
          }
        ]
      }
      myChart.setOption(option)
    }
  }
}
</script>
<style lang="scss" scoped>
li{
  width:33.33%;
  display: flex;
    align-items: center;
    flex-direction: column;
  div{
    text-align: center;
  }
  p{
    text-align: left;
    padding:0 10px;
  }
}
</style>

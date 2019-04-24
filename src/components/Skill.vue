<template>
  <div id="skill" class="skill">
    <h1 class="center">专业技能</h1>
    <ul >
      <li class="myChart" :style="{width:'200px',height:'200px'}"></li>
      <li class="myChart" :style="{width:'200px',height:'200px'}"></li>
      <li class="myChart" :style="{width:'200px',height:'200px'}"></li>
      <li class="myChart" :style="{width:'200px',height:'200px'}"></li>
      <li class="myChart" :style="{width:'200px',height:'200px'}"></li>
      <li class="myChart" :style="{width:'200px',height:'200px'}"></li>
      <li class="myChart" :style="{width:'200px',height:'200px'}"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Skill',
  data () {
    return {
      skill: [
        { ele: $('.myChart')[0], e: 80, name: 'javascript' },
        { ele: $('.myChart')[1], e: 70, name: 'css' },
        { ele: $('.myChart')[2], e: 90, name: 'html' }
      ]
    }
  },
  mounted () {
    let $ = document.querySelectorAll.bind(document)
    let arr = [
      { ele: $('.myChart')[0], e: 80, name: 'javascript' },
      { ele: $('.myChart')[1], e: 70, name: 'css' },
      { ele: $('.myChart')[2], e: 90, name: 'html' }
    ]
    this.drawLine(arr)
  },
  methods: {
    drawLine (arr) {
      for (let i = 0; i < arr.length; i++) {
        let myChart = this.$echarts.init(arr[i].ele)
        let option = {
          title: [
            {
              show: true,
              text: arr[i].e + '%',
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
              text: arr[i].name,
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
                { value: arr[i].e, name: '' },
                { value: 100 - arr[i].e, name: '' }
              ]
            }
          ]
        }
        myChart.setOption(option)
      }
    }
  }
}
</script>

<style scoped>
.center {
  margin-top: 20px;
  text-align: center;
}
.skill {
  background-color: #4a839e;
  height: 100vh;
}
li {
  list-style: none;
  float: left;
}
</style>

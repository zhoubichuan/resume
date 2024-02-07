/* eslint-disable @typescript-eslint/no-var-requires */
import * as api from '@/api'

import service from '@/util/request'
import * as echarts from 'echarts'
import * as china from './static/json/china.json'
import * as china2 from './static/json/china2.json'
import * as china3 from './static/json/china3.json'
import * as china4 from './static/json/china4.json'
import * as world from './static/json/world.json'
import * as world2 from './static/json/world2.json'
export default {
  install(Vue: any) {
    Vue.prototype.$echarts = echarts
    Vue.prototype.$china = china.default
    Vue.prototype.$china2 = china2.default
    Vue.prototype.$china3 = china3.default
    Vue.prototype.$china4 = china4.default
    Vue.prototype.$world = world.default
    Vue.prototype.$world2 = world2.default
    Vue.prototype.$beijingsvg = require('./static/beijingsvg').default
    Vue.prototype.$beijingsvg2 = require('./static/beijingsvg2').default
    Vue.prototype.$zhongguosvg = require('./static/zhongguosvg').default
    Vue.prototype.$zhongguosvg2 = require('./static/zhongguosvg2').default
    // Vue.prototype.$SliderRight = SliderRight
    Vue.prototype.$axios = Vue.prototype.$service = service
    Vue.prototype.$api = api
    Vue.config.productionTip = false
    Vue.prototype.$log = console.log
  }
}

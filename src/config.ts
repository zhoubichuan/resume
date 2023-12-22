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
  install (Vue:any) {
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

    // 由一个组件，向上找到最近的指定组件
    Vue.prototype.$findComponentUpward = function findComponentUpward (context:any, componentName:string) {
      let parent = context.$parent
      let name = parent.$options.name

      while (parent && (!name || [componentName].indexOf(name) < 0)) {
        parent = parent.$parent
        if (parent) name = parent.$options.name
      }
      return parent
    }
    // 由一个组件，向上找到所有的指定组件
    Vue.prototype.$findComponentsUpward = function findComponentsUpward (context:any, componentName:string):any {
      const parents = []
      const parent = context.$parent

      if (parent) {
        if (parent.$options.name === componentName) parents.push(parent)
        return parents.concat(findComponentsUpward(parent, componentName))
      } else {
        return []
      }
    }
    // 由一个组件，向下找到最近的指定组件
    Vue.prototype.$findComponentDownward = function findComponentDownward (context:any, componentName:string):any {
      const childrens = context.$children
      let children = null

      if (childrens.length) {
        for (const child of childrens) {
          const name = child.$options.name

          if (name === componentName) {
            children = child
            break
          } else {
            children = findComponentDownward(child, componentName)
            if (children) break
          }
        }
      }
      return children
    }
    // 由一个组件，向下找到所有指定的组件
    Vue.prototype.$findComponentsDownward = function findComponentsDownward (context:any, componentName:string):any {
      return context.$children.reduce((components:any, child:any) => {
        if (child.$options.name === componentName) components.push(child)
        const foundChilds = findComponentsDownward(child, componentName)
        return components.concat(foundChilds)
      }, [])
    }
    // 由一个组件，找到指定组件的兄弟组件
    Vue.prototype.$findBrothersComponents = function findBrothersComponents (context:any, componentName:string, exceptMe = true):any {
      const res = context.$parent.$children.filter((item:any) => {
        return item.$options.name === componentName
      })
      const index = res.findIndex((item:any) => item._uid === context._uid)
      if (exceptMe) res.splice(index, 1)
      return res
    }
  }
}

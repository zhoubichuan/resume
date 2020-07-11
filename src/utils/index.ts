const utils = {
  getCurrentTime() {
    return ""
  },
}
export default {
  install(Vue) {
    Object.keys(utils).forEach((item) => {
      Vue.prototype["$" + item] = utils[item]
    })
  },
}

const filters = {
  status(val) {
    return val
  },
}
export default {
  install(Vue: any) {
    Object.keys(filters).forEach((item) => {
      Vue.filter(item, filters[item])
    })
  },
}

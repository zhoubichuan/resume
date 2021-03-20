import Vue from "vue"
import App from "./App.vue"
import router from "./router/index"
import "./registerServiceWorker"
import UI from "./ui"
import store from "./store"
// import _ from "lodash"
import moment from "moment"
import i18n from "./i18n"
import "moment/locale/zh-cn"
import directive from "./directive"
import filter from "./filter"
import utils from "./utils"
Vue.use(directive)
Vue.use(filter)
Vue.use(utils)
Vue.prototype.$log = console.log
// Vue.prototype.$_ = _
Vue.prototype.$mment = moment

moment.locale("zh-cn")

Vue.use(UI)
Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  store,
  render: (h: Function) => h(App),
}).$mount("#app")

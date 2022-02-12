import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
// import "./registerServiceWorker";
import UI from "./ui";
import store from "./store";
// import _ from "lodash"
import moment from "moment";
import i18n from "./i18n";
import "moment/locale/zh-cn";
import directive from "./directive";
import filter from "./filter";
import utils from "./utils";
import config from '@/config'

Vue.use(directive);
Vue.use(filter);
Vue.use(utils);
Vue.prototype.$log = console.log;
// Vue.prototype.$_ = _
Vue.prototype.$mment = moment;
moment.locale("zh-cn");

Vue.use(UI);
Vue.use(config)
Vue.config.productionTip = false;
let app: any = null

function render(props = {}) {
  app = new Vue({
    router,
    i18n,
    store,
    render: h => h(App),
  }).$mount("#vue");
}
if (window.__POWERED_BY_QIANKUN__) {
  window.__webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__+'/resume/child-resume/'
  console.log('1111111111', window.__webpack_public_path__)
} else {
  console.log('2222222222')
  render()
}

export async function bootstrap(props: any) {
  console.log(props)
}
export async function mount(props: any) {
  render(props)
  // props.fns.forEach(fn => fn('加载完成'))
}
export async function unmount() {
  app.$destory()
  console.log(app, 'app')
}
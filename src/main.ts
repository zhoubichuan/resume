import './public-path'
import Vue from "vue";
import App from "./App.vue";
import routes from "./router/index";
// import "./registerServiceWorker";
import UI from "./ui";
import store from "./store";
// import _ from "lodash"
import moment from "moment";
import i18n from "./i18n";
import "moment/locale/zh-cn";
import directive from "./directive";
import filter from "./filter";
import util from "./util";
import config from '@/config'
import VueRouter from "vue-router";
// 新增QiankunProps定义和函数返回类型
interface QiankunProps {
  routerBase?: string;
  fns?: Array<(msg: string) => void>;
}

Vue.use(directive);
Vue.use(filter);
Vue.use(util);
Vue.prototype.$log = console.log;
// Vue.prototype.$_ = _
Vue.prototype.$moment = moment;
moment.locale("zh-cn");

Vue.use(UI);
Vue.use(config)
Vue.config.productionTip = false;
let app: any = null
interface Props {
  routerBase: string
}
console.log(process.env.BASE_URL, ' process.env.BASE_URL,')
function render() {
  const router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/resume/' : '/child/resume',
    mode: 'history',
    routes
  })
  app = new Vue({
    router,
    i18n,
    store,
    render: h => h(App),
  }).$mount("#vue");
}
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}
export async function bootstrap(props: QiankunProps): Promise<void> {
  console.log(props)
}
export async function mount(props: QiankunProps): Promise<void> {
  render()
  // props.fns.forEach(fn => fn('加载完成'))
}
export async function unmount(props: QiankunProps): Promise<void> {
  app.$destory()
  console.log(app, 'app')
}
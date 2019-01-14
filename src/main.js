import Vue from "vue";
import App from "./App";
import router from "./router";
import echarts from "echarts";
Vue.prototype.$echarts = echarts;
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});

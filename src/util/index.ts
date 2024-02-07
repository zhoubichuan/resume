import './rem'
const util: any = {
  getCurrentTime() {
    return "";
  },
};
export default {
  install(Vue: any) {
    Object.keys(util).forEach((item) => {
      Vue.prototype["$" + item] = util[item];
    });
  },
};

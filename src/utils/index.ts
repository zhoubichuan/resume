const utils: any = {
  getCurrentTime() {
    return "";
  },
};
export default {
  install(Vue: any) {
    Object.keys(utils).forEach((item) => {
      Vue.prototype["$" + item] = utils[item];
    });
  },
};

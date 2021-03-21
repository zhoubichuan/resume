import vuex from "vuex";
import Vue from "vue";
import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
import modules from "./modules";

Vue.use(vuex);
export default new vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules,
});

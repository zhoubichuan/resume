import Vue from "vue";
import Router from "vue-router";
import Index from "@/components/Index.vue";

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/resume',
  routes: [
    {
      path: "/",
      name: "Home",
      component: Index,
    },
    {
      path: "/about3",
      name: "about3",
      component: Index,
    },
  ],
});

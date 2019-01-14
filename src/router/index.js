import Vue from "vue";
import Router from "vue-router";
import Index from "@/components/Index";
import Test from "@/components/Test";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index
    },
    {
      path: "/test",
      name: "Test",
      component: Test
    }
  ]
});

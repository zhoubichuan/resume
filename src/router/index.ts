import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default [
  {
    path: "/",
    name: "Home",
    component: (): any => import("@/components/Index.vue"),
  },
  {
    path: "/demo",
    name: "demo",
    component: (): any => import("@/views/demo/index.vue"),
  },
  {
    path: "/demourl",
    name: "demourl",
    component: (): any => import("@/views/demourl/index.vue"),
  },
];

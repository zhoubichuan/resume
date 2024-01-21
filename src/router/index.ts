import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default [
  {
    path: "/",
    component: (): any => import("@/views/demo/index.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: (): any => import("@/components/Index.vue"),
  },
  {
    path: "/demo",
    name: "demo",
    redirect: "/",
  },
  {
    path: "/demourl",
    name: "demourl",
    component: (): any => import("@/views/demourl/index.vue"),
  },
];

import Vue from "vue";
import Router from "vue-router";
import Index from "@/components/Index.vue";

Vue.use(Router);

export default [
  {
    path: "/",
    name: "Home",
    component: (): any => import("@/views/demo/index.vue")
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

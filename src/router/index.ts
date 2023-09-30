import Vue from "vue";
import Router from "vue-router";
import Index from "@/components/Index.vue";

Vue.use(Router);

export default [
  {
    path: "/",
    name: "Home",
    component: Index,
  },
  {
    path: "/demo",
    name: "account",
    component: (): any => import("@/views/demo/index.vue"),
    children: [
      {
        path: "echarts:id",
        name: "echarts",
        component: (): any => import("@/views/echarts/index.vue"),
      }
    ],
  },
];

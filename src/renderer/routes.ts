import { RouteRecordRaw, RouterOptions, createRouter } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: HelloWorld,
  },
];

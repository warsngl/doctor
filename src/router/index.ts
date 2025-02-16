import { createRouter, createWebHistory } from "vue-router";
import DoctorsView from "@/views/DoctorsView.vue";
import NursesView from "@/views/NursesView.vue";

const routes = [
  { path: "/doctors", component: DoctorsView },
  { path: "/nurses", component: NursesView },
  { path: "/", redirect: "/doctors" },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

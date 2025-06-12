// src/router/index.ts
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import Connect from "../views/ConnectView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/connect",
    name: "Connect",
    component: Connect,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

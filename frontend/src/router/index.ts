// src/router/index.ts
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import Connect from "@/views/ConnectView.vue";
import CreateAccountView from "@/views/CreateAccountView.vue";
import ConsumerDashboard from "@/views/ConsumerDashboard.vue";

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
  {
    path: "/account/create",
    name: "CreateAccount",
    component: CreateAccountView,
  },
  {
    path: "/dashboard/consumer",
    name: "ConsumerDashboard",
    component: ConsumerDashboard,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

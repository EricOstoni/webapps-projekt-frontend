import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ShopVue from "../views/WebShop.vue";
import CartShop from "../views/CartShop.vue";
import LogIn from "../views/LogIn.vue";

import SignUp from "../views/SignUp.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/shop",
    name: "shop",
    component: ShopVue,
  },

  {
    path: "/cart",
    name: "cart",
    component: CartShop,
  },

  {
    path: "/login",
    name: "login",
    component: LogIn,
  },

  {
    path: "/signup",
    name: "signup",
    component: SignUp,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

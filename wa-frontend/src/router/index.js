import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ShopVue from "../views/WebShop.vue";
import CartShop from "../views/CartShop.vue";
import LoginVue from "../views/LogIn.vue";

import SignUpVue from "../views/SignUp.vue";

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
    component: LoginVue,
  },

  {
    path: "/signup",
    name: "signup",
    component: SignUpVue,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

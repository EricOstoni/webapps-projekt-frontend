import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ShopVue from "@/views/Shop.vue";
import AccountVue from "../views/Account.vue"
import CartVue from "../views/Cart.vue" 
import LoginVue from "../views/Login.vue"
import OneItemVue from "@/views/OneItem.vue";
import SingUpVue from "@/views/SingUp.vue";


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
    path: "/account",
    name: "account",
    component: AccountVue,
  },

  {
    path: "/cart",
    name: "cart",
    component: CartVue,
  },

  {
    path: "/login",
    name: "login",
    component: LoginVue,
  },

  {
    path: "/oneitem",
    name: "oneitem",
    component: OneItemVue,
  },

  {
    path: "/singup",
    name: "singup",
    component: SingUpVue,
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

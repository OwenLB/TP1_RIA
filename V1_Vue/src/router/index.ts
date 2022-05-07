import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    alias: "/products",
    name: "products",
    component: () => import("../components/ProductsList.vue")
  },
  {
    path: "/products/:id",
    name: "update-product",
    component: () => import("../components/UpdateProduct.vue")
  },
  {
    path: "/add",
    name: "add",
    component: () => import("../components/AddProduct.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routeOptions = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/portfolio", name: "Portfolio" },
  { path: "/blog", name: "Blog" },
  { path: "/contact", name: "ContactMe" },
  { path: "*", name: "NotFound" },
];

const routes = routeOptions.map((route) => {
  return {
    ...route,
    component: () => import(/* webpackChunkName: "[request]" */ `@/pages/${route.name}.vue`),
  };
});

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 400)
    });
  },
});

export default router;

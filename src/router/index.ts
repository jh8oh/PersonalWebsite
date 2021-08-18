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
  scrollBehavior(to, from, savedPosition) {
    let position = { x: 0, y: 0 }
    
    // Keep scroll position when using browser buttons
    if (savedPosition) {
      position = savedPosition
    }

    // Workaround for transitions scrolling to the top of the page
    // However, there are still some problems being fixed by the vue team
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(position)
      }, 400)
    })
  },
});

export default router;

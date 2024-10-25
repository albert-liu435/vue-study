import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import Layout from "@/pages/Layout/index.vue";

//Vue3 中 createWebHistory 和 createWebHashHistory 的区别:https://blog.csdn.net/weixin_44917334/article/details/129387658
//创建路由
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Layout,
    },
    {
      path: "/my/:id/:number",
      component: () => import("@/pages/User/index.vue"),
      props: true,
    },
    {
      path: "/category",
      component: () => import("@/pages/Category/index.vue"),
    },
    {
      path: "/404",
      name: "404",
      component: () => import("@/pages/NotFound/index.vue"),
    },
    {
      path: "/:catchAll(.*)",
      redirect: {
        name: "404",
      },
    },
  ],
});

// 路由器前置导航守卫
router.beforeEach((to, from) => {
  console.log(to, from);
});

export default router;

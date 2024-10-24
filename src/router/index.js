import { createMemoryHistory, createRouter } from "vue-router";
//引入组件
import About from "@/view/About.vue";
import Home from "@/view//Home.vue";

//配置路由映射规则
const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
];
//路由实例通过createRouter创建
const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
export default router; //导出，用于main.js注册

// 基础用法
// 1、路由匹配规则声明
// 2、动态路由匹配
// 3、路由命名
// 4、路由重定向
// 5、路由嵌套
// 6、命名视图
// 7、
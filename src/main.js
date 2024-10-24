import "./assets/main.css";

//new Vue()创建一个应用实例对象
import { createApp } from "vue";
import App from "./AppRouter.vue";
import router from "./router";

// createApp(App).mount("#app");
//注册路由插件
const app = createApp(App);
app.use(router); //注册插件

app.mount("#app");

// 全局注册该插件后，它会：

// ①全局注册RouterView和RouterLink组件

// ②添加全局$router和$route属性

// ③启用useRouter()和useRoute()组合式函数

// ④触发路由器解析初始路由

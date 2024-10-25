import { createApp } from "vue";
import App from "./App.vue";
// router
import router from "./router/index.js";
// pinia
import pinia from "./store";

const app = createApp(App);

// 安装router
app.use(router);
// 安装pinia
app.use(pinia);

// 挂在实例
app.mount("#app");

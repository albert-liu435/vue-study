import "./assets/main.css";

//new Vue()创建一个应用实例对象
import { createApp } from "vue";
// import App from "./App.vue";

import App from "./AppReactive.vue";

createApp(App).mount("#app");

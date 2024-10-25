import "./assets/main.css";

//new Vue()创建一个应用实例对象
// import { createApp } from "vue";
// import App from "./App.vue";

// createApp(App).mount("#app");

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./AppPinia.vue";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.mount("#app");

/////////////////////全局注册组件/////////////////////////////////////////
// import "./assets/main.css";

// import { createApp } from "vue";
// import App from "./day04/01_global/App.vue";

// import Swiper from "./day04/01_global/Swiper.vue";

// const app = createApp(App);

// // //注册全局组件,被全局注册的组件，可以在全局任何一个组件内使用
// app.component("Swiper", Swiper);
// app.mount("#app");
/////////////////////局部注册组件/////////////////////////////////////////
// import "./assets/main.css";

// import { createApp } from "vue";
// import App from "./day04/02_part/App.vue";

// // import Swiper from "./day04/01_global/Swiper.vue";

// const app = createApp(App);

// // //注册全局组件,被全局注册的组件，可以在全局任何一个组件内使用
// // app.component("Swiper", Swiper);
// app.mount("#app");
////////////////////样式组件/////////////////////////////////////////
// import "./assets/main.css";

// import { createApp } from "vue";
// import App from "./day04/03_style/App.vue";

// // import Swiper from "./day04/01_global/Swiper.vue";

// const app = createApp(App);

// //注册全局组件,被全局注册的组件，可以在全局任何一个组件内使用
// app.component("Swiper", Swiper);
// app.mount("#app");
// ////////////////////props属性设置/////////////////////////////////////////
// import "./assets/main.css";

// import { createApp } from "vue";
// import App from "./day04/04_props/App.vue";

// // import Swiper from "./day04/01_global/Swiper.vue";

// const app = createApp(App);

// // //注册全局组件,被全局注册的组件，可以在全局任何一个组件内使用
// // app.component("Swiper", Swiper);
// app.mount("#app");

// ////////////////////class style 设置/////////////////////////////////////////
// import "./assets/main.css";

// import { createApp } from "vue";
// import App from "./day04/05_classstyle/App.vue";

// const app = createApp(App);

// // //注册全局组件,被全局注册的组件，可以在全局任何一个组件内使用
// // app.component("Swiper", Swiper);
// app.mount("#app");

////////////////////自定义组件/////////////////////////////////////////
import "./assets/main.css";

import { createApp } from "vue";
import App from "./day04/06_header/App.vue";

const app = createApp(App);

// //注册全局组件,被全局注册的组件，可以在全局任何一个组件内使用
// app.component("Swiper", Swiper);
app.mount("#app");

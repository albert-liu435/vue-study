<script setup>
import { useRoute, useRouter } from 'vue-router'
//useRoute, useRouter 函数
const router = useRouter()
const route = useRoute()
console.log(route);
console.log(router);

</script>

 
<template>
  <header>
    <hr>
      <!-- router-link组件 -->
      <router-link to="/">首页</router-link>
      <router-link to="/about">关于我们</router-link>
      <!-- $router属性 -->
      <button @click="$router.push('/')">首页</button>
      <!-- $route属性 -->
      <button @click="console.log($route)"></button>
    <hr>
  </header>
  <main>
    <!-- RouterView组件 定义路由出口 -->
    <router-view></router-view>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

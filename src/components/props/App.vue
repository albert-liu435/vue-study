<template>

  <div>
    <!-- 父子组件传值 -->
    <Article :title="appRef.title"
             :author="'post by ' + appRef.author"
             pubTime="1989"></Article>
  </div>
</template>

<script setup>
import Article from './Article.vue';
import { ref } from 'vue';

const appRef=ref({
	title:'hello',
	author:'123'
})


</script>

<style scoped>


</style>
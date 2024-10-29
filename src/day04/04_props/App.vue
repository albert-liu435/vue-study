<template>
	<div>
		<!-- 父子组件传值 -->
		 <Article :title="appRef.title"
		 :author="'post by '+appRef.author"
		 pub-time="1989"></Article>
	</div>
</template>

<script setup>
import Article from './Article.vue';
import { ref } from 'vue';

const appRef=ref({
	title:'abc',
	author:'123'
})


</script>

<style lang="scss" scoped>


</style>
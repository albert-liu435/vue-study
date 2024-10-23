<template>
	<div>
		<h3>标题：{{title}}</h3>
    <h5>作者：{{author}}</h5>
    <h6>发布时间：{{pubTime}}</h6>
	</div>
</template>

<script setup>
//通过definProps "编译器宏" 接收子组件传递的数据,外界可以传递指定的数据
const props = defineProps({
  title: String,
  author: String,
  pubTime: String
})
</script>

<style scoped>


</style>
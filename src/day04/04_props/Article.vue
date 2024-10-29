<template>
	<div>
		<h3>标题：{{ title }}</h3>
		<h3>作者：{{ author }}</h3>
		<h3>发布时间:{{ pubTime }}</h3>
	</div>
</template>

<script setup>
//通过definProps "编译器宏" 接收子组件传递的数据,外界可以传递指定的数据
const props=defineProps({
	title:String,
	author:String,
	pubTime:String
})
</script>

<style lang="scss" scoped>


</style>
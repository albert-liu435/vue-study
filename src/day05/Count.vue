<template>
	<div>
    <p>数量：{{ props.count }}</p>
    <p>状态：{{ props.state }}</p>
	</div>
</template>

<script setup>
import { defineProps } from 'vue';

//通过definProps "编译器宏" 接收子组件传递的数据,外界可以传递指定的数据
const props=defineProps({
	count:Number,
	state:Boolean
})

// const props = defineProps({
//   title: {
//     type: String,
//     //default: 'abc',
//     require: true
//   },
//   author: String,
//   pubTime: String
// })
</script>

<style lang="scss" scoped>


</style>
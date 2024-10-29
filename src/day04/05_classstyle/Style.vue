<template>
	<div>
     <h3 class="thin" :class="isItalic ? 'italic' : ''">MyStyle 组件</h3> 
     <h3 class="thin" :class="[isItalic ? 'italic' : '', isDelete ? 'delete' : '']">MyStyle 组件</h3>
    <button @click="isItalic = !isItalic">Toggle Italic</button>
    <button @click="isDelete = !isDelete">Toggle Delete</button> 

    <!-- <h3 class="thin"
        :class="appRef.classObj">MyStyle 组件</h3>
    <button @click="appRef.classObj.italic = !appRef.classObj.italic">Toggle Italic</button>
    <button @click="appRef.classObj.delete = !appRef.classObj.delete">Toggle Delete</button>

    <hr />

    <div :style="{ color: appRef.active, fontSize: appRef.fsize + 'px', 'background-color': appRef.bgcolor }">黑马程序员</div>
    <button @click="appRef.fsize+=1">字号 +1</button>
    <button @click="appRef.fsize-=1">字号 -1</button> -->
	</div>
</template>

<script setup>
import { ref } from 'vue';
const appRef=ref({
	//自提是否倾斜
	isItalic:false,
	//是否应用删除效果
	isDelete:false,
	classObj:{
		italic:false,
		delete:false,
	},
	//高亮时的文字颜色
	active:'red',
	//文字大小
	fsize:30,
	//背景颜色
	bgcolor:'pink'
})


</script>

<style scoped>
/* 字体变细 */
.thin {
	font-weight: 200;
}
/* 倾斜字体 */
.italic{
	font-style: italic;
}
.delete{
	text-decoration: line-through;
}

</style>
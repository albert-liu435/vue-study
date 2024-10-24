<template>
	<div>
		
	</div>
</template>

<script setup>
import { ref } from 'vue';
const appRef = ref({
  // 字体是否倾斜
  isItalic: false,
  // 是否应用删除效果
  isDelete: false,
  classObj: {
    italic: false,
    delete: false,
  },
  // 高亮时的文本颜色
  active: 'red',
  // 文字的大小
  fsize: 30,
  // 背景颜色
  bgcolor: 'pink'
})

</script>

<style scoped>


</style>
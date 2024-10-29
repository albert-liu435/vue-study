
<script setup>
import List from './List.vue';




</script>

<template>
  <div>
    <h1>这是 App.vue 组件</h1>

    <p>App 中的 p 标签</p>
    <p>App 中的 p 标签</p>

    <hr />
    <List></List>
  </div>

</template>


<style scoped>
/* 为了提高开发效率和开发体验，vue 为 style 节点提供了 scoped 属性，从而防止组件之间的样式冲突问题
	style节点的scoped属性，用来自动为每个组件分配唯一的自定义属性，并自动为当前组件的DOM标签和style样式应用这个自定义属性，防止组件的样式冲突 */
p {
  color: red;
}
/* 如果给当前组件的 style 节点添加了 scoped 属性，则当前组件的样式对其子组件是不生效的。如果想让某些样
式对子组件生效，可以使用 /deep/ 深度选择器。 */

/* /deep/ .title {
  color: blue;
} */

/*  /deep/ 是 vue2.x 中实现样式穿透的方案。在 vue3.x 中推荐使用 :deep() 替代 /deep/*/
:deep(.title) {
  color: blue;
}
</style>


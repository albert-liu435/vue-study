<template>
  <div class="app-container">
    <h1>App根组件</h1>

    <hr>
    <MyHeader title="黑马程序员"
              bgcolor="#000"
              color="#fff"></MyHeader>
    <!-- <MyHeader></MyHeader> -->

  </div>
</template>

<script setup>
import MyHeader from './MyHeader.vue';



</script>

<style scoped>

.app-container{
	margin-top: 45px;
}

</style>
<script setup>
import { useUserStore } from '@/store';
import request from '@/utils/request';
import { storeToRefs } from 'pinia';


const userStore=useUserStore()
// 仓库数据响应式
const {userInfo,sum}=storeToRefs(userStore)
// 测试aixos
const send = async ()=>{
  const res= await request({
    url:"https://tea.qingnian8.com/tools/petShow",
    method:"GET"
  })
  console.log(res)
}
</script>

<template>
  <button @click="send">测试axios请求</button>
  <div class="father">
    首页,{{ userInfo }},{{ sum }}
  </div>
</template>

<style lang="scss" scoped>

</style>
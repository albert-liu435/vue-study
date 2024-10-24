<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'

import axios from 'axios'
import { ref } from 'vue';

import request from './utils/request';

// let info=ref('');
// // const props = ref(['info']);
// // var info={};


// const send=()=>{
//   // let that=this;

//   axios.get('http://127.0.0.1:8080/axios/info')
//     .then(response=>{
//       console.log(response.data)
//       info.value=response.data;
//       console.log(info)
//     })
//     .catch(function(error){
//       console.log(error)
//     })}

/////////////////////////////////////////////////////////////

// // let info=ref('');
// // const props = ref(['info']);
// // var info={};
// const info=ref({name:'zhangsan'});


// const send=()=>{
//   // let that=this;

//   axios.get('http://127.0.0.1:8080/axios/info')
//     .then(response=>{
//       console.log(response.data)
//       info.value.name=response.data;
//       console.log(info)
//     })
//     .catch(function(error){
//       console.log(error)
//     })}


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

<div>
  <button v-on:click="send">发送get</button>
  <br/>
  {{ info.name }}
</div>

</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

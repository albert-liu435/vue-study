<script setup>
// import axios from 'axios'
import { reactive,ref } from 'vue';


// https://www.jb51.net/javascript/303618fv0.htm
const stat=reactive({
  count:0,
});

// const send=()=>{
//   this.state.count++;
// };

</script>

<template>

<div>
  <button v-on:click="send">发送get</button>
  <br/>
  {{ stat.count }}
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

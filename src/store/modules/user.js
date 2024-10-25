import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useUserStore = defineStore(
  "user",
  () => {
    // state
    const userInfo = ref("注册pinia成功");
    let num = ref(0);
    // getter
    const sum = computed(() => {
      return 19 * 12;
    });
    // action
    function clog() {
      console.log(userInfo.value);
    }
    function addNum() {
      num.value++;
    }
    return {
      userInfo,
      sum,
      clog,
      addNum,
      num,
    };
  },
  {
    persist: true,
  }
);

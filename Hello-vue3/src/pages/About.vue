<template>
  <div class="about">
    <h2>大家好，欢迎学习Vue3</h2>
  </div>
</template>

<script lang="ts" setup name="about">
  import{onMounted,onUnmounted} from 'vue'
  // onMounted(()=>{
  //   console.log('about页面挂载')
  // })
  // onUnmounted(()=>{
  //   console.log('about页面卸载')
  // })
</script>

<style scoped>
.about{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    color:rgb(85,84,84);
    font-size: 18px;
}
</style>
<template>
    <div class="home">
        <img src="http://www.atguigu.com/images/index_new/logo.png" alt="">
    </div> 
</template>

<script lang="ts" setup name="home">
// //首页停留3秒后跳转到新闻页
// import { onMounted } from 'vue'
// import{useRouter}from 'vue-router'
// const router = useRouter()
// onMounted(() => {
//     setTimeout(() => {
//         //跳转到新闻页
//         // this.$router.push('/news')
//         router.push('/news')
//         console.log('首页停留3秒后跳转到新闻页')
//     }, 3000)
// })
</script>

<style scoped>
.home {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
</style>
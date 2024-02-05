<template>
  <div class="news">
    <ul>
        <li v-for="news in newsList" :key="news.id">
            <!-- 第一种写法 -->
            <!-- <RouterLink :to="`/news/news-detail?id=${news.id}&title=${news.title}&content=${news.content}`">{{ news.title }}</RouterLink> -->
            <RouterLink :to="{
                path:'/news/news-detail',
                query:{
                    id:news.id,
                    title:news.title,
                    content:news.content
                }
            
            }">
                {{ news.title }}
            </RouterLink>

        </li>

    </ul>
    <div class="news-content">
        <RouterView />
    </div>
    </div>
</template>

<script lang="ts" setup name="news">
import{reactive}from 'vue'
import { RouterLink,RouterView } from 'vue-router'
let newsList = reactive([
    {id:1,title:'十种重要的养生法则',content:'养生法则1：保持心情愉快，心情愉快是健康长寿的重要保证。心情愉快有利于消化吸收，有利于血液循环，有利于免疫功能的提高。'},
    {id:2,title:'暴富的方法',content:'暴富的方法1：不要把钱放在银行里，银行利息太低，不如把钱投资在股票、基金、期货、外汇等投资品种上。'},
    {id:3,title:'猫咪的习性',content:'猫咪的习性1：猫咪是一种独立的动物，它们喜欢独自玩耍，喜欢独自睡觉，喜欢独自思考。猫咪的独立性是它们的天性。'},
    {id:4,title:'编程好习惯',content:'编程好习惯1：编程是一种高度的思维活动，编程需要有耐心，需要有毅力，需要有创造力，需要有逻辑思维。编程是一种高度的思维活动。'}
])
</script>

<style scoped>
.news{
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    height: 100%;
}
.news ul{
    margin-top: 30px;
    /* list-style: none; */
    padding-left: 20px;
}
.news li::marker{
    color: #64967E;
}
.news li>a{
    font-size: 18px;
    line-height: 40px;
    text-decoration: none;
    color: #64967E;
    text-shadow: 0 0 1px rgb(0,84,0);
}
.news-content{
    width: 70%;
    height: 90%;
    border:1px solid;
    margin-top:20px;
    border-radius: 10px;
}
</style>
<template>
  <div class="news-list">
    <ul>
        <li>id:{{route.query.id}}</li>
        <li>标题:{{route.query.title}}</li>
        <li>内容:{{route.query.content}}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="newsDetail">
import { useRoute } from "vue-router"
let route = useRoute()
</script>

<style scoped>
.news-list{
    list-style: none;
    padding-left: 20px;
}
.news-list>li{
    line-height: 30px;
}
</style>
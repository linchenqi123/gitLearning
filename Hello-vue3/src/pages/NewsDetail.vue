<template>
  <div class="news-list">
    <ul>
        <li>id:{{id}}</li>
        <li>标题:{{title}}</li>
        <li>内容:{{content}}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="newsDetail">
defineProps(['id','title','content'])

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
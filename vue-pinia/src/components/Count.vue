<template>
  <div class="count">
    <h2>当前求累计数值：{{ sum }},放大十倍后：{{ bigSum }}</h2>
    <select v-model.number="n">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>
</template>

<script lang="ts" setup name="count">
import{ ref } from 'vue'
import{storeToRefs}from 'pinia'
let n= ref(1)
import {useCountStore} from '@/store/count'
const countStore=useCountStore()
console.log(countStore.sum)
//storeToRefs只关注store中的数据，不会对方法进行ref包裹
const {sum,bigSum}=storeToRefs(countStore)
function add() {
  //第一种修改方法
  countStore.sum += n.value
  //第二种修改方法
  // countStore.$patch({
  //   sum:999,

  // })
  //第三种方法：通过action(需要事先在store中定义action)
  // countStore.increment(n.value)
}
function minus() {
  countStore.sum -= n.value
}
</script>

<style scoped>
.count {
  background-color: lightblue;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
select,button{
    margin: 0 5px;
    height: 30px;
};
</style>
<template>
  <div class="talk">
    <button @click="getLoveTalk">获取一句土味情话</button>
    <ul>
        <li v-for="talk in talkStore.talkList" :key="talk.id">{{ talk.content }}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="loveTalk">
import{reactive}from 'vue'
import axios from "axios";
import { nanoid } from "nanoid";
import{useTalkStore}from "@/store/LoveTalk"
const talkStore=useTalkStore()

talkStore.$subscribe((mutate,state)=>{
  localStorage.setItem("talkList",JSON.stringify(state.talkList))
})
async function getLoveTalk() {
    try {
        // https://api.lovelive.tools/api/SweetNothings
        //content命名成title
        // let {data:{content:title}} =  await axios.get('https://api.uomg.com/api/rand.qinghua?format=json');
        let {data:{content}} =  await axios.get('https://api.uomg.com/api/rand.qinghua?format=json');
        let obj={id:nanoid(),content}
        talkStore.talkList.unshift(obj)
        console.log(obj);
    } catch (error) {
        console.error(error);
    }
}
</script>

<style scoped>
.talk {
  background-color: orange;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
</style>
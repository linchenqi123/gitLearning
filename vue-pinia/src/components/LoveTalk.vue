<template>
  <div class="talk">
    <button @click="getLoveTalk">获取一句土味情话</button>
    <ul>
        <li v-for="talk in talkList" :key="talk.id">{{ talk.content }}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="loveTalk">
import{reactive}from 'vue'
import axios from "axios";
import { nanoid } from "nanoid";
let talkList = reactive([
    {id:'1', content:'你是我今生的唯一'},
    {id:'2', content:'我愿意为你做任何事'},
    {id:'3', content:'我爱你'},
    {id:'4', content:'你今天有点怪，怪可爱的'},
    {id:'5', content:'草莓，蓝莓，蔓越莓，想我没？'},
    {id:'6', content:'心里给你留了一块地，死心塌地'},
])
async function getLoveTalk() {
    try {
        // https://api.lovelive.tools/api/SweetNothings
        //content命名成title
        // let {data:{content:title}} =  await axios.get('https://api.uomg.com/api/rand.qinghua?format=json');
        let {data:{content}} =  await axios.get('https://api.uomg.com/api/rand.qinghua?format=json');
        let obj={id:nanoid(),content}
        talkList.unshift(obj)
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
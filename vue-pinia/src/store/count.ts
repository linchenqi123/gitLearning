import {defineStore} from 'pinia'
export const useCountStore=defineStore('count',{
    //定义aciton
    actions:{
        increment(value:number){
            //this代表当前store
            this.sum+=value
        }
    },
    state() {
       return{
        sum:6
       }
    },
    getters:{
        bigSum(state){
            return state.sum*10
        }
    }
})
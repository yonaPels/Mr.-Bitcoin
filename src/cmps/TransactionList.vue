<template>
    <div>
        <ul>
            <li v-for="(transection, index) in transections" :key="index">
                {{transection.from}} transfer to {{transection.to}} {{transection.amount}} bitcoins at {{transection.time.getDate()}}.{{transection.time.getMonth()+1}}!!
            </li>
        </ul>
    </div>
</template>

<script>
import { userService } from '../services/user.service.js';

export default{
    data(){
        return{
            user: null,
            transection: null,
        }
    },
    created(){
        this.user = userService.getUser()
        this.transection = this.user.transactions
    },
    computed:{
        transections(){
            if (this.transection.length <= 3)return this.transection
            else return this.transection.slice(0,3) 
        }
    }

}
</script>

<style lang="scss" scoped>
ul{
    list-style-type: none;
    color: white;
    li{

        border: 1px white solid;
        max-width: 30%;
        margin: 20px;
        padding: 10px;
        right: 0;
    }
}
</style>
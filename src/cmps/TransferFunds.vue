<template>
     <form @submit.prevent="onTransfer">
        <input v-model= "amount" type="number" id="transection">
        <button>Transfer</button>
    </form>
</template>

<script>
import { userService } from '../services/user.service';
export default{
    data(){
        return{
            amount: null
        }
    },
    props: {
        contact: {
        type: Object,
        required: true,
      },
    },
    created(){
        this.transection=userService.getUser().transection
    },
    methods:{
        onTransfer(){
            console.log('this.amount:', this.amount)
            const transfer = {
                from: userService.getUser().name,
                to: this.contact.name,
                time: new Date(),
                amount: this.amount
            }
            userService.transferFunds(transfer)
            this.amount = null
        }
    }

}

</script>

<style lang="scss" scoped>

</style>
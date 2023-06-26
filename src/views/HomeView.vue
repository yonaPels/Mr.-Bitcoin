<template>
    <div class="hero">
    <h1 class="name"> {{ name }}</h1>
    <h3>Welcome again!</h3>
    <p class="msg balance">Your balance is: {{ balance }} </p>
    <p class="msg">Current Bitcoin rate is: {{ rate }}</p>
            
    <div class="display-details">
        <!-- <Hero /> -->
       
        <div class="card-display display-user-balance">
           
        </div>
        <div class="card-display display-rate">
            
        </div>
    </div>
    </div>
    <TransactionList/>
</template>

<script>
import { bitcoinService } from '../services/bitcoin.service.js'
import { userService } from '../services/user.service.js'
import Hero from '../cmps/Hero.vue'
import TransactionList from '../cmps/TransactionList.vue'

export default {
    data() {
        return{
            rate: null,
            name: null,
            balance: null,
        }
    },
    async created() {
        this.rate = await bitcoinService.getRate()
        this.name = userService.getUser().name
        this.balance = userService.getUser().balance
  },
  components:{
    Hero,
    TransactionList
}
}

</script>

<style lang="scss" scoped>

.hero{
    color: white;
    text-shadow: 0.5px 0.5px 1px black;
    .name{
        margin-top: 8%;
        font-size: 4.5rem;
        font-weight: 600;
        color: white;
        text-shadow: 0.5px 0.5px 1px black;
    }
    h3{
        font-size: 3rem;
        font-weight: 400;
    }
.balance{
    margin-top: 20%;
}
    .msg{
        font-size: 2rem;
        font-weight: 300;
    }
}

</style>
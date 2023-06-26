<template>
    <article v-if="contact" class="contact-details">
        <img :src="getRobotImage(contact.name)" alt="Robot Image">
        <h2>{{contact.name}}</h2>
        <h3>{{contact.email}}</h3>
        <h3>{{contact.phone}}</h3>
        <RouterLink to="/contact">
            <button>Back</button>
        </RouterLink>
        <div>
            רוצה לפנק את {{ contact.name }} ?
            <TransferFunds :contact="contact"/>
        </div>
        <TransactionList></TransactionList>
    </article>
</template>

<script>
import { contactService } from '@/services/contact.service.js'
import TransferFunds from '../cmps/TransferFunds.vue'
import TransactionList from '@/cmps/TransactionList.vue'

export default {
    data() {
        return {
            contact: null,
            name:null,
        }
    },
    async created() {
        const contactId = this.$route.params.id
        this.contact = await contactService.getContactById(contactId)  
    },
    methods:{
        getRobotImage(name) {
      return `https://robohash.org/${name}`;
        }
    },
    components:{
        TransferFunds,
        TransactionList,
    }
}
</script>

<style lang="scss">
.contact-details{
    color: white;
    text-shadow: 0.5px 0.5px 1px black;
}

</style>
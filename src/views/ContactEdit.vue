<template>
<div class="contact-edit">
    <div class="btn-edit">
       <a href=""><button @click="onRemoveContact(contact._id)">Delet</button></a> 
        <RouterLink to="/contact">
            <button>Back</button>
        </RouterLink>
    </div>
    <form @submit.prevent="save" v-if="contact" class="form-edit">
        <label for="contact.name">name:
            <input v-model="contact.name" type="text" id="contact.name">
        </label>
        <label for="contact.email">email: 
            <input v-model="contact.email" type="text"  id="contact.email">
        </label>
        <label for="contact.phone">phone:
            <input v-model.number="contact.phone" type="text"  id="contact.phone">
        </label>
        <button>Save</button>
    </form>
</div>
</template>

<script>
import { contactService } from '@/services/contact.service.js'

export default {
   data() {
       return {
           contact: null,
       }
   },
   methods: {
       async save() {
           await contactService.saveContact(this.contact)
           this.$router.push('/contact')
       },
       async onRemoveContact(contactId) {
            // const contactId = this.$route.params.id
            if (contactId){
                try {
                    this.$store.dispatch({ type: 'removeContact', contactId })
                } catch(err) {
                    console.error(err)
                }}
            this.$router.push('/contact')
        }
   },
   async created() {
       const contactId = this.$route.params.id
       console.log('contactId:', contactId)
       if(contactId) {
        //    this.contact = getContact
            this.contact = await contactService.getContactById(contactId)
       } else {
            this.contact = contactService.getEmptyContact()
       }
   }
}
</script>


<style lang="scss" scoped>

.contact-edit{
    display: grid;
    align-content: space-around;
    .btn-edit{
        display: flex;
        justify-content: space-around;
        *{
            width: 100px;
            height: 30px;
            padding: 6px;
        }

    }

    .form-edit{
        display: grid;
        gap: 15px;
        align-content: center;
        color: white;
        text-shadow: 0.5px 0.5px 1px black;

    }
}
</style>
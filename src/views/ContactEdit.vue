<template>
    <form @submit.prevent="save" v-if="contact" class="contact-edit">
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
    <RouterLink to="/contact">
        <button>Back</button>
    </RouterLink>
    <button @click="onRemoveContact(contact._id)">Delet</button>
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
       if(contactId) {
           this.contact = getContact
        //    await contactService.getContactById(contactId)
       } else {
           this.contact = contactService.getEmptyContact()
       }
   }
}
</script>


<style lang="scss" scoped>
.contact-edit{
    display: grid;
    gap: 15px;
}

</style>
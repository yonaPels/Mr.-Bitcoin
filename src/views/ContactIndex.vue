<template>
    <section class="container-contacts">
        <RouterLink :to="`/contact/edit`">
            <button class="add-contact">Add  Contact</button>
        </RouterLink>
        <h1>Your contacts</h1>
        <ContactFilter @filter="onSetFilterBy"/>
        <!-- <ContactList  @remove="removeContact" v-if="contacts" :contacts="contacts"  /> -->
        <ContactList @remove="removeContact" v-if="contacts" :contacts="filteredContacts"/>
    </section>
</template>

<script>

import ContactList from '@/cmps/ContactList.vue'
import ContactFilter from '@/cmps/ContactFilter.vue'

export default {
    data() {
        return {
            // contacts: null,
            filterBy: {},
            filteredContacts: null
        }
    },
    components:{
        ContactList,
        ContactFilter,
    },
    async created() {
        this.$store.dispatch({ type: 'loadContacts' })
        // this.contacts = await contactService.getContacts()
    },
    methods:{
        async removeContact(contactId) {
            // const msg = {
            //     txt: `Contact ${contactId} removed...`,
            //     type: 'success',
            //     timeout: 2500,
            // }
            // eventBus.emit('user-msg', msg)
            try {
                // await carService.remove(carId)
                // const idx = this.cars.findIndex(car => car.id === carId)
                // this.cars.splice(idx, 1)
                this.$store.dispatch({ type: 'removeContact', contactId })
                // showSuccessMsg('Car removed')
            } catch(err) {
                // showErrorMsg('Cannot remove car')
                console.error(err)
            }
        },
        onSetFilterBy(filterBy) {
            this.filterBy = filterBy
        }
    },
    computed: {
        filteredContacts() {
            const regex = new RegExp(this.filterBy.txt, 'i')
            return this.contacts.filter(contact => regex.test(contact.name))
        },
        contacts() { return this.$store.getters.contacts },
    },
    
}

</script>

<style lang="scss" scoped>
.container-contacts{
    display: grid;
    justify-items: center;

    .add-contact{
        position: absolute;
        top: 40px;
        left: 30px;
        height: 4%;
        width: 120px;
        padding: 10px;
    }
    h1{
        margin: 10px;
        padding: 10px;
        color: white;
        text-shadow: 0.5px 0.5px 1px black;
        font-weight: 400;
    }
}

</style>
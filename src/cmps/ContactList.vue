<template>
    <section class="contact-list">
        <!-- <TransitionGroup name="list" tag="ul"> -->
            <ul>
            <li v-for="contact in contacts" :key="contact._id">
                <ContactPreview :contact="contact"/>
                <section class="actions">
                    <RouterLink :to="`/contact/${contact._id}`">
                        <button>Details</button>
                    </RouterLink>
                    <RouterLink :to="`/contact/edit/${contact._id}`">
                        <button>Edit</button>
                    </RouterLink>
                    <button @click="onRemoveContact(contact._id)">x</button>
                </section>
            </li>
        </ul>
        <!-- </TransitionGroup> -->
    </section>
</template>

<script>
import ContactPreview from '@/cmps/ContactPreview.vue'
export default {
    props: {
        contacts: { type: Array, required: true },
    },
    methods: {
        onRemoveContact(contactId) {
            this.$emit('remove', contactId)
        }
    },
    components: {
        ContactPreview,
    }
}

</script>

<style lang="scss" scoped>
.contact-list {
    text-align: center;
    margin-block: 1em;
    padding: 10px;
    
    ul {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        // grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        gap: 30px;

        padding: 10px;
        list-style: none;
        
        li {
            padding: 30px;
            background-color: rgb(103, 132, 158);
            color: whitesmoke;
            border-radius: 4px;

            .actions{
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                justify-items: stretch;
                align-items: baseline;
               
                button{
                    padding: 0.3rem;
                    margin: 10px;
                }
            }
        }
    }
}
</style>
<template>
    <div>
        <form @submit.prevent="enter">
        <label for="name">name:
            <input v-model="name" type="text" id="name">
        </label>
        <button>Create your acount</button>
    </form>
    </div>
</template>

<script>
import { userService } from '../services/user.service';

export default {
   data() {
       return {
           name: null,
       }
   },
   methods: {
       enter() {
           const user = userService.signup(this.name)
           this.$router.push('/home')
       },
   },
}


</script>

<style lang="scss" scoped>

</style>
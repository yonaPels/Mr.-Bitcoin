<template>
    <header class="app-header">
      <nav class="nav-header">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
        <RouterLink to="/stats">Statistics</RouterLink>

      </nav>
      <div class="information">
        <!-- <p>Exchange Rate: {{ rate }} </p> -->
        <FaBitcoin/>
        <!-- <p>{{ name }} </p> -->
      </div>
  </header>
</template>

<script>
import { FaBitcoin } from "oh-vue-icons/icons";
import { bitcoinService } from '../services/bitcoin.service.js'
import { userService } from '../services/user.service'
export default{
  data() {
    return {
      rate: null,
      name: null,
    }
  },
  components() {FaBitcoin},
  async created() {
    this.rate = await bitcoinService.getRate()
    this.name = await userService.getUser().name
  },
}
</script>


<style lang="scss">
.app-header{
  display: flex;
  justify-content: space-between;
  color: white;
  text-shadow: 0.5px 0.5px 1px black;
  border-bottom: 1px white solid;
  align-items: center;
  .nav-header{
    height: 2rem;

    align-items: center;
    margin-top: 0;
    display: flex;
    a{
      padding-left: 0;
      padding-right: 2rem;
      font-size: 1rem;
      color: white;
    }
  }
  .information{
    display: flex;
    // align-items: flex-end  
  }
}

</style>
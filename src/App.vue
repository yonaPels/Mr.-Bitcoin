<script >
import AppHeader from '@/cmps/AppHeader.vue'
import AppFooter from '@/cmps/AppFooter.vue'
// import { RouterLink, RouterView } from 'vue-router'

export default {
  components: {
    AppHeader,
    AppFooter,
  }
}
</script>

<template>
  <AppHeader />
  <main class="main-content">
    <RouterView />
  </main>
  <AppFooter />
</template>

<style>
#app{
  background: linear-gradient(hsla(0, 0%, 0%, 0.5), hsla(0, 0%, 0%, 0.5)),
    url('@/assets/img/bitcoin-blue.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed; 
}

.main-content {
  min-height: 82vh;
  position: relative;
  display: flex;
  justify-content: center;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>

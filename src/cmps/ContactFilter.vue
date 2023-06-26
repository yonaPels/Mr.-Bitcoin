<template>
    <section class="contact-filter">
      <input
        placeholder="Search your contacts..."
        @input="onSetFilterBy"
        v-model="filterBy.txt"
        type="text"
        class="search-box"
      />
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        filterBy: {
          txt: "",
        },
      };
    },
    methods: {
      onSetFilterBy() {
        this.$emit("filter", this.filterBy);
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .contact-filter {
    display: flex;
  }

  .search-box{
    padding: 10px;
    width: 40vw;
    height: 110%;
    border-radius: 4px;
  }
  </style>
  
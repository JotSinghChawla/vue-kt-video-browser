<template>
  <div>
    <input v-model="search_input" placeholder="Search on Youtube" type="text" />
    <button @click="OnClick" class="btn btn-sm btn-primary">search</button>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      search_input: ''
    }
  },
  methods: {
    OnClick: function(event) {
      this.$emit('searchItemChange', this.search_input);
    }
  }
};
</script>

<style scoped>
  input {
    width: 75%;
    margin-right: 15px;
  }

  div {
    text-align: center;
    margin: 20px;
  }

</style>
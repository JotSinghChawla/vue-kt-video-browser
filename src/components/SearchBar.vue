<template>
  <div>
    <input @input="OnInput"/>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  methods: {
    OnInput: function(event) {
      this.$emit('searchItemChange', event.target.value);
    }
  }
};
</script>

<style>

</style>
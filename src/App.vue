<template>
  <div>
    Hello World! 
    {{ message }}
    <SearchBar @searchItemChange="onSearchItemChange"></SearchBar>
  </div>

</template>

<script>
import axios from 'axios';
import SearchBar from './components/SearchBar.vue';

const YOUTUBE_API_KEY = process.env.VUE_APP_YOUTUBE_DATA_API

export default {
  // el: 'id'                     // not required because template is added
  name: 'App',
  data() {
    return {
      message: YOUTUBE_API_KEY
    }
  },
  components: {
    SearchBar: SearchBar
    // SearchBar                  // JS shortform when key and values are equal
  },
  methods: {
    onSearchItemChange(searchValue) {
      axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          key: YOUTUBE_API_KEY,
          type: 'video',
          part: 'snippet',
          q: searchValue
        }
      }).then(res => {
        console.log(res)
      })
    }
  }
};
</script>
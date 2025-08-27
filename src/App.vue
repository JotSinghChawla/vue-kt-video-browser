<template>
  <div class="container">
    <SearchBar @searchItemChange="onSearchItemChange"></SearchBar>
    <div class="row">
      <VideoDetail :video="selected_video" :videos_count="videos.length" />
      <VideoList :videos_arr="videos" @videoSelected="onVideoSelect" />
    </div>
    <!-- <VideoList v-bind:videos_arr="videos"></VideoList> -->
  </div>

</template>

<script>
import axios from 'axios';
import SearchBar from './components/SearchBar.vue';
import VideoList from './components/VideoList.vue';
import VideoDetail from './components/VideoDetail.vue';

const YOUTUBE_API_KEY = process.env.VUE_APP_YOUTUBE_DATA_API

export default {
  // el: 'id'                     // not required because template is added
  name: 'App',
  data() {
    return {
      videos: [],
      selected_video: null
    }
  },
  components: {
    SearchBar: SearchBar,
    // SearchBar                  // JS shortform when key and values are equal
    VideoList,
    VideoDetail
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
        this.videos = res.data.items;
      })
    },
    onVideoSelect(video) {
      // console.log(video)
      this.selected_video = video
    }
  }
};
</script>
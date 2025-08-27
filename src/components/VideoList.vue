<template>
  <ul class="list-group col-md-4">
    <VideoListItem v-for="video_item in videos_arr" v-bind:key="video_item.etag" :video="video_item" @videoSelectedTemp="onVideoSelect">
    </VideoListItem>
      
  </ul>
</template>

<script>
import VideoListItem from './VideoListItem.vue';

export default {
  name: 'VideoList',
  props: {
    videos_arr: Array
  },
  components: {
    VideoListItem
  },
  methods: {
    onVideoSelect(video) {
      this.$emit('videoSelected', video)
    }
  }
};
</script>

<style>

</style>
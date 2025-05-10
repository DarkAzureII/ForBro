<template>
  <div class="video-gallery">
    <h1>Performance Videos</h1>
    <div class="video-grid">
      <YouTubeEmbed
        v-for="video in performanceVideos"
        :key="video.id"
        :video-id="video.id"
      />
    </div>
  </div>
</template>

<script>
import YouTubeEmbed from '../components/YouTubeEmbed.vue'

export default {
  components: { YouTubeEmbed },
  data() {
    return {
      performanceVideos: [
        {
          id: 'dQw4w9WgXcQ', // Replace with actual YouTube IDs
          title: 'Cultural Dance Festival 2023',
          description: 'Full group performance at national festival',
          date: '2023-08-15'
        },
        {
          id: 'abcdefghijk',
          title: 'Modern Dance Workshop',
          description: 'Excerpt from our masterclass series',
          date: '2023-10-22'
        }
      ]
    }
  }
}
</script>

<style>
.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
}
</style>
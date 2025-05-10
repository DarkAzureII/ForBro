<template>
  <div class="event-card" :class="{ 'past-event': past }">
    <!-- Use dynamic import with Vite's asset handling -->
    <img :src="getImageUrl(event.image)" :alt="event.title" class="event-image">
    <div class="event-details">
      <div class="event-date">{{ formattedDate }}</div>
      <h3>{{ event.title }}</h3>
      <p class="location">{{ event.location }}</p>
      <p class="description">{{ event.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    event: Object,
    past: Boolean
  },
  computed: {
    formattedDate() {
      return new Date(this.event.date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      });
    }
  },
  methods: {
    getImageUrl(imageName) {
      // Vite-compatible dynamic image URL
      return new URL(`/src/assets/images/performances/${imageName}`, import.meta.url).href;
    }
  }
}
</script>
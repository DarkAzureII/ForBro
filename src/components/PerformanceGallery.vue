<template>
  <div class="performance-gallery">
    <div class="gallery-grid">
      <div 
        v-for="(performance, index) in performances" 
        :key="index" 
        class="gallery-item"
        :class="`item-${index + 1}`"
      >
        <img 
          :src="performance.image" 
          :alt="performance.caption" 
          class="gallery-image"
        />
        <div class="overlay">
          <div class="performance-info">
            <h3 class="performance-title">{{ performance.title }}</h3>
            <p class="performance-location">{{ performance.location }}</p>
            <p class="performance-date">{{ performance.date }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      performances: [
        {
          image: 'src/assets/images/performances/1.jpg',
          title: 'Urban Dance Festival',
          location: 'New York City',
          date: 'March 2024',
          caption: 'Award-winning contemporary piece'
        },
        {
          image: 'src/assets/images/performances/2.jpg',
          title: 'Cultural Heritage Night',
          location: 'National Theater',
          date: 'February 2024',
          caption: 'Traditional folk dance showcase'
        },
        {
          image: 'src/assets/images/performances/3.jpg',
          title: 'Corporate Gala',
          location: 'Grand Hotel Ballroom',
          date: 'January 2024',
          caption: 'Modern dance performance'
        },
        {
          image: 'src/assets/images/performances/4.jpg',
          title: 'Street Dance Competition',
          location: 'Downtown Plaza',
          date: 'December 2023',
          caption: '1st Place Hip-Hop Category'
        }
      ]
    }
  }
}
</script>

<style scoped>
.performance-gallery {
  padding: 2rem 0;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  padding: 1rem;
}

.gallery-item {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  aspect-ratio: 1;
  transition: transform 0.3s ease;
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem;
}

.gallery-item:hover .overlay {
  opacity: 1;
}

.performance-info {
  color: white;
}

.performance-title {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.performance-location {
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
}

.performance-date {
  font-size: 0.8rem;
  color: #ddd;
}

@media (min-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  
  .gallery-item:nth-child(1) {
    grid-column: span 2;
    grid-row: span 2;
  }
}
</style>
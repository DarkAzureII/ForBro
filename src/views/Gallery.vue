<template>
  <div class="gallery-page">
    <h1>Performance Gallery</h1>
    <div class="gallery-grid">
      <div v-for="(image, index) in images" :key="index" class="gallery-item">
        <img :src="image.src" :alt="image.caption" class="gallery-image">
        <div class="image-caption">{{ image.caption }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          src: '/src/assets/images/gallery/perfomance1.jpg',
          caption: 'Cultural Festival 2023'
        },
        {
          src: '/src/assets/images/gallery/perfomance2.jpg',
          caption: 'Urban Dance Battle'
        },
        // Add more images
      ]
    }
  }
}
</script>

<style scoped>
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  padding: 2rem;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}

.gallery-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-image:hover {
  transform: scale(1.05);
}

.image-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.5rem;
  text-align: center;
}
</style>
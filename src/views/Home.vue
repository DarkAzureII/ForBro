<template>
  <main class="home">
    <section class="hero bg-limpopo-pattern">
      <div class="hero-content">
        <h1>Limpopo Dance Heritage</h1>
        <p class="tagline">Celebrating the Rhythms and Traditions of Mopani</p>
        <div class="cta-buttons">
          <router-link to="/events" class="btn-primary">Upcoming Celebrations</router-link>
          <router-link to="/contact" class="btn-secondary">Book Traditional Performance</router-link>
        </div>
      </div>
    </section>
    <section class="featured-events">
      <h2>Recent Ceremonies</h2>
      <PerformanceGallery />
    </section>
    <section class="quick-services">
      <h2>Our Traditional Offerings</h2>
      <div class="services-grid">
        <TraditionalServiceCard 
          v-for="service in traditionalServices"
          :key="service.title"
          :service="service"
        />
      </div>
    </section>
  </main>
</template>
<script>
import TraditionalServiceCard from '../components/TraditionalServiceCard.vue';
import PerformanceGallery from '../components/PerformanceGallery.vue';
export default {
  components: { TraditionalServiceCard, PerformanceGallery },
  data() {
    return {
      traditionalServices: [
        {
          title: 'Xibelani Dance',
          icon: '🥁',
          description: 'Traditional Tsonga dance performances with authentic costumes',
          styles: ['Ceremonial', 'Festival', 'Cultural Events']
        },
        {
          title: 'Dinaka Workshops',
          icon: '🪘',
          description: 'Learn traditional Pedi pipe and drum ensemble techniques',
          styles: ['Beginners', 'Advanced', 'Cultural Immersion']
        },
        {
          title: 'Malende & Tshikona',
          icon: '🎭',
          description: 'Venda celebratory dance and royal drum performances',
          styles: ['Weddings', 'Tribal Gatherings', 'Heritage Events']
        }
      ]
    }
  }
}
</script>
<template>
  <div class="pedi-events-page">
    <h1>Ditlhakišo tša Setšo</h1>
    <p class="subtitle">Traditional Performance Schedule</p>
    
    <div class="events-timeline">
      <EventCard
        v-for="event in upcomingEvents"
        :key="event.title"
        :event="event"
      />
    </div>
    <section class="past-events">
      <h2>Ditlhakišo tša go Feta</h2>
      <p class="section-subtitle">Past Celebrations</p>
      <div class="events-grid">
        <EventCard
          v-for="event in pastEvents"
          :key="event.title"
          :event="event"
          past
        />
      </div>
    </section>
  </div>
</template>

<script>
import EventCard from '../components/EventCard.vue';
export default {
  components: { EventCard },
  data() {
    return {
      upcomingEvents: [
        {
          date: '2024-03-15',
          title: 'Pulo ya maswika ga Sebopela',
          location: 'Manganeng',
          description: 'Traditional Pedi dance celebration',
          image: '1.jpg'
        },
        {
          date: '2024-04-10',
          title: 'Dipasa tša Setšo',
          location: 'Moletjie Heritage Village',
          description: 'New harvest celebration featuring traditional Pedi dance',
          image: '2.jpg'
        }
      ],
      pastEvents: [
        {
          date: '2024-02-10',
          title: 'Moletlo wa Dikgosi',
          location: 'Bochum Cultural Arena',
          description: 'Royal heritage celebration with tribal performances',
          image: '3.jpg'
        },
        {
          date: '2024-01-22',
          title: 'Monyanya wa Dikoma',
          location: 'Lebowakgomo Community Hall',
          description: 'Traditional song and dance festival with community performances',
          image: '4.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped>
.pedi-events-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  color: #5E2612;
}

h1 {
  color: #783D17;
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  position: relative;
}

.subtitle {
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 3rem;
  color: #80461B;
}

h2 {
  color: #783D17;
  margin: 3rem 0 0.5rem;
  font-size: 2rem;
  position: relative;
  display: inline-block;
}

h2::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: 3px;
  background: #E89F45;
}

.section-subtitle {
  margin-bottom: 2rem;
  color: #80461B;
  font-size: 1.1rem;
}

.events-timeline {
  margin: 2rem 0;
  border-left: 4px solid #E89F45;
  padding-left: 2rem;
  position: relative;
}

.events-timeline::before {
  content: "";
  position: absolute;
  left: -10px;
  top: -10px;
  width: 20px;
  height: 20px;
  background: #B36A27;
  border-radius: 50%;
}

.events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}
</style>
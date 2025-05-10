<template>
  <div class="about-page">
    <section class="bio-section">
      <div class="bio-content">
        <h1>About Our Dance Collective</h1>
        <p class="lead">Passion in Motion Since 2015</p>
        <div class="dancer-profiles">
          <div v-for="dancer in dancers" :key="dancer.name" class="dancer-card">
            <img :src="dancer.image" :alt="dancer.name" class="dancer-image">
            <h3>{{ dancer.name }}</h3>
            <p>{{ dancer.role }}</p>
            <p class="style">{{ dancer.style }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dancers: [
        {
          name: 'Alexa Moreno',
          role: 'Lead Dancer & Choreographer',
          style: 'Contemporary | Jazz',
          image: '../assets/images/dancers/alexa.jpg'
        },
        {
          name: 'Raj Patel',
          role: 'Urban Dance Specialist',
          style: 'Hip-Hop | Breakdance',
          image: '../assets/images/dancers/raj.jpg'
        }
      ]
    }
  }
}
</script>
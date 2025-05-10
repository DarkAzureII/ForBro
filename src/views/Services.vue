<template>
  <div class="pedi-services-page">
    <h1>Ditirelo tša Rena</h1>
    <p class="subtitle">Our Cultural Services</p>
    
    <div class="services-categories">
      <div class="service-category" v-for="category in serviceCategories" :key="category.title">
        <h2>{{ category.title }}</h2>
        <div class="service-list">
          <div v-for="service in category.services" :key="service.name" class="service-item">
            <span class="service-icon">{{ service.icon }}</span>
            <div class="service-content">
              <h3>{{ service.name }}</h3>
              <p>{{ service.description }}</p>
            </div>
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
      serviceCategories: [
        {
          title: 'Ditlhakišo le Meketeko',
          services: [
            {
              name: 'Diketekete tša Lenyalo',
              icon: '💍',
              description: 'Traditional Pedi wedding performances with authentic Sekgapa dancers'
            },
            {
              name: 'Meketeko ya Setšhaba',
              icon: '🥁',
              description: 'Cultural heritage performances for community gatherings and celebrations'
            },
            {
              name: 'Dinaka tša Moletlo',
              icon: '🪘',
              description: 'Traditional reed pipe ensemble performances for special events'
            },
            {
              name: 'Dipasa le Matlakaleng',
              icon: '🎭',
              description: 'Seasonal harvest celebration performances and demonstrations'
            }
          ]
        },
        {
          title: 'Thuto ya Setšo',
          services: [
            {
              name: 'Sekolo sa Dinaka',
              icon: '🎵',
              description: 'Traditional Pedi reed pipe and drum ensemble workshops'
            },
            {
              name: 'Sekgapa sa Basadi',
              icon: '💃',
              description: 'Women\'s traditional Pedi dance instruction and cultural education'
            },
            {
              name: 'Thuto ya Polelo',
              icon: '🗣️',
              description: 'Sepedi language classes and cultural expression workshops'
            },
            {
              name: 'Bokgabo bja Setšo',
              icon: '🎨',
              description: 'Traditional craft workshops including beadwork and pottery'
            }
          ]
        },
        {
          title: 'Ditirelo tše Dingwe',
          services: [
            {
              name: 'Meropa ya Setšo',
              icon: '🛠️',
              description: 'Traditional drum crafting and repair services'
            },
            {
              name: 'Diaparo tša Setšo',
              icon: '👗',
              description: 'Authentic Pedi attire creation and rental for events and ceremonies'
            },
            {
              name: 'Dijo tša Setšo',
              icon: '🍲',
              description: 'Traditional Pedi cuisine catering for cultural events'
            },
            {
              name: 'Keletšo ya Meetlo',
              icon: '🧠',
              description: 'Cultural consultancy for proper protocol in ceremonies and rituals'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.pedi-services-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  color: #5E2612;
  background-color: #FFF6E9;
}

h1 {
  color: #783D17;
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.subtitle {
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 3rem;
  color: #80461B;
}

.services-categories {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}

.service-category {
  background: linear-gradient(to right, rgba(232, 159, 69, 0.1), transparent);
  padding: 2rem;
  border-left: 4px solid #E89F45;
}

.service-category h2 {
  color: #783D17;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
}

.service-category h2::after {
  content: "";
  display: block;
  width: 100%;
  height: 3px;
  background: #B36A27;
  margin-top: 0.5rem;
}

.service-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.service-item {
  display: flex;
  align-items: flex-start;
  background: #FFF;
  padding: 1.5rem;
  border: 1px solid #E89F45;
  box-shadow: 0 3px 8px rgba(179, 106, 39, 0.15);
}

.service-icon {
  font-size: 2rem;
  margin-right: 1rem;
  background: #E89F45;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  flex-shrink: 0;
}

.service-content {
  flex-grow: 1;
}

.service-content h3 {
  color: #783D17;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.service-content p {
  font-size: 0.95rem;
  color: #5E2612;
  line-height: 1.5;
}
</style>
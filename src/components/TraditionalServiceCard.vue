<template>
  <article class="pedi-service-card">
    <div class="service-icon">{{ service.icon }}</div>
    <h3 class="service-title">{{ service.title }}</h3>
    <p class="service-description">{{ service.description }}</p>
    <div class="traditional-styles">
      <span v-for="style in service.styles" :key="style" class="style-tag">
        {{ style }}
      </span>
    </div>
    <router-link to="/contact" class="sekgapa-button">Botšiša / Inquire</router-link>
  </article>
</template>

<script>
export default {
  name: 'TraditionalServiceCard',
  props: {
    service: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.pedi-service-card {
  background: #FFF6E9;
  padding: 2rem;
  border-radius: 0;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border: 2px solid #B36A27;
  position: relative;
  overflow: hidden;
}

.pedi-service-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 8px;
  background: repeating-linear-gradient(
    90deg,
    #E89F45,
    #E89F45 8px,
    #B36A27 8px,
    #B36A27 16px
  );
}

.service-icon {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  background: #E89F45;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin: 0 auto 1.5rem;
  box-shadow: 0 2px 8px rgba(179, 106, 39, 0.3);
}

.service-title {
  color: #783D17;
  font-family: 'Segoe UI', Tahoma, sans-serif;
  font-size: 1.5rem;
  margin-bottom: 0.8rem;
  position: relative;
  display: inline-block;
}

.service-title::after {
  content: "";
  display: block;
  width: 70%;
  height: 2px;
  background: #B36A27;
  margin: 0.4rem auto 0;
}

.service-description {
  color: #5E2612;
  margin-bottom: 1.2rem;
  font-size: 1rem;
  line-height: 1.6;
}

.traditional-styles {
  margin: 1.2rem 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

.style-tag {
  background: #80461B;
  color: #FFF6E9;
  padding: 0.4rem 0.9rem;
  border-radius: 0;
  font-size: 0.9rem;
  position: relative;
  box-shadow: 0 2px 4px rgba(128, 70, 27, 0.3);
}

.style-tag::before, .style-tag::after {
  content: "×";
  margin: 0 0.4rem;
  opacity: 0.7;
}

.sekgapa-button {
  display: inline-block;
  background: #783D17;
  color: #FFF6E9;
  padding: 0.7rem 1.5rem;
  text-decoration: none;
  font-weight: bold;
  border: none;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  border-radius: 0;
  margin-top: 0.8rem;
}

.sekgapa-button:hover {
  background: #B36A27;
  transform: translateY(-2px);
}
</style>
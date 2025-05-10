<template>
  <nav class="main-nav">
    <router-link to="/" class="brand">Dance Collective</router-link>
    <div class="nav-links">
      <router-link to="/">Home</router-link>
      <router-link to="/services">Services</router-link>
      <router-link to="/events">Events</router-link>
      <router-link to="/gallery">Gallery</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
  </nav>
</template>

<style scoped>
.main-nav {
  background: #34495e;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #3498db;
}

.router-link-exact-active {
  border-bottom: 2px solid #3498db;
}
</style>
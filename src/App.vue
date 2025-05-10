<template>
  <div id="app">
    <Navbar />
    <main class="main-content">
      <router-view />
    </main>
    <footer class="site-footer">
      <p>&copy; 2024 Dynamic Dance Collective. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  components: { Navbar }
}
</script>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding: 2rem;
}

.site-footer {
  background: #2c3e50;
  color: white;
  text-align: center;
  padding: 1rem;
  margin-top: auto;
}
</style>
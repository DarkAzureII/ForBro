<template>
  <div class="contact-page">
    <div class="contact-container">
      <h1>Book a Performance</h1>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label>Name:</label>
          <input v-model="form.name" type="text" required>
        </div>
        
        <div class="form-group">
          <label>Email:</label>
          <input v-model="form.email" type="email" required>
        </div>

        <div class="form-group">
          <label>Event Type:</label>
          <select v-model="form.eventType" required>
            <option value="wedding">Wedding</option>
            <option value="corporate">Corporate Event</option>
            <option value="festival">Festival</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div class="form-group">
          <label>Message:</label>
          <textarea v-model="form.message" required></textarea>
        </div>

        <button type="submit" class="submit-btn">Send Inquiry</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        eventType: 'wedding',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      // Handle form submission
      console.log('Form submitted:', this.form)
      alert('Thank you for your inquiry! We will respond within 24 hours.')
      this.resetForm()
    },
    resetForm() {
      this.form = {
        name: '',
        email: '',
        eventType: 'wedding',
        message: ''
      }
    }
  }
}
</script>
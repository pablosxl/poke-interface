<template>
  <div class="home">
      <div>
        <AppBar />
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AppBar from '@/components/core/AppBar.vue'

export default {
  name: 'Home',
  components: {
    AppBar
  }
}
</script>

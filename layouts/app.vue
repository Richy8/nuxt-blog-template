<template>
  <div class="hard-base-bg">
    <!-- HEADER SECTION -->
    <Header />

    <!-- BODY SECTION -->
    <Nuxt />

    <!-- FOOTER SECTION -->
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'App',
})
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
}
</style>
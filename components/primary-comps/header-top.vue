<template>
  <div class="app-container header-top">
    <!-- NAV ITEMS -->
    <div class="nav-items">
      <nuxt-link to="/about" class="nav-item">About Us</nuxt-link>
      <nuxt-link to="/contact" class="nav-item">Contact Us</nuxt-link>
      <nuxt-link to="/privacy-policy" class="nav-item"
        >Privacy Policy</nuxt-link
      >
      <!-- <nuxt-link to class="nav-item">DCMA</nuxt-link> -->
    </div>

    <!-- NAV SOCIALS -->
    <div class="nav-socials">
      <a href="">
        <span class="icon-facebook-fill"></span>
      </a>

      <a href="">
        <span class="icon-twitter"></span>
      </a>

      <a href="">
        <span class="icon-youtube"></span>
      </a>

      <a href="">
        <span class="icon-instagram"></span>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HeaderTop',
})
</script>

<style lang="scss">
.header-top {
  @include flex-row-nowrap('space-between', 'center');

  .nav-item {
    @include font-style(12.75, 30);
    margin-right: toRem(18);
    color: $white;

    @include breakpoint-custom-down(400) {
      margin-right: toRem(12);
    }

    &:last-of-type {
      margin-right: 0;
    }

    &:hover {
      color: $off-white;
      text-decoration: none;
    }
  }

  .nav-socials {
    @include flex-row-nowrap('flex-end', 'center');

    a {
      margin-left: toRem(18);

      @include breakpoint-custom-down(400) {
        margin-left: toRem(12);
      }

      &:first-of-type {
        margin-right: 0;
      }
    }
  }
}
</style>
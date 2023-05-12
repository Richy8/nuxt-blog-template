<template>
  <div class="app-container header-base">
    <!-- LEFT COLUMN -->
    <div class="left-column">
      <!-- BRAND LOGO -->
      <BrandLogo minimize />

      <!-- NAVIGATIONS -->
      <div class="nav-items">
        <nuxt-link
          to="/categories/hacks"
          exact-active-class="nav-item-active"
          class="nav-item hard-pen"
        >
          CODE HACKS
        </nuxt-link>

        <nuxt-link
          to="/categories/design"
          exact-active-class="nav-item-active"
          class="nav-item hard-pen"
        >
          CREATIVE DESIGN
        </nuxt-link>

        <nuxt-link
          to="/categories/lifestyle"
          exact-active-class="nav-item-active"
          class="nav-item hard-pen"
        >
          LIFESTYLE
        </nuxt-link>
      </div>
    </div>

    <!-- RIGHT COLUMN -->
    <div class="right-column">
      <!-- THEME TOGGLER -->
      <ThemeToggler />

      <!-- SEARCH ICON -->
      <div
        class="search-wrapper rounded-circle pointer hard-base-bg soft-shadow-effect"
        @click="toggleSearch"
      >
        <div class="icon icon-search place-center hard-pen f-size-17"></div>
      </div>

      <!-- HAMBURGER MENU -->
      <div class="menu pointer mgl-16">
        <div class="icon icon-hamburger soft-pen"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HeaderBase',

  methods: {
    toggleSearch() {
      this.$emit('toggleSearch')
    },
  },
})
</script>

<style lang="scss">
.header-base {
  @include flex-row-nowrap('space-between', 'center');
  @include transition(0.3s);

  .left-column {
    @include flex-row-nowrap('flex-start', 'center');

    .nav-items {
      margin-left: toRem(18);

      @include breakpoint-down(md) {
        display: none;
      }

      .nav-item {
        @include font-style(14.5, 22, 600);
        @include transition(0.1s);
        text-transform: uppercase;
        position: relative;
        margin: 0 toRem(12);
        padding: 0 toRem(4);
        top: toRem(1.5);

        &:hover {
          color: $primary;
        }
      }

      .nav-item-active {
        color: lighten($primary, 6%) !important;

        &::after {
          content: '';
          position: absolute;
          left: 0;
          width: 100%;
          top: toRem(36);
          border-bottom: toRem(4) solid lighten($primary, 6%);
        }
      }
    }
  }

  .right-column {
    @include flex-row-nowrap('flex-end', 'center');

    .search-wrapper {
      position: relative;
      @include draw-shape(32);

      &:hover {
        background: rgba($primary, 0.2);
      }
    }

    .menu {
      display: none;
      margin-right: toRem(-8);

      @include breakpoint-down(md) {
        display: unset;
      }

      @include breakpoint-custom-down(400) {
        margin-left: toRem(10) !important;
      }

      .icon {
        font-size: toRem(40);
      }
    }
  }
}
</style>
<template>
  <div
    class="theme-toggler rounded-25 soft-shadow-effect pd-2 mgr-16 hard-base-bg pointer"
    @click="toggleMode"
  >
    <div class="toggler light-mode" :class="is_light && 'active'">
      <div class="wrapper">
        <div class="icon icon-light-mode primary-text"></div>
      </div>
    </div>

    <div class="toggler dark-mode" :class="!is_light && 'active'">
      <div class="wrapper">
        <div class="icon icon-dark-mode primary-text"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ThemeToggler',

  data: () => ({
    is_light: true,
    data_theme: 'light',
  }),

  watch: {
    data_theme: {
      handler(value) {
        document.body.setAttribute('data-mode', value)
      },
    },
  },

  beforeMount() {
    this.data_theme = localStorage.getItem('data-theme') ?? 'light'
    this.is_light = this.data_theme === 'light' ? true : false
    document.body.setAttribute('data-mode', this.data_theme)
  },

  methods: {
    toggleMode() {
      this.is_light = !this.is_light
      this.data_theme = this.is_light ? 'light' : 'dark'
      localStorage.setItem('data-theme', this.data_theme)
    },
  },
})
</script>

<style lang="scss" scoped>
.theme-toggler {
  position: relative;
  width: toRem(54);
  height: toRem(32);
  box-shadow: inset toRem(1.5) toRem(1) toRem(5) rgba(174, 177, 176, 0.3);

  @include breakpoint-custom-down(400) {
    margin-right: toRem(12) !important;
  }

  .toggler {
    @include center-placement('y-axis');
    @include transition(0.4s);
    @include draw-shape(25);
    border-radius: 50%;

    .wrapper {
      position: relative;
      @include width-height(100%);

      .icon {
        @include center-placement();
        @include transition(0.4s);
        font-size: toRem(13);
        opacity: 0.45;
      }
    }
  }

  .light-mode {
    left: toRem(3);
  }

  .dark-mode {
    right: toRem(3);
  }

  .active {
    background: $white;
    box-shadow: toRem(2.5) toRem(1.5) toRem(8) rgba($primary, 0.4);

    .icon {
      font-size: toRem(14.5);
      opacity: 1 !important;
    }
  }
}
</style>
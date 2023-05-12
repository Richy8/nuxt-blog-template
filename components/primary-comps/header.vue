<template>
  <header class="w-100 mgb-25">
    <!-- HEADER TOP AREA -->
    <div class="header-top-area w-100 primary-bg">
      <HeaderTop />
    </div>

    <!-- HEADER BASE AREA -->
    <div class="outer-wrapper">
      <div class="header-base-area w-100 soft-base-bg soft-shadow-effect">
        <HeaderBase @toggleSearch="toggleSearchModal" />
      </div>
    </div>

    <SearchPostModal
      v-if="show_search_modal"
      @closeTriggered="toggleSearchModal"
    />
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Header',

  mounted() {
    window.addEventListener('scroll', this.handleTopBarScroll)
  },

  data: () => ({
    show_search_modal: false,
  }),

  methods: {
    handleTopBarScroll() {
      let outerWrapper = document.querySelector('.outer-wrapper')
      outerWrapper?.classList.toggle('sticky', window.scrollY > 30)
    },

    toggleSearchModal() {
      this.show_search_modal = !this.show_search_modal
    },
  },
})
</script>

<style lang="scss" scoped>
header {
  .header-base-area {
    padding: toRem(12) 0;
  }
}

.sticky {
  position: relative;
  padding-bottom: 66px;

  .header-base-area {
    backdrop-filter: blur(8px);
    @include transition(0.6s);
    position: fixed;
    opacity: 0.95;
    z-index: 10;
    top: 0;
  }
}
</style>
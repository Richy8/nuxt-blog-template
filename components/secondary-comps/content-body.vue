<template>
  <div class="content-body" ref="contentBody">
    <!-- CONTENTS AREA -->
    <main class="content-area">
      <slot></slot>
    </main>

    <!-- SIDEBAR AREA -->
    <aside class="sidebar-area" v-if="isMobileView">
      <Sidebar />
    </aside>

    <aside
      v-else
      class="sidebar-area"
      v-sticky-sidebar="{ topSpacing: 20, bottomSpacing: 20 }"
    >
      <Sidebar />
    </aside>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface Data {
  isMobileView: boolean
}

export default Vue.extend({
  name: 'ContentBody',

  data(): Data {
    return {
      isMobileView: false,
    }
  },

  mounted() {
    this.$nextTick(() => this.updateElementState(window.innerWidth <= 870))

    window.addEventListener('resize', this.handleResize)
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  },

  methods: {
    handleResize() {
      this.updateElementState(window.innerWidth <= 870)
    },

    updateElementState(is_mobile: boolean) {
      // this.$nextTick(() =>  this.isMobileView = is_mobile)
      this.isMobileView = is_mobile
      console.log(this.isMobileView)
    },
  },
})
</script>

<style lang="scss" scoped>
.content-body {
  @include flex-row-nowrap('space-between', 'flex-start');

  @include breakpoint-custom-down(870) {
    @include flex-column('flex-start', 'flex-start');
  }

  @include breakpoint-down(md) {
    margin-top: toRem(-12);
  }

  .content-area {
    width: 68%;

    @include breakpoint-custom-down(870) {
      width: 100%;
    }
  }

  .sidebar-area {
    width: 30%;

    @include breakpoint-custom-down(870) {
      width: 100%;
    }
  }
}

.inner-wrapper-sticky {
  @include breakpoint-custom-down(870) {
    position: unset !important;
  }
}
</style>
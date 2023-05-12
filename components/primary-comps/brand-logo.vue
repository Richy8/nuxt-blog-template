<template>
  <nuxt-link to="/" class="brand-logo-section" :class="minimize && 'miniature'">
    <div class="icon icon-mena primary-text mgr-7"></div>
    <div class="brand-name fw-bold hard-pen">MENA</div>

    <!-- SPLIT LINE -->
    <div class="split-line soft-pen-bg"></div>

    <div class="type-text soft-pen f-size-14-5">Blog</div>
  </nuxt-link>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

export default Vue.extend({
  name: 'BrandLogo',

  props: {
    minimize: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
})
</script>

<style lang="scss" scoped>
.brand-logo-section {
  @include flex-row-nowrap('flex-start', 'center');

  .icon {
    font-size: toRem(36);
  }

  .brand-name {
    font-size: toRem(28);

    @include breakpoint-custom-down(400) {
      font-size: toRem(25);
    }
  }

  .split-line {
    margin: auto toRem(8);
    width: toRem(0.5);
    height: toRem(24);
  }
}

.miniature {
  @include breakpoint-custom-down(400) {
    .icon {
      font-size: toRem(32);
    }

    .brand-name {
      font-size: toRem(25);
    }

    .split-line,
    .type-text {
      display: none;
    }
  }
}
</style>
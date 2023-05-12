<template>
  <div class="block-top-row mgb-20">
    <div class="block-title hard-pen text-uppercase">
      {{ options.title }}
    </div>

    <nuxt-link to class="option-text" v-if="options.link">View all</nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

interface Options {
  title: string
  link: string
}

export default Vue.extend({
  name: 'BlockTopRow',

  props: {
    options: {
      type: Object as PropType<Options>,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.block-top-row {
  @include flex-row-nowrap('space-between', 'flex-start');
  padding-bottom: toRem(20);
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: toRem(34);
    height: toRem(2.25);
    left: 0;
    bottom: toRem(-0.75);
    background: $primary;
  }

  .block-title {
    @include font-style(15, 15, 700);
  }

  .option-text {
    @include font-style(14, 14, 300);
    @include transition(0.4s);

    &:hover {
      color: rgba($primary, 0.85);
    }
  }
}

@each $color-type, $color-shades in $color-mode {
  [data-mode='#{$color-type}'] {
    @each $color-shade, $color in $color-shades {
      .block-top-row {
        border-bottom: toRem(1) solid rgba($color, 0.1);

        .option-text {
          color: rgba($color, 0.7);
        }
      }
    }
  }
}
</style>
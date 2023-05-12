<template>
  <nuxt-link to class="category w-100 rounded-2">
    <img :src="options.image" alt="" class="rounded-2" />

    <!-- OVERLAY -->
    <div class="overlay top-0"></div>

    <div class="position-relative index-9">
      <div class="title primary-1-text fw-semibold">{{ options.title }}</div>
      <div class="description tertiary-3-text">
        {{ options.count }} blog posts
      </div>
    </div>
  </nuxt-link>
  <!-- :style="{ background: 'url(' + options.image + ')' }" -->
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

interface Options {
  image: string
  title: string
  count: string
}

export default Vue.extend({
  name: 'Category',

  props: {
    options: {
      type: Object as PropType<Options>,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.category {
  padding: toRem(16) toRem(18);
  @include transition(0.35s);
  position: relative;

  img {
    @include set-full-bg();
    @include stretch-area();
  }

  .overlay {
    background: rgba(#000, 0.5);
    @include transition(0.35s);
    @include stretch-area();
    position: absolute;
  }

  .title {
    font-size: toRem(15.5);
    color: $white;
  }

  .description {
    color: $off-white;
  }

  &:hover {
    transform: scale(1.01);

    .overlay {
      background: rgba(#000, 0.65);
    }
  }
}
</style>
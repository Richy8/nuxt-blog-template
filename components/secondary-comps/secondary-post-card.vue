<template>
  <nuxt-link to class="secondary-post-card">
    <!-- POST IMAGE -->
    <div class="post-image position-relative">
      <img :src="post.image" alt="" />
    </div>

    <div>
      <div class="post-title hard-pen mgb-4">{{ post.title }}</div>
      <div class="post-date soft-pen">{{ post.created_at }}</div>
    </div>
  </nuxt-link>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

interface Post {
  id: number
  tag: string
  title: string
  image: string
  author: string
  created_at: string
}

export default Vue.extend({
  name: 'SecondaryPostCard',

  props: {
    post: {
      type: Object as PropType<Post>,
    },
  },
})
</script>

<style lang="scss" scoped>
.secondary-post-card {
  @include flex-row-nowrap('flex-start', 'flex-start');
  position: relative;

  .post-image {
    @include draw-shape(98, 65);
    margin-right: toRem(15);
    overflow: hidden;

    img {
      @include width-height(100%);
      @include transition(0.3s);
    }

    &:hover {
      img {
        transform: scale(1.06);
      }
    }
  }

  .post-title {
    @include font-style(14, 21, $semibold);
    // @include transition(0.1s);

    &:hover {
      color: $primary;
    }

    @include breakpoint-custom-down(620) {
      @include font-style(17, 21, $semibold);
    }

    @include breakpoint-down(sm) {
      @include font-style(16, 20, $semibold);
    }
  }

  .post-date {
    @include font-style(12, 18, $thin);

    @include breakpoint-custom-down(620) {
      @include font-style(12.5, 18, $thin);
    }
  }
}
</style>
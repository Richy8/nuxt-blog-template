<template>
  <nuxt-link to="/post/hacks" class="tertiary-post-card">
    <!-- POST IMAGE -->
    <div class="post-image position-relative">
      <img :src="post.image" alt="" />

      <!-- POST LABEL -->
      <div class="post-label primary-bg fw-500 white-text text-uppercase">
        {{ post.tag }}
      </div>
    </div>

    <div>
      <h3 class="post-title hard-pen mgb-10">{{ post.title }}</h3>
      <div class="post-description soft-pen mgb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        facere provident velit totam quasi ...
      </div>

      <div class="post-meta faded-ash">
        by <span class="primary-text">{{ post.author }}</span> -
        {{ post.created_at }}
      </div>
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
  name: 'TertiaryPostCard',

  props: {
    post: {
      type: Object as PropType<Post>,
    },
  },
})
</script>

<style lang="scss" scoped>
.tertiary-post-card {
  @include flex-column('flex-start', 'flex-start');
  position: relative;

  .post-image {
    margin-bottom: toRem(16);
    height: toRem(190);
    overflow: hidden;
    width: 100%;

    @include breakpoint-down(xs) {
      height: toRem(170);
    }

    img {
      @include transition(0.3s);
      @include set-full-bg;

      @include breakpoint-down(sm) {
      }
    }

    &:hover {
      img {
        transform: scale(1.06);
      }
    }

    .post-label {
      padding: toRem(1) toRem(7) 0 toRem(7);
      font-size: toRem(10);
      position: absolute;
      width: max-content;
      bottom: toRem(5);
      left: toRem(5);
    }
  }

  .post-title {
    @include font-style(20.5, 27, $semibold);
    // @include transition(0.1s);

    &:hover {
      color: $primary;
    }

    @include breakpoint-down(sm) {
      @include font-style(19, 27.5, $semibold);
    }

    @include breakpoint-down(xs) {
      @include font-style(18.5, 26, $semibold);
    }
  }

  .post-description {
    @include font-style(14.5, 22, $thin);
  }

  .post-meta {
    @include font-style(13.25, 19, $thin);
  }
}
</style>
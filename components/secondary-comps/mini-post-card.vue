<template>
  <nuxt-link to class="mini-post-card">
    <!-- POST IMAGE -->
    <div class="post-image position-relative">
      <img :src="post.image" alt="" />

      <!-- POST LABEL -->
      <div class="post-label primary-bg fw-500 white-text text-uppercase">
        {{ post.tag }}
      </div>
    </div>

    <div>
      <h3 class="post-title hard-pen mgb-5">{{ post.title }}</h3>

      <div class="post-meta faded-ash">
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
  name: 'MiniPostCard',

  props: {
    post: {
      type: Object as PropType<Post>,
    },
  },
})
</script>

<style lang="scss" scoped>
.mini-post-card {
  @include flex-column('flex-start', 'flex-start');
  position: relative;

  .post-image {
    margin-bottom: toRem(14);
    height: toRem(120);
    overflow: hidden;
    width: 100%;

    @include breakpoint-down(sm) {
      height: toRem(150);
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
    @include font-style(14.5, 20, $medium);
    @include transition(0.3s);

    &:hover {
      color: $primary;
    }
  }

  .post-meta {
    @include font-style(12, 19, $thin);
  }
}
</style>
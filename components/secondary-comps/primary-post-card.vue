<template>
  <nuxt-link
    to="/post/mypost"
    class="primary-post-card d-block position-relative"
    :class="getCardColor"
  >
    <!-- POST IMAGE -->
    <img :src="post.image" alt="" />

    <!-- BOTTOM CONTENT -->
    <div class="bottom-content">
      <!-- POST LABEL -->
      <div
        class="post-label primary-bg mgb-10 fw-500 white-text text-uppercase"
      >
        {{ post.tag }}
      </div>

      <!-- POST TITLE -->
      <div class="post-title mgb-4 white-text">
        {{ post.title }}
      </div>

      <!-- POST META -->
      <div class="post-meta">
        <span v-if="card_style !== 'sm'">
          by <span class="post-author">{{ post.author }}</span> -
        </span>
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
  name: 'PrimaryPostCard',

  props: {
    post: {
      type: Object as PropType<Post>,
    },

    card_style: {
      type: String as PropType<string>,
      default: 'sm',
    },
  },

  computed: {
    getCardColor() {
      if (this.card_style === 'lg') return 'primary-card-lg'
      else if (this.card_style === 'md') return 'primary-card-md'
      else if (this.card_style === 'md-lg') return 'primary-card-md-lg'
      else return null
    },
  },
})
</script>

<style lang="scss" scoped>
.primary-post-card {
  @include width-height(100%);
  overflow: hidden;

  img {
    @include transition(0.3s);
    @include set-full-bg();
  }

  .bottom-content {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.05),
      rgba(0, 0, 0, 0.75)
    );
    overflow: hidden;
    z-index: 9;
    padding: toRem(12);

    .post-label {
      padding: toRem(1) toRem(7) 0 toRem(7);
      font-size: toRem(10);
      width: max-content;
    }

    .post-title {
      @include font-style(15, 20.25, $semibold);

      @include breakpoint-custom-down(620) {
        @include font-style(19, 25.75, $semibold);
      }
    }

    .post-meta {
      @include font-style(12, 19.6, $thin);
      color: $soft_pen_dark;

      @include breakpoint-custom-down(620) {
        @include font-style(13, 19.6, $thin);
      }

      .post-author {
        color: $white;
      }
    }
  }
  &:hover {
    img {
      transform: scale(1.06);
    }
  }
}

.primary-card-md {
  .bottom-content {
    .post-title {
      @include font-style(19, 25.75, $semibold);
    }
  }
}

.primary-card-md-lg {
  .bottom-content {
    .post-title {
      @include font-style(21, 28.35, $semibold);
    }
  }
}

.primary-card-lg {
  .bottom-content {
    padding: toRem(15);

    .post-title {
      @include font-style(25, 32, $semibold);

      @include breakpoint-down(sm) {
        @include font-style(23, 32, $semibold);
      }
    }
  }
}
</style>
<template>
  <div class="trending-row rounded-2 soft-base-bg mgb-25 w-100">
    <!-- LEFT SECTION -->
    <div class="left-section">
      <div class="indicator rounded-circle mgr-8"></div>
      <div class="title primary-2-text fw-bold primary-text mgr-5">
        TRENDING
      </div>
      <div class="icon icon-caret-right primary-text f-size-10"></div>

      <nuxt-link to class="post hard-pen mgl-10 tertiary-2-text">
        {{ getCurrentPost }}
      </nuxt-link>
    </div>

    <!-- RIGHT SECTION -->
    <div class="right-section mgl-10">
      <div class="nav mgr-4" title="Previous post" @click="navigatePost(-1)">
        <div class="wrapper">
          <div class="icon icon-caret-left hard-pen"></div>
        </div>
      </div>

      <div class="nav mgl-4" title="Next post" @click="navigatePost(+1)">
        <div class="wrapper">
          <div class="icon icon-caret-right hard-pen"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TrendingRow',

  computed: {
    getCurrentPost() {
      return this.posts[this.active_post_index].title
    },
  },

  data: () => ({
    active_post_index: 0,
    posts: [
      {
        id: 1,
        title: 'How a create a micro-frontend vuejs ecommerce application',
        link: '',
      },
      {
        id: 2,
        title:
          'Breaking Bad Habits: Tips for Writing Clean and Maintainable Code',
        link: '',
      },
      {
        id: 3,
        title: '10 Essential Keyboard Shortcuts for Faster Coding',
        link: '',
      },
      {
        id: 4,
        title:
          'Mastering Debugging: Tips and Tricks for Finding and Fixing Bugs',
        link: '',
      },
    ],
  }),

  mounted() {
    setInterval(() => this.navigatePost(+1), 5000)
  },

  methods: {
    navigatePost(index: number): void {
      this.active_post_index = this.active_post_index + index

      if (this.active_post_index < 0)
        this.active_post_index = this.posts.length - 1
      else if (this.active_post_index > 3) this.active_post_index = 0
    },
  },
})
</script>

<style lang="scss" scoped>
.trending-row {
  box-shadow: 0 toRem(0.5) toRem(3) rgba(169, 172, 171, 0.25);
  @include flex-row-nowrap('space-between', 'center');
  padding: toRem(10) toRem(15);

  @include breakpoint-custom-down(620) {
    padding: toRem(10) toRem(12);
    border-radius: 1px !important;
  }

  .left-section {
    @include flex-row-nowrap('flex-start', 'center');

    .indicator {
      @include draw-shape(6);
      background: rgba($primary, 0.6);
      box-shadow: 0 0 toRem(1) toRem(1) #0000001a;
      animation: pulse-animation 2s infinite;
    }

    .title {
      @include breakpoint-custom-down(620) {
        font-size: toRem(13.5);
      }
    }

    .post {
      // @include transition(0.2s);
      font-size: toRem(14.5);

      &:hover {
        color: $primary;
      }

      @include breakpoint-custom-down(620) {
        font-size: toRem(14);
      }
    }
  }

  .right-section {
    @include flex-row-nowrap('flex-end', 'center');

    @include breakpoint-custom-down(620) {
      display: none;
    }

    .nav {
      @include transition(0.1s);
      @include draw-shape(22);
      border-radius: toRem(4);
      position: relative;
      background: rgba($off-white, 0.2);
      cursor: pointer;

      &:hover {
        background: rgba($primary, 0.2);
      }

      .wrapper {
        position: relative;
        @include width-height('100%');

        .icon {
          @include center-placement();
          font-size: toRem(10);
        }
      }
    }
  }
}

@keyframes pulse-animation {
  0% {
    box-shadow: 0 0 0 0 rgba($primary, 0.35);
  }

  100% {
    box-shadow: 0 0 0 toRem(8) rgba($primary, 0);
  }
}
</style>
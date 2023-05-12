<template>
  <div class="post-activity">
    <!-- SHARE AREA -->
    <div class="share-block" v-if="options.show_share">
      <!-- FACEBOOK SHARE -->
      <a
        href="http://#"
        rel="noopener noreferrer"
        target="_blank"
        class="social social-fb"
      >
        <div class="icon-wrapper">
          <div class="icon icon-facebook-fill"></div>
        </div>

        <div class="social-text">Facebook</div>
      </a>

      <!-- TWITTER SHARE -->
      <a
        href="http://#"
        rel="noopener noreferrer"
        target="_blank"
        class="social social-tw"
      >
        <div class="icon-wrapper">
          <div class="icon icon-twitter"></div>
        </div>

        <div class="social-text">Twitter</div>
      </a>

      <!-- LINKEDIN SHARE -->
      <a
        href="http://#"
        rel="noopener noreferrer"
        target="_blank"
        class="social social-ln"
      >
        <div class="icon-wrapper">
          <div class="icon icon-linkedin"></div>
        </div>

        <div class="social-text">LinkedIn</div>
      </a>

      <!-- WHATSAPP SHARE -->
      <a
        href="http://#"
        rel="noopener noreferrer"
        target="_blank"
        class="social social-wt"
      >
        <div class="icon-wrapper">
          <div class="icon icon-whatsapp"></div>
        </div>

        <div class="social-text">Whatsapp</div>
      </a>
    </div>

    <!-- ACTIONS BLOCK -->
    <div class="actions-block">
      <!-- LIKE ACTION -->
      <div class="activity mgr-10">
        <div class="action hard-base-bg" title="Like post" @click="likePost">
          <div
            class="icon"
            :class="isLiked ? 'icon-love' : 'icon-love-outline'"
          ></div>
        </div>

        <!-- LIKE COUNT -->
        <div class="count hard-pen">12</div>
      </div>

      <!-- COMMENT ACTION -->
      <div class="activity">
        <div class="action hard-base-bg" title="Comments">
          <div class="icon icon-chats-circle"></div>
        </div>

        <!-- COMMENT COUNT -->
        <div class="count hard-pen">20</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

interface Options {
  show_share: boolean
}

export default Vue.extend({
  name: 'PostActivity',

  props: {
    options: {
      type: Object as PropType<Options>,
      default: () => ({
        show_share: false,
      }),
    },
  },

  data: () => ({
    isLiked: false,
  }),

  methods: {
    likePost() {
      this.isLiked = !this.isLiked
    },
  },
})
</script>

<style lang="scss">
.post-activity {
  @include flex-row-wrap('space-between', 'center');

  @include breakpoint-down(sm) {
    @include flex-column('flex-start', 'flex-start');
  }

  .actions-block {
    @include flex-row-nowrap('flex-end', 'center');

    @include breakpoint-down(sm) {
      margin-bottom: toRem(15);
      order: 1;
    }

    .activity {
      @include flex-row-nowrap('flex-start', 'center');

      .count {
        @include font-style(12, 17, 500);
        margin-left: toRem(5);
      }

      &:first-of-type {
        .action {
          color: $youtube-color;

          &:hover {
            background: lighten($youtube-color, 7%);
            color: $white;
          }
        }
      }

      &:last-of-type {
        .action {
          color: $google-color;

          &:hover {
            background: lighten($google-color, 5%);
            color: $white;
          }
        }
      }
    }

    .action {
      @include transition(0.2s);
      @include draw-shape(36);
      border-radius: 50%;
      position: relative;
      cursor: pointer;

      .icon {
        @include center-placement;
        font-size: toRem(18.25);
      }

      .icon-chats-circle {
        font-size: toRem(21);
      }

      .icon-love {
        font-size: toRem(16);
      }
    }
  }

  .share-block {
    @include flex-row-wrap('flex-start', 'flex-start');
    gap: toRem(10);

    @include breakpoint-down(sm) {
      order: 2;
    }

    .social {
      @include flex-row-nowrap('space-between', 'center');
      border-radius: toRem(4);
      margin-bottom: toRem(5);
      width: max-content;
      height: toRem(35);

      .icon-wrapper {
        @include draw-shape(35);
        position: relative;
        background: rgba($white, 0.075);

        .icon {
          @include center-placement;
          font-size: toRem(16);
          color: $white;
        }
      }

      .social-text {
        font-size: toRem(13.25);
        padding: 0 toRem(8.5);

        @include breakpoint-down(sm) {
          font-size: toRem(13);
        }
      }

      &-fb {
        background: $facebook-color;
      }

      &-tw {
        background: $twitter-color;
      }

      &-ln {
        background: $linkedin-color;

        @include breakpoint-custom-down(610) {
          .social-text {
            display: none;
          }
        }
      }

      &-wt {
        background: $whatsapp-color;

        @include breakpoint-custom-down(610) {
          .social-text {
            display: none;
          }
        }
      }
    }
  }
}
</style>
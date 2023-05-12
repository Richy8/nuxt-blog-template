<template>
  <div class="follow-block rounded-2 soft-base-bg mgb-25 w-100">
    <!-- BLCOK TOP ROW -->
    <BlockTopRow :options="{ title: 'Connect with us', link: '' }" />

    <div class="social-row">
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

      <a
        href="http://#"
        rel="noopener noreferrer"
        target="_blank"
        class="social social-yt"
      >
        <div class="icon-wrapper">
          <div class="icon icon-youtube"></div>
        </div>

        <div class="social-text">Youtube</div>
      </a>

      <a
        href="http://#"
        rel="noopener noreferrer"
        target="_blank"
        class="social social-in"
      >
        <div class="icon-wrapper">
          <div class="icon icon-instagram"></div>
        </div>

        <div class="social-text">Instagram</div>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'FollowBack',
})
</script>

<style lang="scss" scoped>
.follow-block {
  padding: toRem(20);

  @include breakpoint-down(md) {
    padding: toRem(18);
  }

  @include breakpoint-custom-down(620) {
    border-radius: 1px !important;
    padding: toRem(15) toRem(14);
  }

  .social-row {
    @include flex-row-wrap('space-between', 'flex-start');

    .social {
      @include flex-row-nowrap('space-between', 'center');
      border-radius: toRem(4);
      margin-bottom: 2.75%;
      height: toRem(35);
      width: 48.85%;

      &:nth-of-type(3),
      &:nth-of-type(4) {
        margin-bottom: 0;
      }

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
        padding-right: toRem(12);
        font-size: toRem(14);
      }

      &-fb {
        background: $facebook-color;
      }

      &-tw {
        background: $twitter-color;
      }

      &-yt {
        background: $youtube-color;
      }

      &-in {
        background: linear-gradient(15deg, #ffb13d, #dd277b, #4d5ed4);
      }
    }
  }
}
</style>
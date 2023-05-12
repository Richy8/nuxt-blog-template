<template>
  <div class="post-author-block rounded-2 soft-base-bg mgb-25 w-100">
    <!-- AUTHOR IMAGE -->
    <div class="author-image rounded-circle">
      <img
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
        alt=""
      />
    </div>

    <!-- AUTHOR DETAILS -->
    <div class="author-details">
      <div class="author-name h7-text fw-bold hard-pen">Efemena Elvis</div>

      <div class="author-bio mgb-18 soft-pen">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quidem
        iure incidunt ab soluta quas ducimus doloribus quos odio quam?
      </div>

      <div class="author-socials">
        <a href="" class="social facebook-bg">
          <div class="icon icon-facebook"></div>
        </a>

        <a href="" class="social twitter-bg">
          <div class="icon icon-twitter"></div>
        </a>

        <a href="" class="social linkedin-bg">
          <div class="icon icon-linkedin"></div>
        </a>

        <a href="" class="social instagram-bg">
          <div class="icon icon-instagram"></div>
        </a>

        <a href="" class="social youtube-bg">
          <div class="icon icon-youtube"></div>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PostAuthorBlock',
})
</script>

<style lang="scss" scoped>
.post-author-block {
  @include flex-row-nowrap('flex-start', 'flex-start');
  padding: toRem(20);

  @include breakpoint-down(md) {
    padding: toRem(15);
  }

  @include breakpoint-down(sm) {
    padding: toRem(12);
  }

  .author-image {
    @include draw-shape(58);
    margin-right: toRem(18);
    position: relative;
    overflow: hidden;

    @include breakpoint-down(md) {
      @include draw-shape(52);
      margin-right: toRem(12);
    }

    img {
      @include set-full-bg;
    }
  }

  .author-details {
    .author-name {
      margin-bottom: toRem(3);
      font-size: toRem(16.25);

      @include breakpoint-down(md) {
        font-size: toRem(15.75);
      }
    }

    .author-bio {
      @include font-style(15, 23);

      @include breakpoint-down(md) {
        @include font-style(14.85, 23);
      }
    }

    .author-socials {
      @include flex-row-nowrap('flex-start', 'center');
      gap: toRem(10);

      .social {
        @include draw-shape(20);
        position: relative;
        border-radius: 50%;
        overflow: hidden;

        .icon {
          @include center-placement;
          font-size: toRem(11.5);
          color: $white;
        }
      }
    }
  }
}
</style>
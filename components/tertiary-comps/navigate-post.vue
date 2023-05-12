<template>
  <div class="navigate-post rounded-2 soft-base-bg mgb-25 w-100">
    <div class="post-wrapper">
      <!-- LEFT SECTION -->
      <nuxt-link to class="section left-section">
        <!-- TOP ROW -->
        <div class="top-row soft-pen">
          <div class="icon icon-arrow-right rotate-180 mgr-8"></div>
          <div class="row-text">PREVIOUS POST</div>
        </div>

        <!-- BOTTOM ROW -->
        <div class="bottom-row">
          <!-- POST IMAGE -->
          <div class="post-image mgr-10">
            <img
              src="https://images.unsplash.com/photo-1616469829718-0faf16324280?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt=""
            />
          </div>

          <!-- POST TITLE -->
          <div class="post-title soft-pen">
            10 ways to optimise your website's SEO
          </div>
        </div>
      </nuxt-link>

      <!-- RIGHT SECTION -->
      <nuxt-link to class="section right-section">
        <!-- TOP ROW -->
        <div class="top-row soft-pen">
          <div class="row-text">NEXT POST</div>
          <div class="icon icon-arrow-right mgl-8"></div>
        </div>

        <!-- BOTTOM ROW -->
        <div class="bottom-row">
          <!-- POST TITLE -->
          <div class="post-title soft-pen">
            10 ways to optimise your website's SEO
          </div>

          <!-- POST IMAGE -->
          <div class="post-image mgl-10">
            <img
              src="https://images.unsplash.com/photo-1616469829718-0faf16324280?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt=""
            />
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'NavigatePost',
})
</script>

<style lang="scss">
.navigate-post {
  padding: toRem(20);

  @include breakpoint-down(md) {
    padding: toRem(18);
  }

  .post-wrapper {
    @include flex-row-nowrap('space-between', 'center');

    .section {
      width: 44%;

      .top-row {
        margin-bottom: toRem(12);

        .row-text {
          @include font-style(12.75, 20, 600);

          @include breakpoint-down(md) {
            @include font-style(12.25, 20, 600);
          }
        }
      }

      .bottom-row {
        .post-image {
          @include draw-shape(90, 50);
          position: relative;
          overflow: hidden;

          @include breakpoint-down(md) {
            display: none;
          }

          img {
            @include width-height(100%);
            @include transition(0.3s);

            @include breakpoint-down(sm) {
              @include set-full-bg;
            }
          }

          &:hover {
            img {
              transform: scale(1.06);
            }
          }
        }

        .post-title {
          @include font-style(14.75, 22, 600);

          @include breakpoint-down(md) {
            @include font-style(14.5, 22, 600);
          }

          &:hover {
            color: $primary;
          }
        }
      }
    }

    .left-section {
      .top-row,
      .bottom-row {
        @include flex-row-nowrap('flex-start', 'center');
      }

      .post-title {
        text-align: left;
      }
    }

    .right-section {
      .top-row,
      .bottom-row {
        @include flex-row-nowrap('flex-end', 'center');
      }

      .post-title {
        text-align: right;
      }
    }
  }
}
</style>
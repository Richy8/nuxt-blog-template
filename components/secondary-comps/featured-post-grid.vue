<template>
  <div class="featured-grid rounded-2 soft-base-bg mgb-25 w-100">
    <!-- LEFT SECTION -->
    <div class="left-section h-100">
      <PrimaryPostCard :post="posts[0]" card_style="lg" />
    </div>

    <!-- RIGHT SECTION -->
    <div class="right-section h-100">
      <!-- TOP SECTION -->
      <div class="top-section w-100">
        <PrimaryPostCard :post="posts[1]" card_style="md" />
      </div>

      <!-- BOTTOM SECTION -->
      <div class="bottom-section w-100">
        <!-- LEFT SIDE -->
        <div class="left-side h-100">
          <PrimaryPostCard :post="posts[2]" />
        </div>

        <!-- RIGHT SIDE -->
        <div class="right-side h-100">
          <PrimaryPostCard :post="posts[3]" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'FeaturedPostGrid',

  data: () => ({
    posts: [
      {
        id: 1,
        tag: 'Lifestyle',
        title: 'Life in the tropical Northern region area of Africa',
        image:
          'https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2831&q=80',
        author: 'Efemena Elvis',
        created_at: 'August 02, 2021',
      },
      {
        id: 2,
        tag: 'Coding',
        title: "10 ways to better optimise your website's SEO",
        image:
          'https://images.unsplash.com/photo-1616469829718-0faf16324280?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        author: 'Efemena Elvis',
        created_at: 'April 8, 2021',
      },
      {
        id: 3,
        tag: 'Work',
        title: 'Creating a proper work-life balance that works',
        image:
          'https://images.unsplash.com/photo-1557804483-ef3ae78eca57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1644&q=80',
        author: 'Efemena Elvis',
        created_at: 'September 12, 2022',
      },
      {
        id: 4,
        tag: 'Programming',
        title: 'Getting a computer science degree the right way',
        image:
          'https://images.unsplash.com/photo-1615869442289-f35f5173db8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2834&q=80',
        author: 'Efemena Elvis',
        created_at: 'January 20, 2023',
      },
    ],
  }),
})
</script>

<style lang="scss" scoped>
.featured-grid {
  @include flex-row-wrap('space-between', 'center');
  padding: toRem(20);
  height: toRem(442);

  @include breakpoint-custom-down(850) {
    height: toRem(420);
  }

  @include breakpoint-down(md) {
    padding: toRem(16);
    height: toRem(380);
  }

  @include breakpoint-custom-down(620) {
    @include flex-column('flex-start', 'flex-start');
    padding: toRem(15) toRem(14);
    border-radius: 1px !important;
    height: auto;
  }

  .left-section {
    background: rgba($off-white, 0.25);
    width: 49.75%;

    @include breakpoint-down(md) {
      width: 49.65%;
    }

    @include breakpoint-custom-down(620) {
      height: toRem(300) !important;
      margin-bottom: toRem(5);
      width: 100%;
    }
  }

  .right-section {
    @include flex-column('space-between', 'center');
    width: 49.75%;

    @include breakpoint-down(md) {
      width: 49.65%;
    }

    @include breakpoint-custom-down(620) {
      width: 100%;
    }

    .top-section {
      background: rgba($off-white, 0.25);
      height: 49.25%;

      @include breakpoint-custom-down(620) {
        margin-bottom: toRem(5);
        height: toRem(150);
      }
    }

    .bottom-section {
      @include flex-row-wrap('space-between', 'center');
      height: 49.25%;

      .left-side {
        background: rgba($off-white, 0.25);
        width: 49.45%;

        @include breakpoint-custom-down(670) {
          width: 100%;
        }

        @include breakpoint-custom-down(620) {
          height: toRem(150) !important;
        }
      }

      .right-side {
        background: rgba($off-white, 0.25);
        width: 49.45%;

        @include breakpoint-custom-down(670) {
          display: none;
        }
      }
    }
  }
}
</style>
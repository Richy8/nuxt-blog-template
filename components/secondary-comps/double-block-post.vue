<template>
  <div class="double-block rounded-2 soft-base-bg mgb-25 w-100">
    <!-- BLCOK TOP ROW -->
    <BlockTopRow :options="{ title: 'Trending Posts', link: 'https://' }" />

    <!-- POST AREA -->
    <div class="post-area">
      <!-- LEFT SIDE -->
      <div class="left-side">
        <PrimaryPostCard :post="posts[0]" card_style="md-lg" />
      </div>

      <!-- RIGHT SIDE -->
      <div class="right-side">
        <div class="post-block">
          <SecondaryPostCard :post="posts[1]" />
        </div>

        <div class="post-block">
          <SecondaryPostCard :post="posts[2]" />
        </div>

        <div class="post-block">
          <SecondaryPostCard :post="posts[3]" />
        </div>

        <div class="post-block">
          <SecondaryPostCard :post="posts[0]" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'DoubleBlockPost',

  data: () => ({
    posts: [
      {
        id: 1,
        tag: 'Technology',
        title: 'How to get election results in realtime on your phone',
        image:
          'https://images.unsplash.com/photo-1624383044286-b0ad68edac0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
        author: 'Efemena Elvis',
        created_at: 'May 08, 2020',
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
.double-block {
  padding: toRem(20);

  @include breakpoint-down(md) {
    padding: toRem(18);
  }

  @include breakpoint-custom-down(620) {
    border-radius: 1px !important;
    padding: toRem(15) toRem(14);
  }

  .post-area {
    @include flex-row-nowrap('space-between', 'center');

    @include breakpoint-custom-down(620) {
      @include flex-row-wrap('space-between', 'center');
    }

    .left-side {
      background: rgba($off-white, 0.25);
      height: toRem(335);
      width: 48.2%;

      @include breakpoint-custom-down(620) {
        margin-bottom: toRem(20);
        height: toRem(200);
        width: 100%;
      }
    }

    .right-side {
      @include flex-column('space-between', 'space-between');
      height: toRem(335);
      width: 48.2%;

      @include breakpoint-custom-down(620) {
        height: auto;
        width: 100%;
      }

      .post-block {
        // background: rgba($off-white, 0.25);
        height: 20.1%;
        width: 100%;

        @include breakpoint-custom-down(620) {
          margin-bottom: toRem(18);
          height: toRem(68);

          &:last-of-type {
            margin-bottom: 0;
          }
        }
      }
    }
  }
}
</style>
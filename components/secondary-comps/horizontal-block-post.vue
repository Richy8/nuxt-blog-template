<template>
  <div class="horizontal-block rounded-2 soft-base-bg mgb-25 w-100">
    <!-- BLCOK TOP ROW -->
    <BlockTopRow :options="options" />

    <!-- POST AREA -->
    <div class="post-area">
      <div class="post-block">
        <TertiaryPostCard :post="posts[1]" />
      </div>

      <div class="post-block">
        <TertiaryPostCard :post="posts[2]" />
      </div>

      <div class="post-block">
        <TertiaryPostCard :post="posts[3]" />
      </div>

      <div class="post-block">
        <TertiaryPostCard :post="posts[0]" />
      </div>

      <div class="post-block">
        <TertiaryPostCard :post="posts[1]" />
      </div>

      <div class="post-block">
        <TertiaryPostCard :post="posts[2]" />
      </div>
    </div>

    <!-- LOAD MORE BUTTON -->
    <button class="btn btn-secondary hard-pen w-100">
      Load More <span class="icon icon-caret-down f-size-11 mgl-7"></span>
    </button>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

interface Options {
  title: string
  link: string
  show_more: boolean
}

export default Vue.extend({
  name: 'HorizontalBlockPost',

  props: {
    options: {
      type: Object as PropType<Options>,
      required: true,
    },
  },

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
.horizontal-block {
  padding: toRem(20);

  @include breakpoint-down(md) {
    padding: toRem(16);
  }

  .post-area {
    @include flex-row-wrap('space-between', 'flex-start');

    .post-block {
      margin-bottom: toRem(30);
      width: 48.2%;

      @include breakpoint-down(sm) {
        width: 100%;
      }
    }
  }
}
</style>
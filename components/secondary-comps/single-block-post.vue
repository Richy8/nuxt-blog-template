<template>
  <div class="single-block rounded-2 soft-base-bg mgb-25 w-100">
    <!-- BLCOK TOP ROW -->
    <BlockTopRow :options="options" />

    <!-- POST AREA -->
    <div class="post-area">
      <div class="main-post w-100 mgb-23">
        <PrimaryPostCard :post="posts[0]" card_style="md" />
      </div>

      <div class="post-block">
        <SecondaryPostCard :post="posts[1]" />
      </div>

      <div class="post-block">
        <SecondaryPostCard :post="posts[3]" />
      </div>

      <div class="post-block">
        <SecondaryPostCard :post="posts[2]" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

interface Options {
  title: string
  link: string
}

export default Vue.extend({
  name: 'SingleBlockPost',

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
        tag: 'Work',
        title: 'Creating a proper work-life balance that works',
        image:
          'https://images.unsplash.com/photo-1557804483-ef3ae78eca57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1644&q=80',
        author: 'Efemena Elvis',
        created_at: 'September 12, 2022',
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
.single-block {
  padding: toRem(20);

  @include breakpoint-down(md) {
    padding: toRem(18);
  }

  @include breakpoint-custom-down(620) {
    border-radius: 1px !important;
    padding: toRem(15) toRem(14);
  }

  .post-area {
    @include flex-column('flex-start', 'center');

    .main-post {
      background: rgba($off-white, 0.25);
      height: toRem(180);
    }

    .post-block {
      margin-bottom: toRem(23);
      width: 100%;

      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
}
</style>
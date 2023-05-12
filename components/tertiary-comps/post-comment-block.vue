<template>
  <div class="post-comment-block rounded-2 soft-base-bg mgb-25 w-100">
    <!-- BLCOK TOP ROW -->
    <BlockTopRow :options="options" />

    <!-- COMMENT DISPLAY -->
    <CommentDisplay />

    <!-- COMMENT ENTRY -->
    <CommentEntry />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

interface Options {
  title: string
  link: string
}

export default Vue.extend({
  name: 'PostCommentBlock',

  props: {
    options: {
      type: Object as PropType<Options>,
      required: true,
    },
  },

  data: () => ({}),
})
</script>

<style lang="scss" scoped>
.post-comment-block {
  padding: toRem(20);

  @include breakpoint-down(md) {
    padding: toRem(18);
  }
}
</style>
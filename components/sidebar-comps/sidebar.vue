<template>
  <div class="sidebar-area w-100">
    <FollowBlock />

    <SingleBlockPost
      v-if="false"
      :options="{ title: 'Popular posts', link: '' }"
    />

    <NewsletterBlock />

    <CategoriesBlock />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Sidebar',

  computed: {
    isPostDetails() {
      return this.$route.name === 'post-postSlug' ? false : true
    },
  },

  data() {
    return {
      show_single_post_block: false,
    }
  },
})
</script>

<style lang="scss">
.sidebar-area {
}
</style>

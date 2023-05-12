<template>
  <div class="hard-pen">
    <div class="app-container mgt-30">
      <ContentBody>
        <BlogDetail />

        <!-- POST AUTHOR BLOCK -->
        <PostAuthorBlock />

        <!-- NAVIGATE POST -->
        <NavigatePost />

        <!-- POST COMMENT SECTION -->
        <PostCommentBlock :options="{ title: 'Comments', link: '' }" />

        <!-- RELATED BLOCK POST -->
        <MiniBlockPost :options="{ title: 'Related Posts', link: '' }" />
      </ContentBody>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PostDetails',

  layout: 'app',
})
</script>

<style lang="scss" scoped>
</style>

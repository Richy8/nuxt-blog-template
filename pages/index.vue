<template>
  <div class="hard-pen">
    <div class="app-container">
      <!-- TRENDING ROW -->
      <TrendingRow />

      <!-- FEATURED GRID -->
      <FeaturedPostGrid />

      <!-- CONTENT AREA -->
      <ContentBody>
        <!-- DOUBLE POST BLOCK -->
        <DoubleBlockPost v-if="false" />

        <!-- SINGLE POST BLOCK -->
        <div class="single-post-row" v-if="false">
          <div class="section">
            <SingleBlockPost :options="{ title: 'Design', link: 'https://' }" />
          </div>

          <div class="section">
            <SingleBlockPost
              :options="{ title: 'Lifestyle', link: 'https://' }"
            />
          </div>
        </div>

        <!-- HORIZONTAL BLOCK POST -->
        <HorizontalBlockPost :options="{ title: 'Latest Posts', link: '' }" />
      </ContentBody>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HomePage',

  layout: 'app',
})
</script>

<style lang="scss" scoped>
.app-container {
  .single-post-row {
    @include flex-row-wrap('space-between', 'flex-start');

    @include breakpoint-custom-down(620) {
      @include flex-column('flex-start', 'flex-start');
    }

    .section {
      width: 48.2%;

      @include breakpoint-custom-down(620) {
        width: 100%;
      }
    }
  }
}
</style>

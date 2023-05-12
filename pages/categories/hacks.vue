<template>
  <div class="hard-pen">
    <div class="app-container mgt-40">
      <ContentBody>
        <!-- HORIZONTAL BLOCK POST -->
        <HorizontalBlockPost :options="{ title: 'CODE HACKS', link: '' }" />
      </ContentBody>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Hacks',

  layout: 'app',
})
</script>

<style lang="scss" scoped>
</style>

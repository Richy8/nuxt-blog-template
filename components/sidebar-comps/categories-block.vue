<template>
  <div class="category-block rounded-2 soft-base-bg mgb-25 w-100">
    <!-- BLCOK TOP ROW -->
    <BlockTopRow :options="{ title: 'Categories', link: '' }" />

    <div class="content-area soft-pen">
      <Category
        v-for="(option, index) in categories"
        :key="index"
        :options="option"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CategoriesBlock',

  data: () => ({
    categories: [
      {
        image:
          'https://images.unsplash.com/photo-1587620931276-d97f425f62b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2831&q=80',
        title: 'Code Hacks',
        count: '20',
      },
      {
        image:
          'https://images.unsplash.com/photo-1614518917999-966b27c5bd08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        title: 'Creative Design',
        count: '10',
      },
      {
        image:
          'https://images.unsplash.com/photo-1494597564530-871f2b93ac55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1713&q=80',
        title: 'Lifestyle',
        count: '25',
      },
    ],
  }),
})
</script>

<style lang="scss" scoped>
.category-block {
  padding: toRem(20);

  @include breakpoint-down(md) {
    padding: toRem(18);
  }

  @include breakpoint-custom-down(620) {
    border-radius: 1px !important;
    padding: toRem(15) toRem(14);
  }

  .content-area {
    @include flex-column('flex-start', 'flex-start');
    gap: toRem(17);
  }
}
</style>
<template>
  <div class="newsletter-block rounded-2 soft-base-bg mgb-25 w-100">
    <!-- BLCOK TOP ROW -->
    <BlockTopRow :options="{ title: 'Newsletter', link: '' }" />

    <div class="content-area">
      <div class="intro-text soft-pen mgb-25">
        Subscribe to our newsletter to get our latest post update directly on
        your mail.
      </div>

      <form action="">
        <input type="email" class="form-control" placeholder="Email Address" />
        <button class="btn btn-primary w-100 mgt-12">Subscribe Now</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'NewsletterBlock',
})
</script>

<style lang="scss" scoped>
.newsletter-block {
  padding: toRem(20);

  @include breakpoint-down(md) {
    padding: toRem(18);
  }

  @include breakpoint-custom-down(620) {
    border-radius: 1px !important;
    padding: toRem(15) toRem(14);
  }

  .content-area {
    .intro-text {
      @include font-style(14.25, 21, 400);
      opacity: 0.85;
    }
  }
}
</style>
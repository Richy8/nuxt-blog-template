<template>
  <div class="comment-display rounded-2 soft-base-bg mgb-25 w-100">
    <!-- USER IMAGE -->
    <div class="user-image rounded-circle">
      <img
        src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=1380&t=st=1683541600~exp=1683542200~hmac=de5b4c8c850d84a8ce758393021b4bda7afe49328360de304dc554fd970609a3"
        alt=""
      />
    </div>

    <!-- USER DETAILS -->
    <div class="user-details">
      <div class="user-name h7-text fw-medium hard-pen">Efemena Elvis</div>

      <div class="user-bio soft-pen">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quidem
        iure incidunt ab soluta quas ducimus doloribus quos odio quam?
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CommentDisplay',
})
</script>

<style lang="scss" scoped>
.comment-display {
  @include flex-row-nowrap('flex-start', 'flex-start');

  @include breakpoint-down(md) {
    padding: toRem(15);
  }

  @include breakpoint-down(sm) {
    padding: toRem(12);
  }

  .user-image {
    @include draw-shape(48);
    margin-right: toRem(18);
    position: relative;
    overflow: hidden;

    @include breakpoint-down(md) {
      margin-right: toRem(12);
    }

    img {
      @include set-full-bg;
    }
  }

  .user-details {
    .user-name {
      margin-bottom: toRem(1);
      font-size: toRem(14.5);

      @include breakpoint-down(md) {
        font-size: toRem(14.5);
      }
    }

    .user-bio {
      @include font-style(14.75, 23);

      @include breakpoint-down(md) {
        @include font-style(14.85, 23);
      }
    }
  }
}
</style>
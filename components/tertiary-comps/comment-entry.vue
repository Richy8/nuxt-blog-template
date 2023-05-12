<template>
  <div class="comment-entry">
    <form action="">
      <div class="form-group">
        <label for="" class="hard-pen">Full Name</label>
        <input
          type="text"
          class="form-control"
          placeholder="Enter your full name here..."
        />
      </div>

      <div class="form-group">
        <label for="" class="hard-pen">Comment</label>
        <textarea
          class="form-control"
          rows="4"
          cols="4"
          placeholder="Enter your comment here..."
        ></textarea>
      </div>

      <button class="btn btn-primary w-100 mgt-12">Comment</button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CommentEntry',
})
</script>

<style lang="scss">
.comment-entry {
  .form-group {
    margin-bottom: toRem(15);

    label {
      @include font-style(14, 18, $semibold);
    }
  }
}
</style>
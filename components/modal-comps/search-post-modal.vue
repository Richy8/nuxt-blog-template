<template>
  <ModalCover
    @closeModal="$emit('closeTriggered')"
    :modal_style="{ size: 'modal-sm', shape: 'rounded-3' }"
  >
    <!-- MODAL COVER HEADER -->
    <template slot="modal-cover-header">
      <div class="modal-cover-header hard-pen primary-1-text">Search Posts</div>
    </template>

    <!-- MODAL COVER BODY -->
    <template slot="modal-cover-body">
      <div class="modal-cover-body hard-pen">
        <!-- SEARCH FORM INPUT -->
        <div class="form-input">
          <div class="icon icon-search soft-pen"></div>

          <input
            type="search"
            class="form-control"
            placeholder="Search posts"
          />
        </div>

        <!-- SEARCH RESULT -->
        <div class="search-result-area mgt-15">
          <nuxt-link to class="search-item hard-base-bg hard-pen">
            The Life of Children in the Tropical Northern Region Area of Africa
          </nuxt-link>

          <nuxt-link to class="search-item hard-base-bg hard-pen">
            The Life of Children in the Tropical Northern Region Area of Africa
          </nuxt-link>
        </div>
      </div>
    </template>
  </ModalCover>
</template>

<script>
export default {
  name: 'SearchPostModal',

  data() {
    return {}
  },

  methods: {},
}
</script>

<style lang="scss" scoped>
.modal-cover-body {
  padding: toRem(22) toRem(23) toRem(30);
  min-height: auto;
  height: auto;

  .form-input {
    position: relative;

    .icon {
      @include center-placement('y-axis');
      font-size: toRem(18);
      left: toRem(12);
    }

    .form-control {
      padding-left: toRem(38);
    }
  }

  .search-result-area {
    .search-item {
      display: block;
      padding: toRem(12) toRem(14);
      @include font-style(13, 18);
      @include transition(0.3s);
      margin-bottom: toRem(6);
      border-radius: toRem(4);

      &:hover {
        transform: scale(0.98);
      }

      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
}
</style>
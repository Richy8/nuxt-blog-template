<template>
  <div class="hard-pen">
    <div class="app-container mgt-30">
      <ContentBody>
        <div class="contact-block rounded-2 soft-base-bg mgb-25 w-100">
          <!-- TOP IMAGE -->
          <div class="top-image w-100 position-relative mgb-30">
            <img
              src="https://res.cloudinary.com/richy-jones/image/upload/v1683863713/close-up-portrait-attractive-young-woman-isolated_1.jpg"
              alt=""
            />
          </div>

          <!-- BLCOK TOP ROW -->
          <BlockTopRow :options="{ title: 'Get in Touch', link: '' }" />

          <!-- CONTACT INFO TEXT -->
          <div class="contact-info-text hard-pen">
            To request a quote or want to meet up for coffee, contact us
            directly or fill out the form and we will get back to you promptly.
          </div>

          <form action="">
            <div class="form-group">
              <label for="" class="hard-pen">Your name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter your full name."
              />
            </div>

            <div class="form-group">
              <label for="" class="hard-pen">Your email address</label>
              <input
                type="email"
                class="form-control"
                placeholder="Enter your email address."
              />
            </div>

            <div class="form-group">
              <label for="" class="hard-pen">Your message</label>
              <textarea
                class="form-control"
                rows="4"
                cols="4"
                placeholder="Enter your message description."
              ></textarea>
            </div>

            <button class="btn btn-primary w-100 mgt-12">Comment</button>
          </form>
        </div>
      </ContentBody>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Contact',

  layout: 'app',
})
</script>

<style lang="scss">
.contact-block {
  padding: toRem(20);

  @include breakpoint-down(md) {
    padding: toRem(18);
  }

  .top-image {
    height: toRem(300);

    img {
      @include set-full-bg;
    }
  }

  .contact-info-text {
    @include font-style(15.5, 24);
    margin-bottom: toRem(34);
  }

  .form-group {
    margin-bottom: toRem(25);

    label {
      @include font-style(15, 22, $semibold);
      margin-bottom: toRem(6);
    }
  }
}
</style>
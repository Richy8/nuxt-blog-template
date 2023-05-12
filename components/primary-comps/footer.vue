<template>
  <footer id="footer" class="mgt-30">
    <!-- FOOTER TOP -->
    <div class="footer-top-area w-100 soft-base-bg">
      <div class="footer-top app-container">
        <div class="left-section">
          <BrandLogo />

          <div class="description hard-pen mgt-6">
            Our mission is to bring you engaging content that educates, inspires
            and be of great valuable resource for all your technology-related
            needs.
          </div>
        </div>

        <div class="right-section">
          <div class="helper-text hard-pen fw-semibold mgb-10">
            Connect with us.
          </div>

          <div class="socials">
            <a href="" class="social social-fb border-soft-pen">
              <div class="icon icon-facebook soft-pen"></div>
            </a>

            <a href="" class="social social-tw border-soft-pen">
              <div class="icon icon-twitter soft-pen"></div>
            </a>

            <a href="" class="social social-in border-soft-pen">
              <div class="icon icon-instagram soft-pen"></div>
            </a>

            <a href="" class="social social-yt border-soft-pen">
              <div class="icon icon-youtube soft-pen"></div>
            </a>
          </div>

          <!-- FOOTER NAVS -->
          <div class="footer-navs">
            <nuxt-link to class="nav-item hard-pen">About Us</nuxt-link>
            <nuxt-link to class="nav-item hard-pen">Contact Us</nuxt-link>
            <nuxt-link to class="nav-item hard-pen">Privacy Policy</nuxt-link>
            <!-- <nuxt-link to class="nav-item hard-pen">DCMA</nuxt-link> -->
          </div>
        </div>
      </div>
    </div>

    <!-- FOOTER BASE -->
    <div class="footer-base-area w-100 primary-bg">
      <div class="footer-base app-container">
        <div class="bottom-left">
          All Rights Reserved. &copy; 2023 Mena Blog
        </div>
        <div class="bottom-right">
          Designed with <span class="brand-red">&#10084;</span> and
          <span class="brand-white">&#9749;</span> by Deskangle
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Footer',

  data: () => ({
    theme: 'green',
  }),

  watch: {
    theme: {
      handler(value) {
        document.body.setAttribute('data-theme', value)
      },
    },
  },

  beforeMount() {
    document.body.setAttribute('data-theme', this.theme)
  },

  methods: {
    changePrimaryTheme(theme: string) {
      this.theme = theme
    },
  },
})
</script>

<style lang="scss">
footer {
  .footer-top {
    @include flex-row-wrap('space-between', 'center');
    padding-top: toRem(40);
    padding-bottom: toRem(40);

    @include breakpoint-down(md) {
      padding: toRem(40) toRem(15);
    }

    @include breakpoint-custom-down(620) {
      @include flex-column('center', 'center');
    }

    .left-section {
      width: 48%;

      @include breakpoint-down(md) {
        width: 50%;
      }

      @include breakpoint-custom-down(620) {
        @include flex-column('space-between', 'center');
        margin-bottom: toRem(40);
        width: 100%;
      }

      .description {
        @include font-style(15.5, 24);

        @include breakpoint-down(md) {
          @include font-style(14.5, 24);
        }

        @include breakpoint-custom-down(620) {
          @include font-style(15, 24);
          text-align: center;
          width: 80%;
        }

        @include breakpoint-down(sm) {
          width: 100%;
        }
      }
    }

    .right-section {
      @include flex-column('space-between', 'flex-end');
      width: 40%;

      @include breakpoint-custom-down(620) {
        @include flex-column('space-between', 'center');
        width: 100%;
      }

      .btn {
        width: 80%;
      }

      .socials {
        @include flex-row-nowrap('flex-end', 'center');
        gap: toRem(14);

        .social {
          @include transition(0.45s);
          @include draw-shape(42);
          position: relative;
          border-radius: 50%;

          .icon {
            @include center-placement;
            font-size: toRem(15);
          }

          &:hover {
            border: toRem(1) solid transparent;

            .icon {
              color: $white;
            }
          }

          &-fb {
            &:hover {
              background: $facebook-color;
            }
          }
          &-tw {
            &:hover {
              background: $twitter-color;
            }
          }
          &-in {
            &:hover {
              background: $instagram-color;
            }
          }
          &-yt {
            &:hover {
              background: $youtube-color;
            }
          }
        }
      }

      .footer-navs {
        @include flex-row-nowrap('flex-end', 'center');
        margin-top: toRem(14);
        gap: toRem(12);

        .nav-item {
          @include font-style(13.75, 30);

          @include breakpoint-down(md) {
            @include font-style(13.25, 30);
          }

          &:hover {
            color: $primary;
          }
        }
      }
    }
  }

  .footer-base-area {
    .footer-base {
      @include flex-row-wrap('space-between', 'center');
      @include font-style(14, 24);
      padding-bottom: toRem(10);
      color: $soft_base_light;
      padding-top: toRem(10);

      @include breakpoint-custom-down(620) {
        @include flex-column('space-between', 'center');

        .bottom-left {
          margin-bottom: toRem(4);
        }
      }
    }
  }
}
</style>
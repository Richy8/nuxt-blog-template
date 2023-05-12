<template>
  <div class="blog-detail soft-base-bg rounded-2 mgb-25 w-100">
    <!-- POST IMAGE -->
    <div class="post-image">
      <img
        src="https://images.unsplash.com/photo-1583470790878-4f4f3811a01f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80"
        alt=""
      />
    </div>

    <!-- BLOG META AREA -->
    <div class="blog-area">
      <div class="blog-area-meta">
        <div class="creator-image mgr-14 rounded-circle overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
            class="rounded-circle"
            alt=""
          />
        </div>

        <div>
          <div class="creator-name hard-pen">Efemena Elvis</div>

          <div class="creator-meta soft-pen">Posted on March 12, 2023</div>
        </div>
      </div>

      <!-- BLOG CONTENT AREA -->
      <div class="blog-area-content">
        <div class="meta-wrapper mgb-25">
          <!-- BLOG TITLE -->
          <div class="blog-title">
            The Life of Children in the Tropical Northern Region Area of Africa
          </div>

          <!-- BLOG META -->
          <div class="blog-meta-row mgt-10">
            <div class="blog-tags">
              <nuxt-link to class="tag soft-pen">#children</nuxt-link>
              <nuxt-link to class="tag soft-pen">#africa</nuxt-link>
              <nuxt-link to class="tag soft-pen">#technology</nuxt-link>
            </div>

            <!-- POST ACTIVITY -->
            <PostActivity />
          </div>
        </div>

        <!-- CONTENT AREA -->
        <div class="content-area">
          <p>
            The tropical northern region of Africa is home to a diverse range of
            cultures, traditions, and communities, each with their unique way of
            life. However, one thing that remains constant across these
            communities is the centrality of children in their societies.
          </p>
          <p>
            In many of these communities, children are considered a blessing and
            are celebrated from birth. They are cherished and cared for by their
            families, extended families, and communities at large. Children in
            these areas are often given responsibilities early in life, such as
            helping with household chores or caring for younger siblings. This
            early involvement helps children develop a sense of responsibility
            and independence from a young age.
          </p>
          <p>
            However, life for children in the tropical northern region of Africa
            is not always easy. Poverty is widespread in many communities, and
            children are often the most vulnerable members of society. Many
            children struggle to access basic needs like clean water, nutritious
            food, and adequate healthcare. In some areas, access to education is
            also limited, which can limit children's opportunities for the
            future.
          </p>
          <p>
            Despite these challenges, children in these communities remain
            resilient and resourceful. They find joy in simple pleasures, like
            playing with friends, and are often known for their creativity and
            ingenuity. Many children also have close relationships with their
            families, who offer support and guidance as they navigate the
            challenges of growing up in difficult circumstances.
          </p>
          <p>
            It's important to note that the experiences of children in the
            tropical northern region of Africa are not uniform. Each community
            and family has its unique set of circumstances and challenges.
            However, what remains constant is the resilience and strength of
            these children in the face of adversity.
          </p>
          <p>
            As we think about how to support children in these communities, it's
            essential to listen to their voices and understand their
            experiences. Investing in education, healthcare, and infrastructure
            can help ensure that children in the tropical northern region of
            Africa have access to the resources they need to thrive. But perhaps
            more importantly, we must also recognize and celebrate the
            resilience and strength of these children and the communities that
            support them.
          </p>

          <p>
            As we think about how to support children in these communities, it's
            essential to listen to their voices and understand their
            experiences. Investing in education, healthcare, and infrastructure
            can help ensure that children in the tropical northern region of
            Africa have access to the resources they need to thrive. But perhaps
            more importantly, we must also recognize and celebrate the
            resilience and strength of these children and the communities that
            support them.
          </p>

          <p>
            As we think about how to support children in these communities, it's
            essential to listen to their voices and understand their
            experiences. Investing in education, healthcare, and infrastructure
            can help ensure that children in the tropical northern region of
            Africa have access to the resources they need to thrive. But perhaps
            more importantly, we must also recognize and celebrate the
            resilience and strength of these children and the communities that
            support them.
          </p>

          <p>
            As we think about how to support children in these communities, it's
            essential to listen to their voices and understand their
            experiences. Investing in education, healthcare, and infrastructure
            can help ensure that children in the tropical northern region of
            Africa have access to the resources they need to thrive. But perhaps
            more importantly, we must also recognize and celebrate the
            resilience and strength of these children and the communities that
            support them.
          </p>
        </div>

        <!-- CONTENT ACTIVITY -->
        <div class="content-activity mgt-30">
          <PostActivity :options="{ show_share: true }" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'BlogDetail',
})
</script>

<style lang="scss" scoped>
.blog-detail {
  overflow: hidden;

  .post-image {
    margin-bottom: toRem(32);
    position: relative;
    width: 100%;

    @include breakpoint-down(sm) {
      margin-bottom: toRem(22);
    }

    img {
      width: 100%;
      object-fit: cover;
      min-height: toRem(220);
      height: auto;
      max-height: toRem(300);

      @include breakpoint-down(md) {
        min-height: toRem(200);
        max-height: toRem(280);
      }

      @include breakpoint-down(sm) {
        min-height: toRem(180);
        max-height: toRem(220);
      }

      @include breakpoint-down(xs) {
        min-height: toRem(160);
        max-height: toRem(190);
      }
    }
  }

  .blog-area {
    padding: 0 toRem(25) toRem(25);

    @include breakpoint-down(lg) {
      padding: 0 toRem(20) toRem(20);
    }

    @include breakpoint-down(md) {
      padding: 0 toRem(15) toRem(15);
    }

    @include breakpoint-down(sm) {
      padding: 0 toRem(12.5) toRem(12.5);
    }

    &-meta {
      @include flex-row-nowrap('flex-start', 'center');
      margin-bottom: toRem(25);

      .creator-image {
        @include draw-shape(50);
        position: relative;
        background: $grey;
        padding: toRem(8);
        border: toRem(1) solid $primary;

        @include breakpoint-down(sm) {
          @include draw-shape(45);
        }

        img {
          @include center-placement;
          @include draw-shape(40);
          @include set-full-bg;
          border-radius: 50%;

          @include breakpoint-down(sm) {
            @include draw-shape(38);
          }
        }
      }

      .creator-name {
        @include font-style(15.5, 24, $semibold);

        @include breakpoint-down(sm) {
          @include font-style(15.25, 24, $semibold);
        }
      }

      .creator-meta {
        @include font-style(12.75, 18);
        opacity: 0.8;

        @include breakpoint-down(sm) {
          @include font-style(12.25, 18);
        }
      }
    }

    &-content {
      .blog-title {
        @include font-style(36.45, 46, 800);

        @include breakpoint-down(lg) {
          @include font-style(35, 44, 800);
        }

        @include breakpoint-down(sm) {
          @include font-style(30, 40, 700);
        }

        @include breakpoint-down(xs) {
          @include font-style(28, 38, 700);
        }
      }

      .blog-meta-row {
        @include flex-row-wrap('space-between', 'center');

        .blog-tags {
          @include flex-row-wrap('flex-start', 'flex-start');

          .tag {
            @include font-style(15.5, 20, $medium);
            @include transition(0.3s);
            padding: toRem(5) toRem(10);
            border-radius: toRem(3);

            @include breakpoint-down(lg) {
              @include font-style(15, 20, $medium);
            }

            @include breakpoint-down(sm) {
              @include font-style(14.5, 20, $medium);
            }
          }
        }
      }

      .content-area {
        @include font-style(16, 28);

        @include breakpoint-down(lg) {
          @include font-style(15.5, 28);
        }

        @include breakpoint-down(sm) {
          @include font-style(15, 27);
        }

        p {
          margin-bottom: toRem(20);

          &:last-of-type {
            margin-bottom: 0;
          }
        }
      }
    }
  }
}

@each $color-type, $color-shades in $color-mode {
  [data-mode='#{$color-type}'] {
    @each $color-shade, $color in $color-shades {
      .blog-detail {
        .blog-area {
          &-content {
            .blog-tags {
              .tag {
                &:hover {
                  background: darken(
                    map-get($map: $color-shades, $key: 'hard-base'),
                    6%
                  );
                }
              }
            }

            .content-area {
              @if $color-type == 'light' {
                color: darken(
                  map-get($map: $color-shades, $key: 'soft-pen'),
                  10%
                );
              }

              @if $color-type == 'dark' {
                color: lighten(
                  map-get($map: $color-shades, $key: 'soft-pen'),
                  10%
                );
              }
            }
          }
        }
      }
    }
  }
}
</style>
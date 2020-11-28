<template>
  <nuxt-link :to="postLink">
    <article class="post-preview">
      <div
        class="post-thumbnail"
        :style="'background-image: url(' + thumbnail + ')'"
      >
        {{ id }}
      </div>
      <div class="post-content">
        <h1>{{ title }}</h1>
        <p>{{ previewText }}</p>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    id: {
      // type: Number, // #avoids
      type: String,
      required: true
    },
    isAdmin: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    previewText: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    }
  },

  computed: {
    postLink() {
      return this.isAdmin ? "/admin/" + this.id : "/posts/" + this.id;
    }
  }
};
</script>

<style scoped lang="scss">
@mixin flexCenter($fl-dir: row) {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: $fl-dir;
}

a {
  width: 30%;
  min-width: 250px;
  min-height: 250px;
  @include flexCenter();
  color: #000;
  text-decoration: none;
  padding: 10px;

  .post-preview {
    width: 100%;
    height: 100%;
    @include flexCenter(column);
    border: 1px solid #ccc;
    box-shadow: 0 2px 2px #ccc;
    background-color: #fff;

    .post-thumbnail {
      width: 100%;
      background-size: cover;
    }

    .post-content {
      width: 100%;
      @include flexCenter(column);
    }
  }
}
</style>

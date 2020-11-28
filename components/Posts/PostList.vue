<template>
  <section class="post-list">
    <post-preview
      v-for="post in posts"
      :key="post._id"
      :id="post._id"
      :is-admin="isAdmin"
      :title="post.title"
      :previewText="post.previewText"
      :thumbnail="post.thumbnail"
    />
  </section>
</template>

<script>
import PostPreview from "@/components/Posts/PostPreview";
export default {
  components: PostPreview,

  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
    posts: {
      type: Array,
      required: true
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

.post-list {
  @include flexCenter();
  flex-wrap: wrap;
}
</style>

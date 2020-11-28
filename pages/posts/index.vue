<template>
  <div class="posts-page">
    <post-list :posts="posts"></post-list>
  </div>
</template>

<script>
import PostList from "@/components/Posts/PostList";
export default {
  component: PostList,

  computed: {
    posts() {
      return this.$store.getters.posts;
    }
  }
};
</script>

<style scoped lang="scss">
.posts-page {
  width: 100%;
}
</style>

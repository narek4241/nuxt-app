<template>
  <div class="posts-page">
    <post-list></post-list>
  </div>
</template>

<script>
import PostList from "@/components/Posts/PostList";
export default {
  component: PostList
};
</script>

<style scoped lang="scss">
@mixin flexCenter($fl-dir: row) {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: $fl-dir;
}

.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

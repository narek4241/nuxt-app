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
.posts-page {
  width: 100%;
}
</style>

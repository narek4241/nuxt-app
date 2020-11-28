<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news</h1>
    </section>
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
@mixin flexCenter($fl-dir: row) {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: $fl-dir;
}

.home-page {
  width: 100%;
  .intro {
    height: 200px;
    background-image: url("~assets/images/header-bg.jpg");
    background-position: 0% 35%;
    @include flexCenter();

    h1 {
      border-bottom: 1px solid #000;
    }
  }
}
</style>

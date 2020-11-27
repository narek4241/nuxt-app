<template>
  <section class="post-list">
    <post-preview
      id="1"
      title="First Post"
      previewText="Description 1"
      thumbnail="https://i.pinimg.com/originals/33/09/ca/3309ca1330ca91b55b4feeda3f383031.jpg"
    />
    <post-preview
      id="2"
      title="Second Post"
      previewText="Description 2"
      thumbnail="https://i.pinimg.com/originals/33/09/ca/3309ca1330ca91b55b4feeda3f383031.jpg"
    />
    <post-preview
      id="3"
      title="Third Post"
      previewText="Description 3"
      thumbnail="https://i.pinimg.com/originals/33/09/ca/3309ca1330ca91b55b4feeda3f383031.jpg"
    />
  </section>
</template>

<script>
import PostPreview from "@/components/Posts/PostPreview";
export default {
  components: PostPreview
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

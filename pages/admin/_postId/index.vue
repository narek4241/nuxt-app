<template>
  <div class="admin-post-page">
    <section class="update-form">
      <admin-post-form :post="loadedPost"></admin-post-form>
    </section>
  </div>
</template>

<script>
import AdminPostForm from "@/components/Admin/AdminPostForm";

export default {
  components: { AdminPostForm },

  layout: "admin",

  data() {
    return {
      loadedPost: {
        author: "Narek",
        title: "Title",
        thumbnailLink:
          "https://i.pinimg.com/originals/33/09/ca/3309ca1330ca91b55b4feeda3f383031.jpg",
        content: "Content"
      }
    };
  }
};
</script>

<style lang="scss">
@mixin flexCenter($fl-dir: row) {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: $fl-dir;
}

.admin-post-page {
  @include flexCenter();
  .update-form {
    width: 60%;
    margin: 20px auto;
  }
  @media (max-width: 768px) {
    .update-form {
      width: 90%;
    }
  }
}
</style>

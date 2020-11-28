<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <admin-post-form @submit="onSave"></admin-post-form>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import AdminPostForm from "@/components/Admin/AdminPostForm";

export default {
  components: { AdminPostForm },

  layout: "admin",

  methods: {
    onSave(addedPost) {
      axios
        .post("https://mynuxt-app.firebaseio.com/posts.json", {
          ...addedPost,
          lastUpdated: new Date()
        })
        .catch(err => console.error(err));
      this.$router.push("/");
    }
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

.admin-new-post-page {
  @include flexCenter();
  .new-post-form {
    width: 60%;
    margin: 20px auto;
  }
  @media (max-width: 768px) {
    .new-post-form {
      width: 90%;
    }
  }
}
</style>

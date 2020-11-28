<template>
  <div class="admin-post-page">
    <section class="update-form">
      <admin-post-form @submit="onUpdate" :post="loadedPost"></admin-post-form>
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
    onUpdate() {
      // axios.post("https://mynuxt-app.firebaseio.com/posts.json");
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

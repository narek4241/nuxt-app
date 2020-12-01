<template>
  <div class="admin-post-page">
    <section class="update-form">
      <admin-post-form
        @submit="updatePost"
        :post="loadedPost"
      ></admin-post-form>
    </section>
  </div>
</template>

<script>
import AdminPostForm from "@/components/Admin/AdminPostForm";

export default {
  components: { AdminPostForm },

  layout: "admin",

  middleware: "auth",

  asyncData(context) {
    return context.app.$axios
      .$get(`/posts/${context.params.postId}.json`)
      .then(data => {
        if (!data) {
          // #duplicate-task #improve  i.o this, e.g. lead to 'error' page
          return {
            loadedPost: { title: "That ID is not valid" }
          };
        }

        return {
          loadedPost: { ...data, id: context.params.id }
        };
      })
      .catch(err => console.error(err));
  },

  methods: {
    updatePost(updatedPost) {
      this.$store
        .dispatch("updatePost", {
          ...updatedPost,
          id: this.$route.params.postId
        })
        .then(() => this.$router.push("/admin"));
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

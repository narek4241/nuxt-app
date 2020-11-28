<template>
  <div class="admin-page">
    <section class="new-posts">
      <app-button @click="linkToNewPost">Create Post</app-button>
    </section>
    <section class="existing-posts">
      <h1>Existing Posts</h1>
      <!-- <PostList :isAdmin="isAdmin" />  -->
      <!-- #syntax isAdmin - returns true -->
      <post-list isAdmin></post-list>
    </section>
  </div>
</template>

<script>
import PostList from "@/components/Posts/PostList";
import AppButton from "@/components/UI/AppButton";
export default {
  components: { PostList, AppButton },

  layout: "admin",

  data() {
    return {
      isAdmin: true
    };
  },

  methods: {
    linkToNewPost() {
      // #task #findOut '$router' and not '$route' (mini)
      this.$router.push("/admin/new-post");
    }
  }
};
</script>

<style scoped>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}
</style>

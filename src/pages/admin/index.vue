<template>
  <div class="admin-page">
    <section class="new-posts">
      <app-button @click="this.$router.push('/')">Home</app-button>
      <app-button @click="this.$router.push('/admin/new-post')"
        >Create Post</app-button
      >
      <app-button @click="logout">Logout</app-button>
    </section>
    <section class="existing-posts">
      <h1>Existing Posts</h1>

      <!-- #syntax [isAdmin] -> returns true -->
      <post-list isAdmin :posts="posts"></post-list>
    </section>
  </div>
</template>

<script>
export default {
  layout: "admin",

  middleware: ["check-auth", "auth"],

  computed: {
    posts() {
      return this.$store.getters.posts;
    }
  },

  data() {
    return {
      isAdmin: true
    };
  },

  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/admin/auth");
    }
  }
};
</script>

<style scoped lang="scss">
.admin-page {
  padding: 20px;
  .new-posts {
    text-align: center;
    border-bottom: 2px solid #ccc;
    padding-bottom: 10px;
  }
  .existing-posts h1 {
    text-align: center;
  }
}
</style>

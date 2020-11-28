<template>
  <div class="admin-page">
    <section class="new-posts">
      <app-button @click="linkToNewPost">Create Post</app-button>
    </section>
    <section class="existing-posts">
      <h1>Existing Posts</h1>
      <!-- <PostList :isAdmin="isAdmin" />  -->
      <!-- #syntax isAdmin - returns true -->
      <post-list isAdmin :posts="posts"></post-list>
    </section>
  </div>
</template>

<script>
import PostList from "@/components/Posts/PostList";
import AppButton from "@/components/UI/AppButton";
export default {
  components: { PostList, AppButton },

  layout: "admin",

  asyncData(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          posts: [
            {
              _id: "1",
              title: "1st Post",
              previewText: "Preview text 1",
              thumbnail:
                "https://i.pinimg.com/originals/33/09/ca/3309ca1330ca91b55b4feeda3f383031.jpg"
            },
            {
              _id: "2",
              title: "2nd Post",
              previewText: "Preview text 2",
              thumbnail:
                "https://i.pinimg.com/originals/33/09/ca/3309ca1330ca91b55b4feeda3f383031.jpg"
            },
            {
              _id: "3",
              title: "3rd Post",
              previewText: "Preview text 3",
              thumbnail:
                "https://i.pinimg.com/originals/33/09/ca/3309ca1330ca91b55b4feeda3f383031.jpg"
            }
          ]
        });
        // reject(new Error());
      }, 1000);
    })
      .then(data => {
        return data;
      })
      .catch(e => {
        context.error(new Error());
      });
  },

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

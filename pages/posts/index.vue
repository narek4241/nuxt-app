<template>
  <div class="posts-page">
    <post-list :posts="posts"></post-list>
  </div>
</template>

<script>
import PostList from "@/components/Posts/PostList";
export default {
  component: PostList,

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
  }
};
</script>

<style scoped lang="scss">
.posts-page {
  width: 100%;
}
</style>

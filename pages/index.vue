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

  asyncData(context, callback) {
    // checking server-side rendering below
    // console.log("async data executed");
    setTimeout(() => {
      callback(null, {
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
    }, 1500);
  }

  // data() {
  //   return {
  //     posts: []
  //   };
  // }
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

<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">{{ post.title }}</h1>
      <div class="post-details">
        <div class="post-detail">{{ post.lastUpdate }}</div>
        <div class="post-detail">{{ post.author }}</div>
      </div>
      <p class="post-content">
        {{ post.content }}
      </p>
    </section>
    <section class="post-feedback">
      <p>
        Let us know what you think about the post, send a mail to
        <a href="malito:feedback@my-awesome-domain.com">Email</a>
      </p>
    </section>
  </div>
</template>

<script>
export default {
  asyncData(context, callback) {
    console.log("async data executed 2nd one");
    setTimeout(() => {
      callback(null, {
        post: {
          _id: "1",
          title: "1st Post" + " ID" + context.route.params.id,
          previewText: "preview text",
          lastUpdate: new Date(),
          author: "Narek",
          content: "Descriptive Content",
          thumbnail:
            "https://i.pinimg.com/originals/33/09/ca/3309ca1330ca91b55b4feeda3f383031.jpg"
        }
      });
    }, 100);
  }
};
</script>

<style scoped lang="scss">
@mixin flexCenter($fl-dir: row) {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: $fl-dir;
}

.single-post-page {
  padding: 20px;
  .post {
    width: 100%;
    padding: 10px;
    @include flexCenter(column);
    .post-title {
      margin: 0;
    }
    .post-details {
      padding: 10px;
      box-sizing: border-box;
      border-bottom: 3px solid #ccc;
      @include flexCenter(column);
    }
    .post-content {
      @extend .post-details;
      border-bottom: 0;
    }
  }
  .post-feedback {
    width: 100%;
    @include flexCenter();
    p {
      color: red;
      a {
        color: #000;
      }
    }
  }
}
</style>

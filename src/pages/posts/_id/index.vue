<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">{{ post.title }}</h1>
      <div class="post-details">
        <div class="post-detail">
          Last updated on {{ post.lastUpdated | date }}
        </div>
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
  asyncData(context) {
    // #note #[npm run generate] completely opt (for static generation)
    // if (context.payload) {
    //   return {
    //     loadedPost: context.payload.postData
    //   };
    // }
    return context.app.$axios
      .$get(`/posts/${context.params.id}.json`)
      .then(data => {
        if (!data) {
          // #task #improve i.o this, e.g. lead to 'error' page
          return {
            post: { title: "That ID is not valid" }
          };
        }

        return {
          // #note 'post' is being merged into component
          post: { ...data, id: context.params.id }
        };
      })
      .catch(err => console.error(err));
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

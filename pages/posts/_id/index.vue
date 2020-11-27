<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">Title</h1>
      <div class="post-details">
        <div class="post-detail">Last update: XXX</div>
        <div class="post-detail">Author: Name</div>
      </div>
      <p class="post-content">
        Content: Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
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

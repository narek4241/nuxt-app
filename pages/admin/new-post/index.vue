<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <form @submit.prevent="onSave">
        <AppControlInput v-model="editedPost.author"
          >Author Name</AppControlInput
        >
        <AppControlInput v-model="editedPost.title">Title</AppControlInput>
        <AppControlInput v-model="editedPost.thumbnailLink"
          >Author Name</AppControlInput
        >
        <AppControlInput v-model="editedPost.content" control-type="textarea"
          >Content</AppControlInput
        >

        <AppButton type="submit">Save</AppButton>
        <AppButton type="button" btn-style="cancel" @click="onCancel"
          >Cancel</AppButton
        >
      </form>
    </section>
  </div>
</template>

<script>
import AppControlInput from "@/components/UI/AppControlInput";
import AppButton from "@/components/UI/AppButton";

export default {
  components: { AppControlInput, AppButton },

  data() {
    return {
      editedPost: {
        author: "",
        title: "",
        thumbnailLink: "",
        content: ""
      }
    };
  },
  methods: {
    onCancel() {
      this.$router.push("/admin");
    },

    resetForm() {
      this.editedPost.author = "";
      this.editedPost.title = "";
      this.editedPost.thumbnailLink = "";
      this.editedPost.content = "";
    },

    onSave() {
      console.log({ ...this.editedPost });
      this.resetForm();
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

.admin-new-post-page {
  @include flexCenter();
  .new-post-form {
    width: 60%;
  }
}
</style>

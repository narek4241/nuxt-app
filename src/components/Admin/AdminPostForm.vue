<template>
  <form @submit.prevent="onSubmit">
    <app-control-input v-model="editedPost.author"
      >Author Name</app-control-input
    >
    <app-control-input v-model="editedPost.title">Title</app-control-input>
    <app-control-input v-model="editedPost.thumbnail"
      >Thumnail Link</app-control-input
    >
    <app-control-input v-model="editedPost.content" control-type="textarea"
      >Content</app-control-input
    >

    <app-control-input v-model="editedPost.previewText" control-type="textarea"
      >Preview Text</app-control-input
    >

    <app-button type="submit">Save</app-button>
    <app-button type="button" btn-style="cancel" @click="onCancel"
      >Cancel</app-button
    >
  </form>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: false
    }
  },

  data() {
    return {
      editedPost: this.post
        ? { ...this.post }
        : {
            author: "",
            title: "",
            thumbnail: "",
            content: "",
            previewText: ""
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
      this.editedPost.thumbnail = "";
      this.editedPost.content = "";
      this.editedPost.previewText = "";
    },

    onSubmit() {
      this.$emit("submit", { ...this.editedPost });
      // this.resetForm();
    }
  }
};
</script>

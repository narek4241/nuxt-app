<template>
  <form @submit.prevent="onSave">
    <app-control-input v-model="editedPost.author"
      >Author Name</app-control-input
    >
    <app-control-input v-model="editedPost.title">Title</app-control-input>
    <app-control-input v-model="editedPost.thumbnailLink"
      >Author Name</app-control-input
    >
    <app-control-input v-model="editedPost.content" control-type="textarea"
      >Content</app-control-input
    >

    <app-button type="submit">Save</app-button>
    <app-button type="button" btn-style="cancel" @click="onCancel"
      >Cancel</app-button
    >
  </form>
</template>

<script>
import AppControlInput from "@/components/UI/AppControlInput";
import AppButton from "@/components/UI/AppButton";

export default {
  components: { AppControlInput, AppButton },

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

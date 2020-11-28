import Vuex from "vuex";
import axios from "axios";

const createStore = () => {
  return new Vuex.Store({
    state: {
      posts: []
    },

    getters: {
      posts(state) {
        return state.posts;
      }
    },

    actions: {
      nuxtServerInit(vuexContext, context) {
        // #note checks if is in server opt
        // if (!process.client) {
        //   console.log(context.req);
        // }

        return axios
          .get("https://mynuxt-app.firebaseio.com/posts.json")
          .then(res => {
            const postsArr = [];

            for (const key in res.data) {
              postsArr.push({
                ...res.data[key],
                id: key
              });
            }

            vuexContext.commit("setPosts", postsArr);
          })
          .catch(err => console.error(err));
      },

      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      },

      addPost(vuexContext, post) {
        const addedPost = {
          ...post,
          lastUpdated: new Date()
        };

        return axios
          .post("https://mynuxt-app.firebaseio.com/posts.json", addedPost)
          .then(res => {
            vuexContext.commit("addPost", { ...addedPost, id: res.data.name });
          })
          .catch(err => console.error(err));
      },

      updatePost(vuexContext, updatedPost) {
        const editedPost = { ...updatedPost, lastUpdated: new Date() };

        return axios
          .put(
            `https://mynuxt-app.firebaseio.com/posts/${updatedPost.id}.json`,
            editedPost
          )
          .then(res => {
            vuexContext.commit("updatePost", editedPost);
          })
          .catch(err => console.log(err));
      }
    },

    mutations: {
      setPosts(state, posts) {
        state.posts = posts;
      },

      addPost(state, post) {
        state.posts.push(post);
      },

      updatePost(state, updatedPost) {
        const postIndex = state.posts.findIndex(
          post => post.id === updatedPost.id
        );
        state.posts[postIndex] = updatedPost;
      }
    }
  });
};

export default createStore;

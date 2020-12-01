import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      posts: [],
      token: null
    },

    getters: {
      posts(state) {
        return state.posts;
      },

      isAuthenticated(state) {
        return state.token != null;
      }
    },

    actions: {
      nuxtServerInit(vuexContext, context) {
        // #note checks if is in server opt
        // if (!process.client) {
        //   console.log(context.req);
        // }

        return context.app.$axios
          .$get(`/posts.json`)
          .then(data => {
            const postsArr = [];

            for (const key in data) {
              postsArr.push({
                ...data[key],
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

        return this.$axios
          .$post(`/posts.json?auth=${vuexContext.state.token}`, addedPost)
          .then(data => {
            vuexContext.commit("addPost", { ...addedPost, id: data.name });
          })
          .catch(err => console.error(err));
      },

      updatePost(vuexContext, updatedPost) {
        const editedPost = { ...updatedPost, lastUpdated: new Date() };

        return this.$axios
          .$put(
            `/posts/${updatedPost.id}.json?auth=${vuexContext.state.token}`,
            editedPost
          )
          .then(() => {
            vuexContext.commit("updatePost", editedPost);
          })
          .catch(err => console.error(err));
      },

      authenticateUser(vuexContext, authData) {
        // login URL
        let authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.fbAPIKey}`;
        if (!authData.isLogin) {
          // sign up URL
          authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.fbAPIKey}`;
        }
        return this.$axios
          .$post(authUrl, {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
          })
          .then(data => {
            vuexContext.commit("setToken", data.idToken);
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
      },

      setToken(state, idToken) {
        state.token = idToken;
      }
    }
  });
};

export default createStore;

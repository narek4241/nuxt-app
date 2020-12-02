import Vuex from "vuex";
import Cookie from "js-cookie";

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
          // register URL
          authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.fbAPIKey}`;
        }
        // #task check use case of 'this' i.o 'vuexContext'
        return this.$axios
          .$post(authUrl, {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
          })
          .then(data => {
            vuexContext.commit("setToken", data.idToken);
            localStorage.setItem("token", data.idToken);
            localStorage.setItem(
              "tokenExpiration",
              new Date().getTime() + +data.expiresIn * 1000
            );

            Cookie.set("jwt", data.idToken);
            Cookie.set(
              "expirationDate",
              new Date().getTime() + +data.expiresIn * 1000
            );

            // #note runs on our own 'server' !test?rm
            // return this.$axios.$post("http://localhost:3000/api/track-data", {
            //   data: "Authenticated"
            // });
          })
          .catch(err => console.error(err));
      },

      setLogoutTimer(vuexContext, duration) {
        setTimeout(() => {
          vuexContext.dispatch("logout");
        }, duration);
      },

      logout(vuexContext) {
        vuexContext.commit("clearToken");
        Cookie.remove("jwt");
        Cookie.remove("expirationDate");
        if (process.client) {
          localStorage.removeItem("token");
          localStorage.removeItem("tokenExpiration");
        }
      },

      initAuth(vuexContext, req) {
        let token;
        let expirationDate;
        if (req) {
          if (!req.headers.cookie) {
            return;
          }
          token = req.headers.cookie
            .split(";")
            .find(c => c.trim().startsWith("jwt="))
            .split("=")[1];

          if (!token) {
            return;
          }

          expirationDate = req.headers.cookie
            .split(";")
            .find(c => c.trim().startsWith("expirationDate="))
            .split("=")[1];

          // #note #[npm run generate] completely opt (for static generation)
          // #avoid localStorage is not defined by replacing else -> else if(process.client)
        } else {
          token = localStorage.getItem("token");
          expirationDate = localStorage.getItem("tokenExpiration");
        }

        if (new Date().getTime() > +expirationDate) {
          console.log("No token, or invalid token.");
          vuexContext.dispatch("logout");
          return;
        }

        vuexContext.commit("setToken", token);
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

      setToken(state, token) {
        state.token = token;
      },

      clearToken(state) {
        state.token = null;
      }
    }
  });
};

export default createStore;

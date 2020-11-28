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
      }
    },

    mutations: {
      setPosts(state, posts) {
        state.posts = posts;
      }
    }
  });
};

export default createStore;

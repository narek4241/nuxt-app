import Vuex from "vuex";

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

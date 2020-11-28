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
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit("setPosts", [
              {
                _id: "1",
                title: "1st Post",
                previewText: "Preview text 1",
                thumbnail:
                  "https://i.pinimg.com/originals/33/09/ca/3309ca1330ca91b55b4feeda3f383031.jpg"
              },
              {
                _id: "2",
                title: "2nd Post",
                previewText: "Preview text 2",
                thumbnail:
                  "https://i.pinimg.com/originals/33/09/ca/3309ca1330ca91b55b4feeda3f383031.jpg"
              },
              {
                _id: "3",
                title: "3rd Post",
                previewText: "Preview text 3",
                thumbnail:
                  "https://i.pinimg.com/originals/33/09/ca/3309ca1330ca91b55b4feeda3f383031.jpg"
              }
            ]);
            resolve();
          }, 1000);
        });
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

// #task turn this file into '.ts'

const checkAuth = ({ store, req }) => {
  console.log("[MIDDLEWARE] [CHECK AUTH]");
  store.dispatch("initAuth", req);
};

export default checkAuth;

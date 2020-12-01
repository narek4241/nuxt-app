// #task turn this file into '.ts'
// #task disable type 'any' check || find way to annotate context -> {store, redirect}

// #note sample code
// const auth = ({ store, redirect }): void => {
//   if (!store.getters.isAuthenticated) {
//     redirect("/admin/auth");
//   }
// };

// export default auth;

const redirectToAuth = ({ store, redirect }) => {
  console.log("[MIDDLEWARE] [AUTH]");
  if (!store.getters.isAuthenticated) {
    redirect("/admin/auth");
  }
};

export default redirectToAuth;

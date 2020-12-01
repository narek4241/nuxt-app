// #task turn this file into '.ts'
// #task #dpl disable type 'any' check || find way to annotate context

// #note sample code
// #note context:'Object' will lead an error later, (avoids)

// const middlewareFunction = (context: Object): void => {
//   console.log("[Middleware] The log middleware is running");
// };

// export default middlewareFunction;

const middlewareFunction = context => {
  console.log("[Middleware] The log middleware is running");
};

export default middlewareFunction;

const express = require("express");

const router = express.Router();

const app = express();

// #task #findOut usage
router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request);
  Object.setPrototypeOf(res, app.response);
  req.res = res;
  res.req = req;
  next();
});

// #note !test?rm
// router.post("/track-data", (req, res) => {
//   console.log("[Server][Test] Stored data:", req.body.data);
//   res.status(200).json({ message: "Success" });
// });

module.exports = {
  path: "/api",
  handler: router
};

const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");


// Api Routes
router.use("/api", apiRoutes);


// If no Api routes - send the react App

router.use(function (req, res)  {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

module.exports = router;
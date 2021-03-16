const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("This is another example of a route.");
});

module.exports = router;

const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("This is an example of default route.");
});

module.exports = router;

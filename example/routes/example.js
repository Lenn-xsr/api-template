const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("This is an example route.");
});

module.exports = router;

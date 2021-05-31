const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hello form user api");
});

module.exports = router;

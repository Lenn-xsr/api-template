module.exports = {
  get: (req, res) => {
    res.send("This is an example of default route.");
  },
  post: (req, res) => {
    res.sendStatus(200);
  },
};

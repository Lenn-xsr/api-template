module.exports = {
  get: (req, res) => {
    res.send("This is an example route.");
  },
  post: (req, res) => {
    res.sendStatus(200);
  },
};

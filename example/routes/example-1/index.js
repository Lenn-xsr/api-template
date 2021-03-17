module.exports = {
  get: (req, res) => {
    res.send("This is an example of a route using a folder.");
  },
  post: (req, res) => {
    res.sendStatus(200);
  },
};

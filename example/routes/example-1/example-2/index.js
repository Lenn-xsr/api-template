module.exports = {
  get: (req, res) => {
    res.send("This is an example of a secondary route within another route.");
  },
  post: (req, res) => {
    res.sendStatus(200);
  },
};

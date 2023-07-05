module.exports = (req, res, next) => {
  if (!req.session.user) {
    res.json({ msg: "there's no session registered" });
  } else {
    next();
  }
};

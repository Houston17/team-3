exports.getHome = (req, res) => {
    res.render('static/home');
};

exports.getTrimmedEvents = (req, res) => {
  res.render();
};

exports.logIn = (req, res) => {
  res.render('static/user');
};

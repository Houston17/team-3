exports.getHome = (req, res) => {
    res.render('static/home');
};

exports.getSignUp = (req, res) => {
  res.render('static/user');
};

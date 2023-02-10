const auth = (req, res, next) => {
    if (!req.session.loggedIn) {
        res.redirect('/user');
    } else {
        next();
    }
}

module.exports = auth;
const auth = (req, res, next) => {
    if (!req.session.user_id) {
        res.redirect('/user');
    } else {
        next();
    }
}

module.exports = auth;
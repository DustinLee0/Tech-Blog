const router = require('express').Router();
const { Posts, Comments, User } = require('../models')
const auth = require('../utils/helpers');

// render dashboard page
router.get('/', auth, async (req, res) => {
    try {
        const getPosts = await Posts.findAll({
            where: { user_id: req.session.user_id },
        });

        const posts = getPosts.map((post) =>
            post.get({ plain: true })
        );
        console.log('POSTS: ', posts)
        console.log('loggedIn: ', req.session.loggedIn);
        console.log('username: ', req.session.username);


        res.render('dashboard', {
            posts,
            loggedIn: req.session.loggedIn,
            myUsername: req.session.username,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// create a post
router.post('/create-post', auth, async (req, res) => {
    try {
        //  create user object
        const dbCreatePost = await Posts.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.user_id,
        });
        // console.log('sessionid: ', req.session.user_id)

        res.status(201).json(dbCreatePost);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
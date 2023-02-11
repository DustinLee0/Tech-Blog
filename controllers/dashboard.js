const router = require('express').Router();
const { Posts, Comments, User } = require('../models')
const auth = require('../utils/helpers');

// render dashboard page
router.get('/', async (req, res) => {
    try {
        let getUserPosts = await Posts.findAll({
            where: {
                user_id: req.session.user_id
            }
        });
        
        if (!getUserPosts) {
            res.render('dashboard', {
                loggedIn: req.session.loggedIn,
                myUsername: req.session.username
            });
        }

        let posts = getUserPosts.map((post) =>
            post.get({ plain: true })
        );
        console.log('SERIALIZED POSTS: ', posts)
        console.log('loggedIn: ', req.session.loggedIn);
        console.log('username: ', req.session.username);
        console.log('id: ', req.session.user_id);


        res.render('dashboard', {
            posts,
            loggedIn: req.session.loggedIn,
            myUsername: req.session.username
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
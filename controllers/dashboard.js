const router = require('express').Router();
const { Posts, Comments, User } = require('../models')

// render dashboard page
router.get('/', async (req, res) => {
    try {

        res.render('dashboard', {
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// create a post
router.post('/create-post', async (req, res) => {
    try {
        //  create user object
        const dbCreatePost = await Posts.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.user_id,
        });
        console.log('sessionid: ', req.session.user_id)

        res.status(201).json(dbCreatePost);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/getposts', async (req, res) => {
    try {
        // get all user posts
        const getPosts = await Posts.findAll({
            // where: {
            //     user_id: req.session.user_id
            // }
            // include: {
            //     Model: Comments, include: {
            //         Model: User, attributes: ["username"]
            //     }
            // },
            // { Model: User, attributes: ['username'] }]
        });

        const posts = getPosts.map((post) =>
            post.get({ plain: true })
        );
        console.log('POSTS: ', posts)

            console.log('session id: ', req.session.user_id);

    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;
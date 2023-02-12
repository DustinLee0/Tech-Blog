const router = require('express').Router();
const { Posts, Comments, User } = require('../models');
const { update } = require('../models/User');

// render dashboard page
router.get('/', async (req, res) => {
    try {
        if (req.session.loggedIn) {
            let getUserPosts = await Posts.findAll({
                where: {
                    user_id: req.session.user_id
                }
            });

            //serialize data
            let posts = getUserPosts.map((post) =>
                post.get({ plain: true })
            );
            // console.log('SERIALIZED POSTS: ', posts)
            // console.log('loggedIn: ', req.session.loggedIn);
            // console.log('username: ', req.session.username);
            // console.log('id: ', req.session.user_id);

            res.render('dashboard', {
                posts,
                loggedIn: req.session.loggedIn,
                myUsername: req.session.username
            });
        }

        res.render('dashboard');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/edit-post/:id', async (req, res) => {
    try {
        const singlePostSrch = await Posts.findByPk(req.params.id);

        const post = singlePostSrch.get({ plain: true });
          console.log('serialized post: ', post)
          console.log('content: ', post.content)

        res.render('edit-post', {
            post,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


// create a post
router.post('/create-post', async (req, res) => {
    try {
        //  create post object
        const dbCreatePost = await Posts.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.user_id,
        });
        // console.log('userid: ', req.session.user_id)

        res.status(201).json(dbCreatePost);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/edit-post/:id', async (req, res) => {
    try {
        const updatePost = await Posts.update(
            req.body,
            {
                where: {
                    id: req.params.id
                }
            });

        console.log('update-post-search: ', updatePost);

        res.status(200).json(updatePost);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
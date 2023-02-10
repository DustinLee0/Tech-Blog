const router = require('express').Router();
const { Posts, Comments, User } = require('../models')
const { auth } = require('../utils/helpers');

router.get('/', async (req,res)=>{
    try{
        const dbPosts = await Posts.findAll({
            include: [
              {
                model: User,
                attributes: ['username'],
              },
            ],
          });

          const posts = dbPosts.map((post) =>
          post.get({ plain: true })
        );
          // console.log('SERIALIZED POSTS: ', posts);

        res.render('homepage', {
            posts,
            loggedIn: req.session.loggedIn,
        });
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;
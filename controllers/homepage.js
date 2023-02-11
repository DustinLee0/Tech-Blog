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
          console.log('SERIALIZED POSTS: ', posts);
          console.log('loggedIn: ', req.session.loggedIn);
          console.log('userid: ', req.session.user_id);

        res.render('homepage', {
          posts,
          loggedIn: req.session.loggedIn,
        });
    }catch(err){
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
  try {
    const post = await Posts.findByPk(req.params.id)


  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;
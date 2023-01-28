const router = require('express').Router();
const { Posts, Comments, User } = require('../models')

router.get('/', async (req,res)=>{
    try{
        await res.render('homepage');
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;
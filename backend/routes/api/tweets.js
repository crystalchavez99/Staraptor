const express = require('express')
const router = express.Router();
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const {Tweet,User } = require('../../db/models')

router.get('/', async(req,res) =>{
    const tweets = await Tweet.findAll()
    return res.json({tweets})
})

router.post('/', async(req,res,next) =>{
    const {media, message,user_id} = req.body;
    const tweet = await Tweet.post({media, message,user_id});
    return res.json({tweet})
} )



module.exports = router;

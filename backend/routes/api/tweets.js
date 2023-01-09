const express = require('express')
const router = express.Router();
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const {Tweet,User } = require('../../db/models')

router.get('/', async(req,res) =>{

    // console.log(`API ROUTE`, tweets)
    // return res.json({tweets})
    console.log('WE ARE AINSIDE ROUTE')
    let tweet = await Tweet.findByPk(1)
    console.log(tweet)
})

module.exports = router;

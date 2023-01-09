const express = require('express')
const router = express.Router();
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const {Tweet } = require('../../db/models')

router.get('/', async(req,res) =>{

    // console.log(`API ROUTE`, tweets)
    // return res.json({tweets})
    console.log('WE ARE AINSIDE ROUTE')
    let tweets = await Tweet.findAll();
})

module.exports = router;

const express = require('express');
const router = express.Router();
const User = require('../lab/userModel.js');
router.get('/', (req, res)=>{
    res.status(200).json({message: 'checking'});
})



module.exports = router;
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/',(req,res)=>{res.status(403);res.write('<h1 style="color:red;">Permission denied');res.end()})

module.exports = router;

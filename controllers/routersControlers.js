const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
   res.render('home', { 
      title: 'ProgMy Home' 
   });
});

module.exports = router;
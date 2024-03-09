// backend/routes/api/index.js
const router = require('express').Router();



router.post('/test', function(req, res) {
  //res.cookie('XSRF-TOKEN', req.csrfToken());
    res.json({ requestBody: req.body });
  });

  
module.exports = router;

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    return res.render('addWord')
})

module.exports = router;

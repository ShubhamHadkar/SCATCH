const express = require('express');
const router = express.Router();

router.get("/", function (req, res) {
    res.send("It is working product")
});

module.exports = router;
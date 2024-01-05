const express = require('express');
const router = express.Router();

router.post('/submit', function (req, res, next) {
    const requestedData = req.body; // req rek use kre data tika access krl pllehin log krgnn
    console.log(requestedData); // log krgnnwa access krpu data tika
    res.send("Contact Details received successfully"); // response ekn adalawa msg ekk frontend ektath pass karanawa
})

module.exports = router; // module ekk vidiyt  export karanawa eliyata router eka
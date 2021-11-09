const express = require('express');
const router = express.Router();
const { render_verify_code } = require('../../utils/verify-code.js');
const { Admin } = require('../../sequelize/index');
// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now().toLocaleString())
    next()
})

// 登录
router.get('/code',  (req, res) => {
    res.send({
        data: render_verify_code()
    })
})

module.exports = router;
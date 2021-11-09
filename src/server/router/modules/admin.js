const express = require('express');
const router = express.Router();
const { render_verify_code } = require('../../utils/verify-code.js');
const { Admin } = require('../../sequelize/index');
// middleware that is specific to this router
// 获取管理员列表
router.get('/list', async (req, res) => {
    const data = await Admin.findAll();
    console.log(new Date().toLocaleString());

    Admin.create({
        id: 'cdd3d6fa-1f6d-4f9f-8295-f9480e6174e4',
        user_name: 'test',
        password: '123456',
        create_time: new Date(),
        update_time: new Date(),
    })
    res.send({
        data
    })
})

// 新增管理员
router.post('/list/add', async (req, res) => {
    const data = {
        id: 'cdd3d6fa-1f6d-4f9f-8295-f9480e6174e4',
        user_name: 'test',
        password: '123456',
        create_time: new Date(),
        update_time: new Date(),
    }
    await Admin.create(data)
    res.send({
        data
    })
})

module.exports = router;
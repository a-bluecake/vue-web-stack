const express = require('express')
const router = express.Router()

// POST /api/add
// 添加一个文档
router.post('/add', async (req, res) => {
    // [注：req.db = client.db(dbName) 由app.js定义]
    const collection = req.db.collection('list')  // 选择数据库中list集合

    const body = req.body
    if (!body.value) {
        return res.json({ ok: false, msg: "内容不能为空" })
    }
    const ret = await collection.insertOne(body) // 插入一个对象方法
    res.json({ ok: true, data: ret })
})

module.exports = router// 向外暴露这个 router 盒子

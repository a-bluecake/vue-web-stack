const express = require('express')
const router = express.Router()

// GET /api/query
// 获取数据库所有文档
router.get('/query', async (req, res) => {
    try {
        const collection = req.db.collection('list')
        const data = await collection.find({}).toArray()
        res.json({
            ok: true,
            list: data
        })
    } catch (err) {
        res.status(500).json({ ok: false, msg: '查询失败', err: err.message })
    }
})

module.exports = router

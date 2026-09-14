const express = require('express')
const router = express.Router()
const { ObjectId } = require('mongodb')

// POST /api/delete
// 根据文档`_id`，删除文档
router.post('/delete', async (req, res) => {
    // [注：req.db = client.db(dbName) 由app.js定义]
    const collection = req.db.collection('list')  // 选择数据库中list集合

    const id = req.body.id
    if (!id) {
        return res.json({ ok: false, msg: "id不能为空" })
    }
    const ret = await collection.deleteOne({ _id: new ObjectId(id) }) // 删除一个对象方法
    res.json({ ok: true, data: ret })
})

module.exports = router// 向外暴露这个 router 盒子
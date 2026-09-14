const express = require('express')
const router = express.Router()
const { ObjectId } = require('mongodb')
// POST /api/update
// 根据文档`_id`，把待办的`isCompleted`状态取反
router.post('/select-toggle', async (req, res) => {
    const id = req.body.id
    if (!id) {
        return res.json({
            ok: false,
            msg: "传入id为空"
        })
    }
    try {
        const collection = req.db.collection("list")
        const document = await collection.findOne({ _id: new ObjectId(id) })
        if (!document) {
            return res.json({
                ok: false,
                msg: "没有找到该数据"
            })
        }
        const UpdateResult = await collection.updateOne(
            { _id: new ObjectId(id) },
            { $set: { isCompleted: !document.isCompleted } }
        )
        if (UpdateResult.modifiedCount === 1) {
            return res.json({
                ok: true,
                msg: "修改成功"
            })
        } else {
            return res.json({
                ok: false,
                msg: "修改失败"
            })
        }
    } catch (err) {
        res.status(500).json({ ok: false, msg: '更新异常', err: err.message })
    }
})

module.exports = router

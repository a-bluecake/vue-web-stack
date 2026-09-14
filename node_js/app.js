// 导入模块
const express = require('express')// 导入工厂函数express
const { MongoClient, ObjectId } = require('mongodb')// 等价于解构写法：const mongodb = require('mongodb').MongoClient
const cors = require('cors')

const db_url = 'mongodb://127.0.0.1:27017'
const dbName = 'a-bluecake' // 数据库名字
const port = 5771 // 监听端口

// 创建express的实例app
const app = express()

// MongoDB 连接配置
const client = new MongoClient(db_url) // 使用连接协议

app.use(cors({ origin: ["https://www.a-bluecake.cc"] }))
// app.use([path,] callback)是 Express 注册中间件的核心方法
// path 表示路径   callback传递一个中间件对象
// 中间件格式固定：(req, res, next) => {}
// express.json()返回一个中间件对象，作用是解析POST请求的JSON请求体，解析完成把数据放到req.body
app.use(express.json())

// 中间件：每一次请求过来，把db对象挂载到 req.db
app.use(async (req, res, next) => {
    try {
        // 如果还没连接，则建立连接
        if (!client.topology || !client.topology.isConnected()) {
            await client.connect()
        }
        req.db = client.db(dbName) // 获取指定数据库的数据库对象
        next() // 放行，交给路由处理
    } catch (err) {
        res.status(500).json({ ok: false, msg: '数据库连接失败', err: err.message })
    }
})

// 3. 导入路由盒子 
const addRouter = require('./route/add')
const deleteRouter = require('./route/delete')
const queryRouter = require('./route/query')
const updateRouter = require('./route/select-toggle')
// 挂载路由盒子；访问地址 POST /add
app.use('/api', addRouter)
app.use('/api', deleteRouter)
app.use('/api', queryRouter)
app.use('/api', updateRouter)

// 4. 启动服务
app.listen(port, () => {
    console.log(`服务启动，访问 http://localhost:${port}`)
})

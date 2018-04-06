const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const DB_URL = 'mongodb://localhost:27017/react-class-app'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', () => {
  console.log('mongoDB connect success')
})
const _filter = { pwd: 0, __v: 0 }
const {md5Pwd} = require('./utils/pwd')
const {getModel} = require('./model')

const app = express()
// 使用中间间
app.use(cookieParser())
app.use(bodyParser.json())

// 设置跨域权限
app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Credentials', 'true') // 允许跨域设置Cookie
  res.header('X-Power-By', '3.2.1')
  // 让options请求快速返回
  if (req.method === 'OPTIONS') {
    res.sendStatus(200)
  } else next()
})

// 获取轮播图数据
const sliders = require('./mock/home/ad')
app.get('/api/sliders', (req, res) => {
  return res.json(sliders)
})

// 获取课程列表
const lessonList = require('./mock/home/lessonList')
app.get('/api/lessonlist/:type/:offset/:limit', (req, res) => {
  const {type, offset, limit} = req.params
  // console.log(type, offset, limit)
  return res.json(lessonList)
})

// 注册接口
const User = getModel('user')
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body
  // console.log(req.body)
  await User.findOne({ user: username }, _filter).then(doc => {
    if (doc) {
      console.log('有入库记录了', doc)
      return res.json({code: 1, err: '用户名重复'})
    }
    User.create({user: username, pwd: md5Pwd(password)}, async (err, newUser) => {
      console.log('新创建了用户', newUser)
      return await res.json({
        code: 0,
        data: {
          user: newUser.user,
          _id: newUser._id
        }
      })
    })
  })
})

// 登录接口
app.get('/api/login', (req, res) => {
  User.findOne({user: 'yk'}, {}, (err, doc) => {
    res.json({
      code: 0,
      data: doc
    })
  })
})

app.listen(3001, () => {
  console.log('server is running at localhost://3001')
})
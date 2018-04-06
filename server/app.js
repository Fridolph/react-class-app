const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const utility = require('utility')
mongoose.Promise = global.Promise

const _filter = { pwd: 0, __v: 0 }
// const {md5Pwd} = require('./utils/pwd')

const app = express()
// 使用中间间
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
const session = require('express-session')
const mongoStore = require('connect-mongo')(session)
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'fueson',
  store: new mongoStore({
    url: 'mongodb://localhost:27017/react-class-app'
  })
}))
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

/**
 * 加密，注册登录API
 */
const md5Pwd = pwd => {
  const salt = 'fys520yk'
  return utility.md5(utility.md5(pwd + salt))
}

// 注册接口
const User = require('./model')
app.post('/api/register', (req, res) => {
  const {username, password} = req.body
  User.findOne({username}).then(doc => {
    if (doc) {
      return res.json({
        code: 1,
        msg: '用户名已存在'
      })
    } else {
      User.create({username, password: md5Pwd(password)}).then(doc => {
        // 将当前用户存入到session中
        console.log('新建用户', doc)
        req.session.user = doc
        return res.json({
          code: 0,
          data: {
            _id: doc._id,
            username: doc.username,
          }
        })
      })
    }
  })
})

// 登录接口
app.post('/api/login', async (req, res) => {
  const {username, password} = req.body
  console.log(username, password)
  User.findOne({ username }, {}, (err, doc) => {
    if (!doc) {
      return res.json({
        code: 1,
        msg: '用户名不存在'
      })
    } else {
      if (doc.password === md5Pwd(password)) {
        return res.json({
          code: 0,
          data: {
            username: doc.username,
            _id: doc._id
          }
        })
      } else {
        return res.json({
          code: 1,
          msg: '用户名或密码错误'
        })
      }
    }
  })
})

// 验证用户是否登录
app.get('/api/auth', (req, res) => {
  if (req.session.user) {
    return res.json({code: 0, data: req.session.user})
  }
  return res.json({code: 1, msg: '请登录'})
})

app.listen(3001, () => {
  console.log('server is running at localhost://3001')
})
const express = require('express')
const app = express()
app.listen(3001, () => {
  console.log('server is running at localhost://3001')
})

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Credentials', 'true') // 允许跨域设置Cookie
  res.header('X-Power-By', '3.2.1')
  // 让options请求快速返回
  if (req.method === 'OPTIONS') {
    res.send(200)
  } else next()
})

// 获取轮播图数据
const sliders = require('./mock/home/ad')
app.get('/api/sliders', (req, res) => {
  res.json(sliders)
})

const lessonList = require('./mock/home/lessonList')
app.get('/api/lessonlist/:type/:offset/:limit', (req, res) => {
  const {type, offset, limit} = req.params
  // console.log(type, offset, limit)
  res.json(lessonList)
})

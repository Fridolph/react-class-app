const mongoose = require('mongoose')
// 连接mongo 并且使用imooc这个集合
const DB_URL = 'mongodb://localhost:27017/imooc-chat'

mongoose.connect(DB_URL)

const models = {
  user: {
    user: {type: String, require: true},
    pwd: {type: String, require: true},
  }
}

for (let m in models) {
  mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
  getModel(name) {
    return mongoose.model(name)
  }
}
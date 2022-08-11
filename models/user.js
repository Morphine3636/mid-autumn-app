const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// 用户数据表
const UserSchema = new Schema({
    "userName": String,      // 用户名
    "address": String,       // 用户地址
    "isDraw": Boolean,       // 中奖标识
    "isActivity": Boolean,   // 参与标识
})

module.exports = mongoose.model('User', UserSchema)
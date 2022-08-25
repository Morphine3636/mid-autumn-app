const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// 用户数据表
const UserSchema = new Schema({
    "userName": String,       // 用户名
    "password": String,       // 密码
    "realName": String,       // 真实姓名
    "address": String,        // 用户详细地址
    "nativePlace": String,    // 籍贯
    "isDraw": Boolean,        // 中奖标识(是否中奖)
    "lotteryTimes": Number,   // 抽奖次数
    "prize": String,          // 奖品
    "couponCode": String,     // 券码
    "lastLotteryTime":Array,  // 记录每天获得了多少次奖
    "isVip": Boolean  // 是否为超管
})

module.exports = mongoose.model('user', UserSchema, 'user')
const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// 用户数据表
const UserSchema = new Schema({
    "userName": String,       // 用户名
    "address": String,        // 用户详细地址
    "nativePlace": String,    // 籍贯
    "isDraw": Boolean,        // 中奖标识(是否中奖)
    "lotteryTimes": Number,   // 抽奖次数
    "prize": String,          // 奖品
    "couponCode": String,     // 券码
    "isPrize": Boolean,       // 是否发放奖品
    "lastLotteryTime": String  // 最后一次抽奖的日期
})

module.exports = mongoose.model('user', UserSchema, 'user')
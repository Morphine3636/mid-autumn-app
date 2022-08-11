/*
 * @Author: Morphine3636 morphine3636@163.com
 * @Date: 2022-08-10 18:49:45
 * @LastEditors: Morphine3636 morphine3636@163.com
 * @LastEditTime: 2022-08-11 16:27:55
 * @FilePath: /94/React/mid-autumn-app/models/user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// 用户数据表
const UserSchema = new Schema({
    "userName": String,      // 用户名
    "address": String,       // 用户地址
    "isDraw": Boolean,       // 中奖标识
    "isActivity": Boolean,   // 参与标识
})

module.exports = mongoose.model('user', UserSchema,'user')
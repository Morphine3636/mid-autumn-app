const express = require('express'),
	userApi = express.Router(),
	token = require('../token/token'),
	user = require('../models/user');

// 注册&登录
userApi.post('/login', (req, res) => {
	const { username, password } = req.body;
	if (!username || !password) {
		res.json({
			code: 500,
			data: '用户名或密码不能为空!'
		})
	} else {
		user.findOne({ userName: username }, (err, data) => {
			if (err) {
				throw err
			} else {
				if (data) {
					console.log(data._id.toString())
					res.json({
						code: 200,
						data: {
							token: token.setToken({
								key: data._id.toString()
							}),
							user: {
								_id: data._id,
								userName: data.userName
							}
						}
					})
				} else {
					user.create({
						"userName": username,     // 用户名
						"password": password,     // 密码
						"address": ``,        // 用户详细地址
						"nativePlace": ``,    // 籍贯
						"isDraw": false,        // 中奖标识(是否中奖)
						"lotteryTimes": 0,   // 抽奖次数
						"prize": ``,          // 奖品
						"couponCode": ``,     // 券码
						"lastLotteryTime": ``,  // 最后一次抽奖的日期
						"isVip": false,  // 普通用户
					}, (err, _data) => {
						if (err) {
							throw err
						} else {
							res.json({
								code: 200,
								data: {
									token: token.setToken({
										key: data._id.toString()
									}),
									user: {
										_id: data._id,
										userName: data.userName
									}
								}
							})
						}
					})
				}
			}
		})
	}
})
// 获取用户列表
userApi.get('/getUserList', (req, res) => {
	user.find({ isVip: false }, { password: 0 }, (err, data) => {
		if (err) {
			throw err
		} else {
			res.json({
				code: 200,
				data
			})
		}
	})
})

module.exports = userApi;
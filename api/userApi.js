const express = require('express'),
	userApi = express.Router(),
	mongoose = require('mongoose'),
	token = require('../token/token'),
	user = require('../models/user');

//日期返回值
const formatTime = date => {
	const year = date.getFullYear()
	const month = date.getMonth() + 1
	const day = date.getDate()
	const hour = date.getHours()
	const minute = date.getMinutes()
	const second = date.getSeconds()

	return [year, month, day].map(formatNumber).join('-')
}

//验证一位数还是两位数
const formatNumber = n => {
	n = n.toString()
	return n[1] ? n : '0' + n
}
// 注册&登录
userApi.post('/login', (req, res) => {
	const { username, password } = req.body;
	console.log(username, password)
	if (!username || !password) {
		res.json({
			code: 500,
			data: '用户名或密码不能为空!'
		})
	} else {
		user.findOne({ userName: username }, { password: 0 }, (err, data) => {
			if (err) {
				throw err
			} else {
				if (data) {
					res.json({
						code: 200,
						data: {
							token: token.setToken({
								key: data._id.toString()
							}),
							user: data
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
						"realName": ``,       // 真实姓名
						"couponCode": ``,     // 券码
						"lastLotteryTime": ``,  // 最后一次抽奖的日期
						"isVip": false,  // 普通用户
					}, (err, _data) => {
						if (err) {
							throw err
						} else {
							delete _data.password;
							res.json({
								code: 200,
								data: {
									token: token.setToken({
										key: _data._id.toString()
									}),
									user: _data
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
// 用户画圆提交
userApi.post('/submitMoon', (req, res) => {
	const { grade, userId, time } = req.body;
	if (!grade || !userId || !time) {
		res.json({
			code: 500,
			data: '必要参数不能为空!'
		})
	} else {
		if (grade >= 90) {
			const _id = mongoose.Types.ObjectId(userId)
			user.findOne({ _id }, (err, data) => {
				if (err) {
					throw err
				} else {
					let lastLotteryTime = data.lastLotteryTime;
					lastLotteryTime.push({
						time,
					})
					let length = lastLotteryTime.filter(el => el.time === formatTime(new Date()));
					if (length.length > 3) {
						res.json({
							code: '500',
							data: '今日次数已达上限!'
						})
					} else {
						user.updateOne({ _id }, { "lotteryTimes": data.lotteryTimes + 1, "lastLotteryTime": lastLotteryTime }, (err, upData) => {
							if( err ){
								throw err
							} else {
								res.json({
									code:'200',
									data:'恭喜您,获取了一次抽奖机会'
								})
							}
						})
					}
				}
			})
		} else {
			res.json({
				code: '500',
				data: '很遗憾,请再接再厉!'
			})
		}
	}
});
// 获取当前抽奖次数
userApi.get('/getNumber',(req,res)=>{
	const { userId }=req.query;
	if( !userId ){
		res.json({
			code:'500',
			data:'用户ID不能为空'
		})
	} else {
		const _id = mongoose.Types.ObjectId(userId)
		user.findOne({_id},(err, data)=>{
			if (err) {
				throw err
			} else {
				res.json({
					code:'200',
					data: data.lotteryTimes
				})
			}
		})
	}
})
// 抽奖
userApi.post('/submitDraw',(req,res)=>{
	const { userId,prize }=req.body;
	if( !userId||!prize ){
		res.json({
			code:'500',
			data:'必要参数不能为空!'
		})
	} else {
		const _id = mongoose.Types.ObjectId(userId)
		user.findOne({_id},(err,data)=>{
			if (err) {
				throw err
			} else {
				let lotteryTimes = data.lotteryTimes;
				if( lotteryTimes===0 ){
					res.json({
						code:'500',
						data:'抽奖次数不足'
					})
				} else {
					user.updateOne({_id},{"lotteryTimes":lotteryTimes-1},(err,updata)=>{
						if (err) {
							throw err
						} else {
							if( prize==='谢谢参与'||data.isDraw ){
								res.json({
									code:'200',
									data:'谢谢参与!'
								})
							} else {
								user.updateOne({_id},{ "isDraw":true,"prize":prize},(err,_updata)=>{
									if(err){
										throw err
									} else {
										res.json({
											code:'200',
											data:prize
										})		
									}
								})
							}
						}
					})
				}
			}
		})
	}
})
// 提交用户信息
userApi.post('/editUserInfo',(req,res)=>{
	const { userId,realName,address,nativePlace }=req.body;
	if( !userId || !realName || !address || !nativePlace){
		res.json({
			code:'500',
			data:'必要参数不能为空!'
		})
	} else {
		const _id = mongoose.Types.ObjectId(userId)
		user.updateOne({_id},{"realName":realName,"address":address,"nativePlace":nativePlace},(err,update)=>{
			if (err) {
				throw err
			} else {
				res.json({
					code:'200',
					data:'更新成功'
				})
			}
		})
	}
})
// 获取当前用户的信息
userApi.get('/getMeInfo',(req,res)=>{
	const { userId }=req.query;
	if( !userId){
		res.json({
			code:'500',
			data:'必要参数不能为空!'
		})
	} else {
		const _id = mongoose.Types.ObjectId(userId)
		user.findOne({_id},{password:0,lastLotteryTime:0},(err,data)=>{
			if (err) {
				throw err
			} else {
				res.json({
					code:'200',
					data: data
				})
			}
		})
	}
})
// 统计用户中奖信息
userApi.get('/totalDraw',(req,res)=>{
	user.find({ isVip: false,isDraw:true }, { password: 0 }, (err, data) => {
		if (err) {
			throw err
		} else {
			let n1=data.filter(el=>el.prize==='一等奖');
			let n2=data.filter(el=>el.prize==='二等奖');
			let n3=data.filter(el=>el.prize==='三等奖')
			res.json({
				code: 200,
				data:{
					n1:n1.length,
					n2:n2.length,
					n3:n3.length
				}
			})
		}
	})
})
// 填写券码
userApi.post('/setCouponCode',(req,res)=>{
	const { userId,code }=req.body;
	if( !userId || !code){
		res.json({
			code:'500',
			data:'必要参数不能为空!'
		})
	} else {
		const _id = mongoose.Types.ObjectId(userId)
		user.updateOne({_id},{"couponCode":code},(err,data)=>{
			if (err) {
				throw err
			} else {
				res.json({
					code:'200',
					data: '提交成功'
				})
			}
		})
	}
})

module.exports = userApi;
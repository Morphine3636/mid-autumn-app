const express = require('express'),
	userApi = express.Router(),
	user = require('../models/user');
	
// 获取用户列表
userApi.get('/getUserList', (req, res) => {
	user.find({}, (err, data) => {
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
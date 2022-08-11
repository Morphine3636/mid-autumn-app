const express = require('express'),
	userApi = express.Router(),
	user = require('../models/user');

/**
 * @description: 查询用户列表
 * @return {*}
 */
userApi.get('/userList', (req, res) => {
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
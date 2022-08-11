const express = require('express'),
    mongoose = require('mongoose'),
    app = express(),
    port = 3000;

mongoose.connect('mongodb://127.0.0.1:27017/midAutumn')
const db = mongoose.connection;

db.on('error', console.error.bind(console, `
    连接数据库失败😭
`))
db.once('open', () => {
    console.log(`
        连接数据库成功😁
    `)
})

app.get('/userList',(req,res)=>{
    console.log(req,res)
    res.send({ name: 'abc' })
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
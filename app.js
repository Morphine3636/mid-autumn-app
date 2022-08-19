const express = require('express'),
    mongoose = require('mongoose'),
    userApi = require('./api/userApi'),
    expressJWT = require('express-jwt'),
    bodyParser = require('body-parser'),
    token = require('./token/token'),
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
app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'content-type,authorization');
    res.header('Access-Control-Allow-Methods', 'POST,GET');
    next();
})

app.use((req, res, next) => {
    const key = req.headers['authorization'];
    if (key == undefined || !key) {
        return next();
    } else {
        let data= token.verToken(key.split(' ')[1])
        if (data) {
            req.data = data;
            return next();
        } else {
            return next();
        }
    }
})

//验证token
app.use(expressJWT({
    secret: 'mid_autumn_app_morphine', // signkey 自定义秘钥 需跟上方保持一致
    algorithms: ["HS256"]
}).unless({
    path: ["/api/login"] //除了这些地址，其他的URL都需要验证
}));

app.use((err, req, res, next) => {
    // set locals, only providing error in development
    if (err.status == 401) {
        return res.send({
            code: 401,
            data: "token失效",
        });
    }
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use('/api', userApi);

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
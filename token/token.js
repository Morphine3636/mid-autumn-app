const jwt=require('jsonwebtoken');
const signkey='mid_autumn_app_morphine';

exports.setToken=(userId)=>{
    return jwt.sign(userId,signkey,{
        expiresIn:'24h'
    })
}
exports.verToken=(token)=>{
    return jwt.verify(token,signkey);
}
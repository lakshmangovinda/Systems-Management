
const jwt = require('jsonwebtoken');
module.exports.checktoken = (req,res, next) =>{
     let token = req.get('authorization');
     if(token){
          token = token.slice(7);
          jwt.verify(token, 'lak123', (err,result)=>{
               if(err){
                    return res.json({
                         message:"invalid token"
                    })
               }else{
                    next();
               }
          })
     }else{
     return res.json({
          message: 'access denied'
          
     })
     }

}
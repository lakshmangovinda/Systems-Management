
const Q = require( "q" );
const encrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const u = require('../model/user.model');


module.exports.postuser = (req, res) =>{
 
  const body  = req.body;
 
  
const salt = encrypt.genSaltSync(10);
     body.password = encrypt.hashSync(body.password,salt);
     
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  const users = new u({
    fullName : req.body.fullName,
    email: req.body.email,
    password: body.password,
    phoneNumber: req.body.phoneNumber,
  });
  emailbody = req.body;
  u.getuserbyemail(emailbody,(data,err) =>{
    if (err) {
      res.status(500).json({
        message:
        err.message || "some error occured"
      })
    } 
      if(!data){
    res.status(404).json({
      message:
      err.message || "invalid email & passsword"
    })
    }
   
    console.log(data[0].email)
if(emailid !== data[0].email){
          u.createuser(users, (err, data) => {
      if (err)
      res.status(500).send({
        message:
          err.message || "error occured"
      });
    else res.status(200).send(res);
  });
}
else{
  return res.send({
    message: "user exists"
  })
}

});
}
module.exports.getuser = (req, res) => { 
  u.alldata( (data,err) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    }

    res.send(data);
  });
};

module.exports.getuserbyemail = (req, res) => { 
  u.getuserbyemail(req.body, (data,err) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    }

    res.send(data);
  });
};
module.exports.login  = (req,res) => {
  const body =req.body;
  console.log(req.body);
  u.getuserbyemail(body,(data,err) =>{
if (err) {
  res.status(500).json({
    message:
    err.message || "some error occured"
  })
} 
  if(!data){
res.status(404).json({
  message:
  err.message || "invalid email & passsword"
})
}
console.log(data);
  const result = encrypt.compareSync(req.body.password, data[0].password);
  if(result){
  data.password = undefined;
  const jsonwebtoene = jwt.sign({result: data},"lak123",{
    expiresIn:'1hr'
  });
  return res.json({
    message:"login success",
    token: jsonwebtoene,
    name: data.fullName,
    role: data.role,
  });
}
  else{
    return res.json({
      message:"login failed invaalid email and passwod",
      
    });
  
  }

  });

  

};
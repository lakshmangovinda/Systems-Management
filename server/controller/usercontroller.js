
const Q = require( "q" );
const encrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const u = require('../model/user.model');

//user register
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
module.exports.postsystem = (req,res) => {

let sysinfo = req.body;
  u.postsystem( sysinfo,(data,err)=>{
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while posting system."
      });
    }

    res.send(data);
  });
}
module.exports.editsystem = (req,res) => {

   let id = req.params.id;

let sysinfo = req.body.systeminfo;
let labname = req.body.labname;

  u.editsystem( labname,sysinfo,id,(data,err)=>{
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while editing system."
      });
    }

    res.send(data);
  });
}


module.exports.getsystem = (req,res) =>{

  let labname = req.params.name
  u.getsystem(labname,(data,err)=>{
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving systems."
      });
    }

    res.send(data);
  
  })
}
//get user info
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
//get user by email
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
//get system by id
module.exports.getbyid = (req, res) => { 
  let id = req.params.id;
  u.getbyid(id,(data,err) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving system by id."
      });
    }

    res.send(data);
  });
};


//user login
module.exports.login  = (req,res) => {
  const body =req.body;

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
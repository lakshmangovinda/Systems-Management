const sql = require('../mysql/mysql');

const userdata = function(users) {
  this.fullName = users.fullName;
   this.email = users.email;
    this.passwod = users.password;
    this.phoneNumber = users.phoneNumber;
};

userdata.postsystem = (u,result ) =>{
 
 let information=u.systeminfo;
let array = [
  [information],
  [u.lab]
]

  sql.query( 'insert into register.systeminfo(systeminfo,labname) values (?)',[array] , (err, res) => {
    if (err) {
      
      result(err, null);
      return;
    }

    result(res);
  });

}
userdata.editsystem = (labname,u,id,result ) =>{
 
  




  sql.query( 'UPDATE systeminfo SET labname=?,systeminfo=? WHERE id = ?',[labname,u,id] , (err, res) => {
    if (err) {
      
      result(err, null);
      return;
    }

    result(res);
  });

}



userdata.getsystem = (name,result)=>{
  let labname = name;
  sql.query('select * from systeminfo where labname = ?',[labname], (err,res)=>{
    if (err) {
      
      result(err, null);
      return;
    }

    result(res);
  })
}

userdata.getbyid = (id,result)=>{
  let labname = id;
  sql.query('select * from systeminfo where id = ?',[labname], (err,res)=>{
    if (err) {
      
      result(err, null);
      return;
    }

    result(res);
  })
}


userdata.alldata = ( result) => {

 
  sql.query("SELECT * FROM registerinfo", (err, res) => {
    if (err) {
      result(null, err);
    }

    result(res,null);
  });
};
userdata.getuserbyemail = ( d, result) => {
let x=[
[d.email],
];
sql.query("SELECT * FROM registerinfo Where email = ? ",[x] ,(err, res) => {
    if (err) {
      result(null, err);
    }

    result(res, null);
  });
};
userdata.createuser = (u ,result) => {

  let U = [
    [ u.fullName],
    [ u.email],
    [u.passwod],
    [u.phoneNumber],
    ['0']
  ];
  sql.query( 'insert into registerinfo(fullName,email,password,phoneNumber,role) values (?)',[U] , (err, res) => {
    if (err) {
      
      result(err, null);
      return;
    }

    result(res);
  });


};
module.exports = userdata;
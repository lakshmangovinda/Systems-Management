


const sql = require('../mysql/mysql');

const userdata = function(users) {
  this.fullName = users.fullName;

    this.email = users.email;
    this.passwod = users.password;
    this.phoneNumber = users.phoneNumber;
};


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
const bcrypt = require("bcrypt");
var db = require("../database-mysql/index");

const register = async (req, res) => {
  var salt = await bcrypt.genSalt();
  var pass = await bcrypt.hash(req.body.password, salt);
  var inssql = "INSERT INTO users SET ? ";
  var params = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    phonenumber: req.body.phonenumber,
    password: pass,
  };
  db.query(inssql, params, (err, result) => {
    if (err) console.log(err);
    console.log(result);
  });
};

var login = (req, res) => {
  var password = req.body.password;
  var username = req.body.email;
  var getsql = "SELECT * FROM users WHERE email =?";
  db.query(getsql, username, (err, result) => {
    if (err) {
      console.log(err);
    }
    result.filter(async (elem) => {
      bcrypt
        .compare(password, elem.password)
        .then((result) => {
          if (result === true) {
            res.json({ redirct: "/MainPage", userinfo: elem });
            
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });
  });
};

var post = (req, res) => {
  var postsql = "INSERT INTO posts SET ? ";
  let params = {
    title: req.body.title,
    image: req.body.image,
    user_id: req.body.userid,
  };
  db.query(postsql, [params], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
};

var postget = (req, res) => {
  var postgetsql = "SELECT * FROM posts  ";
  db.query(postgetsql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};
var postgetwithid = (req, res) => {
  var postgetidsql = "SELECT * FROM posts WHERE user_id = ?";
  db.query(postgetidsql,[req.body.id],(err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.send(result);
    }
  });
};


var deleteposte = (req, res) => {
  console.log(req.body,'del with id')
  var delsql = "DELETE FROM posts WHERE id = ?";
  db.query(delsql, [req.body.id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });

};
var searchName = (req, res) => {
  var searchName = "SELECT * FROM users WHERE firstname OR lastname =? ";
  db.query(searchName, req.body, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
};
var searchget = (req, res) => {
  var searchget = "SELECT * FROM users WHERE firstname OR lastname =? ";
  db.query(searchget, req.body, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
};



var updateAccunt =async (req, res)=>{ 
var salt=await bcrypt.genSalt()
var pass=await bcrypt.hash(req.body.password,salt)
    var update =`UPDATE users SET firstname = ?, lastname = ?, email = ?, phonenumber = ?, password= ? WHERE id = ?`
    var params= [req.body.firstname,req.body.lastname,req.body.email,req.body.phonenumber,pass,req.body.id]
    db.query(update,params,(err,result)=>{
        if(err) console.log(err);
        console.log(result)
    })  
}

var commits = (req, res) => {
  var commsql = "INSERT INTO comments SET ? ";
  var params = {
    des: req.body.des,
    post_id: req.body.postid,
    user_id: req.body.userid,
  };
  console.log(params)
  db.query(commsql, [params], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
};
var getcommit = (req, res) => {
  console.log(req.body);
  var getcommit = "SELECT * FROM comments WHERE post_id = ?";
  db.query(getcommit,[ req.body.id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result)
      console.log(result);
    }
  });
};
var deletecommits=(req, res)=>{
  console.log(req.body,'del with postid')
   var deletcommits = "DELETE FROM comments WHERE post_id = ?";
  db.query(deletcommits,[req.body.id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
}
var likes=(req, res)=>{
  var likesql='INSERT INTO likes SET ? '
  var params = {
    post_id: req.body.postid,
    user_id: req.body.userid,
  };
  db.query(likesql,[params], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
}
var getlikes = (req, res) => {
  console.log(req.body);
  var getlikes= "SELECT * FROM likes ";
  db.query(getlikes, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result)
      console.log(result);
    }
  });
};

module.exports = {
  register,
  login,
  post,
  commits,
  deleteposte,
  searchName,
  searchget,
  updateAccunt,
  getcommit,
  postget,
  postgetwithid,
  deletecommits,
  likes,getlikes
};

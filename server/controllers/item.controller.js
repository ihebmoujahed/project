const bcrypt = require('bcrypt')
var db = require('../database-mysql/index')
const register = async (req, res) => {
    var salt = await bcrypt.genSalt()
    var pass = await bcrypt.hash(req.body.password, salt)
    var inssql = 'INSERT INTO users SET ? '
    var params = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phonenumber: req.body.phonenumber,
        password: pass
    };
    db.query(inssql, params, (err, result) => {
        if (err) console.log(err);
        console.log(result)
    })
}
var login = (req, res) => {
    var password = req.body.password
    var username = req.body.email
    var getsql = 'SELECT * FROM users WHERE email =?'
    db.query(getsql, username, (err, result) => {
        if (err) { console.log(err); }
        result.filter(async (elem) => {
            bcrypt.compare(password, elem.password)
                .then((result) => {
                    if (result === true) {
                        res.json({ redirct: "/", userinfo: elem })
                    }
                })
                .catch((err) => { console.log(err); })
        })
    })
}
var post = (req, res) => {
    var postsql = 'INSERT INTO posts SET ? '
    let params = {
        title: req.body.title,
        image: req.body.image,
        user_id: req.body.userid,
    }
    db.query(postsql, params, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(result)
        }
    })
}
var commits = (req, res) => {
    var commsql = 'INSERT INTO comments SET ? '
    var params = {
        // comments:req.body.comments,
        des: req.body.des,
        post: req.body.post,
        user_id: req.body.userid
    }
    db.query(commsql, params, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(result)
        }
    })
}
var deleteposte = (req, res) => {
    var delsql = 'DELETE FROM posts WHERE id = ?'
    var params = { id: req.body.id }
    db.query(delsql, params, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(result)
        }
    })
    var deletcommits = 'DELETE FROM comments WHERE post_id = ?'
    db.query(deletcommits, params, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(result)
        }
    })
}
var searchName = (req, res) => {
    var searchName = 'SELECT * FROM users WHERE firstname OR lastname =? '
    db.query(searchName, req.body, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(result)
        }
    })
}
var searchget = (req, res) => {
    var searchget = 'SELECT * FROM users WHERE firstname OR lastname =? '
    db.query(searchget, req.body, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(result)
        }
    })
}
var updateAccunt = async (req, res) => {
    var salt = await bcrypt.genSalt()
    var pass = await bcrypt.hash(req.body.password, salt)
    var update = 'UPDATE users WHERE id = ?'
    var params = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phonenumber: req.body.phonenumber,
        password: pass
    };
    db.query(update, params, (err, result) => {
        if (err) console.log(err);
        console.log(result)
    })
}
var getcommit = (req, res) => {
    var getcommit = 'SELECT * FROM comments WHERE userid = ?'
    db.query(getcommit, req.body, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(result)
        }
    })
}
module.exports = { register, login, post, commits, deleteposte, searchName, searchget, updateAccunt, getcommit } 
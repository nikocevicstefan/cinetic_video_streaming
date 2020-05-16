const userModel = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
module.exports = {
    create: function (req, res, next) {
        const role = req.body.role ? 'admin' : 'client';
        userModel.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            role: role
        }, function (err, result) {
            if (err)
                next(err);
            else
                res.json({status: "success", message: "Registration Successful!", data: result});
        });
    },
    authenticate: function (req, res, next) {
        /* userModel.findOne({email: req.body.email}, function (err, userInfo) {
             if (err) {
                 res.json({status: "error", message: "Invalid, no user found with that email address.", data: null});
                 next(err);
             } else {
                 if (bcrypt.compareSync(req.body.password, userInfo.password)) {
                     const token = jwt.sign({id: userInfo._id}, req.app.get('secretKey'), {expiresIn: '1h'});
                     res.json({
                         status: "success",
                         message: "Login Successful!",
                         data: {user: {id: userInfo._id, name: userInfo.name}, token: token}
                     });
                 } else {
                     res.json({status: "error", message: "Invalid email/password.", data: null});
                 }
             }
         });*/
        try {
            userModel.findOne({email: req.body.email}, function (err, userInfo) {
                if (userInfo) {
                    if (bcrypt.compareSync(req.body.password, userInfo.password)) {
                        const token = jwt.sign({id: userInfo._id}, req.app.get('secretKey'), {expiresIn: '1h'});
                        res.json({
                            status: "success",
                            message: "Login Successful!",
                            data: {user: {id: userInfo._id, name: userInfo.name, role: userInfo.role}, token: token}
                        });
                    } else {
                        // res.json({status: "error", message: "Invalid email/password.", data: null});
                        next('error')
                    }
                } else {
                    next('error')
                }
            })
        } catch (e) {
            res.json({status: "error", message: "Invalid, no user found with that email address.", data: null});
        }
    },
}
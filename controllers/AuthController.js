
var bcrypt = require('bcryptjs');
var User = require('../user/User');

  exports.register=async(req, res) =>{
    var user =  User.create({
      name : req.body.name,
      email : req.body.email,
      password : req.body.password
  }, 
  function (err, user) {
      if (err) return res.status(500).send("There was a problem adding the information to the database.");
      res.status(200).send(user);
      console.log(user+"post service")
  });
  }

  exports.getUser=async(req, res) =>{
    User.find({}, function (err, users) {
      if (err) return res.status(500).send("There was a problem finding the users.");
      res.status(200).send(users);
      console.log(users+"get service")
  });
  }

  exports.updateUser=async(req, res) =>{
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, user) {
      if (err) return res.status(500).send("There was a problem updating the user.");
      res.status(200).send(user);
  });
  }

  exports.deleteUser=async(req, res) =>{
    User.findByIdAndRemove(req.params.id, function (err, user) {
      if (err) return res.status(500).send("There was a problem deleting the user.");
      res.status(200).send("User: "+ user.name +" was deleted.");
  });
  }


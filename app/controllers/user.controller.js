const convert = require('../utils/convertExpresstion');
const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.getDataTest = (req, res) => {
  User.findByPk(req.userId).then(user => {
      if(user) {
          req.history = user.history;
          console.log("Lay du lieu cua user");
          console.log(req.history);
      } else { 
          req.history = '0';
          console.log(" Khong lay du lieu cua user");
      }
      
  });
  res.send({history: req.history});
  console.log('JWT successfully authenticated!');    
};



exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};
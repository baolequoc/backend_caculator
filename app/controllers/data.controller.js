const db = require("../models");
const User = db.user;
const convert = require('../utils/convertExpresstion');

exports.getData = (req, res) => {
    User.findByPk(req.userId).then(user => {
        if(user) {
            console.log(" lay du lieu cua user");
            res.send({history: user.history});
        } else { 
            res.send({history: '0'});
        }
        
    });
    console.log('JWT successfully authenticated!');    
};

exports.exportData = (req, res) => {
    console.log('connected to server');
      let sample = convert(req.body.value);
      res.send(
          {"value": sample});
  };
  
  exports.saveData = (req, res) => {
    console.log(req.userId+' o save data');
    console.log(req);
    User.update(
      {history: req.body.history},
      {where: {id:req.userId}}
    ).then((result) =>{
        console.log(result);
        res.status(200).send({history: req.body.history});
    }).catch((err) => {
       console.log(err);
        res.status(404).send({message: 'invalid'});
    });
    
    console.log('JWT successfully authenticated!');    
  };
  




 
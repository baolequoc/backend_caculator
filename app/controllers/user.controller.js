const convert = require('../utils/convertExpresstion');

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};
exports.exportData = (req, res) => {
  console.log('connected to server');
    let sample = convert(req.body.value);
    res.send(
        {"value": sample});
};

exports.getData = (req, res) => {
  console.log('JWT successfully authenticated!');
    res.send(
        {history: req.history});
}

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};
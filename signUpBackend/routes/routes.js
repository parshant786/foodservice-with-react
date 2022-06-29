const express = require("express");
const router = express.Router();
const signUpTemplateCopy = require("../models/signUpModel.js");
router.post("/signUp", (req, res) => {
  signUpTemplateCopy.findOne({ email: req.body.email }, (err, user) => {
    if (user) {
      res.send({ message: "already registered" });
    } else {
      const signUpUser = new signUpTemplateCopy({
        fullName: req.body.fullName,
        email: req.body.email,
        password: req.body.password,
      });
      signUpUser
        .save()
        .then((data) => res.json(data))
        .catch((e) => res.json(e));
    }
  });
});
router.get("/signUp", (req, res) => {
  signUpTemplateCopy.find({}, (err, users) => {
    if (err) console.log("err");
    res.json(users);
  });
});
router.post("/signIn", (req, res) => {
  const { email, password } = req.body;
  signUpTemplateCopy.findOne({ email:email },(err,user)=>{
    if(user){
      if(user.password !== password){
        res.send({message:"invalid password"})
      }else{
        res.send({message:"logIn successful",user:user})
      }

    }else{
      res.send({message:"not registered user"})
    }
  });
});
module.exports = router;

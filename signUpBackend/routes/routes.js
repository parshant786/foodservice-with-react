const express = require("express");
const router = express.Router();
const signUpTemplateCopy = require("../models/signUpModel.js");
router.post("/signUp", (req, res) => {
  const signUpUser = new signUpTemplateCopy({
    fullName: req.body.fullName,
    email: req.body.email,
    password: req.body.password,
  });
  signUpUser
    .save()
    .then((data) => res.json(data))
    .catch((e) => res.json(e));
});
module.exports = router;

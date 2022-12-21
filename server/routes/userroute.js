const express = require("express")
const User = require("../models/User")
const bcrypt = require("bcrypt")
const router = express.Router()
//Update_USer
router.put("/updateUser/:_id", async (req, res) => {
  const { _id } = req.params
  const { firstNamee, lastNamee, gender, phone, email, password } = req.body
  try {
    const user = await User.findOneAndUpdate(
      { _id },
      {
        firstNamee,
        lastNamee,
        gender,
        phone,
        email,
        password,
      }
    )
    res.json({ msg: "User Updated", user })
  } catch (error) {
    console.log(error)
  }
})
//GetUser
router.get("/listUsers", async (req, res) => {
  try {
    const user = await User.find()
    res.json({ msg: "data fetched", user })
  } catch (error) {
    console.log(error)
  }
})
router.get("/:_id", (req, res) => {
  const { _id } = req.params
  User.findOne({ _id })
    .then((user) => res.send(user))
    .catch((err) => console.log(err))
})
router.delete("/deleteUser/:_id", (req, res) => {
  const { _id } = req.params
  User.findOneAndDelete({ _id })
    .then((users) => res.send(users))
    .catch((err) => console.log(err))
})

//Adduser
router.post("/addUser", async (req, res) => {
  const { lastNamee, firstNamee, gender, phone, email, password } = req.body
  try {
    //chechk exixtence users
    let user = await User.findOne({ email })
    if (user) {
      return res.status(400).json({ msg: "User already exixtes" })
    }
    //Create new user
    else {
      user = new User({
        firstNamee,
        lastNamee,
        gender,
        email,
        phone,
        password,
      })
      console.log(user)
      //create salt hash
      const salt = 10
      const hasdPassWord = await bcrypt.hash(password, salt)
      user.password = hasdPassWord
      //save user
      await user.save()
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: "server erreur" })
  }
})
module.exports = router

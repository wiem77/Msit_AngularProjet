const mongoose = require("mongoose")
const schema = mongoose.Schema
const userSchema = new schema({
  firstNamee: {
    type: String,
    required: [true, "Please tell us your first name!"],
  },
  lastNamee: {
    type: String,
    required: [true, "Please tell us your last name!"],
  },
  gender: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  phone: { type: String, unique: true, required: true },
  password: { type: String, required: true },
})
module.exports = User = mongoose.model("User", userSchema)

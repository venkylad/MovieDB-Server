import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter the name"],
  },
  email: {
    type: String,
    required: [true, "Please enter the email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please enter the password"],
  },

  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const User = mongoose.model("User", postSchema);

export default User;

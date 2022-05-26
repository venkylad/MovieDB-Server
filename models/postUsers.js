import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  mobile: {
    type: String,
  },
  email: {
    type: String,
  },
  age: {
    type: Number,
  },
  businessName: {
    type: String,
  },
  gst: {
    type: String,
  },
  address: {
    type: String,
  },
  businessType: {
    type: String,
  },
  amount: {
    type: Number,
  },
  interest: {
    type: Number,
  },
  tenure: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostUser = mongoose.model("PostUser", postSchema);

export default PostUser;

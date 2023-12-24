import mongoose from "mongoose";

const connectDB = async () => {
  const res = await mongoose.connect(
    "mongodb://127.0.0.1:27017/authentication"
  );
  if (res) {
    console.log("mongodb to connected Successfully ✅");
  } else {
    console.log("mongodb to not connected Successfully ❌");
  }
};

export default connectDB;
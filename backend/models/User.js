import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, sparse: true },
  mobile: { type: String, unique: true, sparse: true },
  password: String,
  role: {
    type: String,
    enum: ["admin", "customer", "provider"],
    default: "customer",
  },
});

export default mongoose.model("User", userSchema);

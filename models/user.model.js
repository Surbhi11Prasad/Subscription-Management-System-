import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Username is required"],
      minLength: 2,
      maxLength: 50,
    },
    email: {
      type: String,
      unique: true,
      required: [true, "User email is required"],
      trim: true,
      lowercase: true,
      validate(val) {
        if (!validator.isEmail(value)) {
          throw new Error("Invalid Email Id");
        }
      },
    },
    password: {
      type: String,
      required: [true, "password is required"],
      validate(val) {
        if (!validator.isStrongPassword(val)) {
          throw new Error(" Please enter a strong password");
        }
      },
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;

import mongoose from "mongoose";
import { DB_URI } from "../config/env.js";

const connectDB = async () => {
  await mongoose.connect(DB_URI);
};

export default connectDB;

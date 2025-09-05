import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env.js";
import User from "../models/user.model.js";

export const userAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) throw new Error("Invalid token");

    const data = await jwt.verify(token, JWT_SECRET);
    const { id } = data;

    const user = await User.findById(id);
    if (!user) {
      const error = new Error("User not found");
      error.statusCode = 404;
      throw error;
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized : " + error.message });
  }
};

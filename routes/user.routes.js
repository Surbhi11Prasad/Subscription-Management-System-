import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controller.js";
import { userAuth } from "../middleware/auth.middleware.js";

const userRouter = Router();

userRouter.get("/", getUsers);
userRouter.get("/:id", userAuth, getUser);
userRouter.post("/", (req, res) => {
  res.json({ title: "CREATE new user" });
});
userRouter.put("/:id", (req, res) => {
  res.json({ title: "UPDATE a user" });
});
userRouter.delete("/:id", (req, res) => {
  res.json({ title: "DELETE user" });
});
export default userRouter;

import express from "express";
import { PORT } from "./config/env.js";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import connectDB from "./database/mongodb.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcom to subscription tracker API ");
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);

const port = PORT || 5000;

connectDB()
  .then(() => {
    console.log("Database connected successfully");
    app.listen(port, () => {
      console.log(`app is running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log("Error connecting to database : " + err);
  });

export default app;

import express from "express";
import { PORT } from "./config/env.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcom to subscription tracker API ");
});

const port = PORT || 5000;
app.listen(port, () => {
  console.log(`app is running on http://localhost:${port}`);
});
export default app;

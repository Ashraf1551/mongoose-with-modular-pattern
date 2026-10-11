import express from "express";
import { TaskRouter } from "./modules/task/task.route.js";
const app = express();
app.use(express.json());

// Task
app.use("/api/task", TaskRouter);

// User
// app.use("/api/user", UserRouter);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to mongoose with modular pattern",
    author:"Ali Ashraf Emon",
  });
});

export default app;

import express, { json, Express, Request, Response } from "express";
import prisma from "../utils/db";
import cors from "cors";
import { CreateUser } from "./controllers/User";

const app: Express = express();
app.use(cors());
const Port = 5000;

app.use(json());

app.post("/createuser", CreateUser);

app.get("/", (req, res) => {
  res.send("welcome to my server ✅👋");
});

app.listen(Port, async () => {
  console.log(`server running on port : ${Port} 🚀`);
});

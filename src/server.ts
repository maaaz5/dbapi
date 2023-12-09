import express, { json, Express, Request, Response } from "express";
import prisma from "../utils/db";

const app: Express = express();
const Port = 5000;
app.use(json());

app.post("/createuser", async (req: Request, res: Response) => {
  if (req.body == "") {
    return res.send("please fill the data");
  }

  try {
    const user = await prisma.client.create({
      data: {
        ...req.body,
      },
    });

    return res.send(user);
  } catch (error) {
    return res.send(error);
  }
});

app.get("/", (req, res) => {
  res.send("welcome to my server ✅👋");
});

app.listen(Port, async () => {
  console.log(`server running on port : ${Port} 🚀`);
});

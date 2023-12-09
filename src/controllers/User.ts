import { Request, Response } from "express";
import prisma from "../../utils/db";

export const CreateUser = async (req: Request, res: Response) => {
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
};

import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const prisma = new PrismaClient();

  const users = await prisma.user.findMany();

  if (users.length) {
    res.status(200).json(users);
    res.end();
  } else {
    res.status(404);
    res.end();
  }
};

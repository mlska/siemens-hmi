import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { parseBody } from "../../../lib/parseBody";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { login, password } = parseBody(req.body);

  const prisma = new PrismaClient();

  const user = await prisma.user.findUnique({
    where: {
      login,
    },
  });

  if (user?.password === password) {
    return res.send({ status: "200", user });
  }

  res.send({ status: "404", message: "incorrect email or password" });
};

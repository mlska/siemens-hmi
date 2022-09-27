import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { parseBody } from "../../../lib/parseBody";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const prisma = new PrismaClient();

  const recipes = await prisma.recipe.findMany();

  if (recipes?.length) {
    return res.send({ status: "200", recipes });
  }

  res.send({ status: "404", message: "recipes not found" });
};

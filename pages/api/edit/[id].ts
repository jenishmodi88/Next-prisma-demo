import prisma from "../../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  try {
    await prisma.user.update({
      where: { id: +id },
      data: { ...req.body, phone: +req.body.phone },
    });
    res.status(200).json({ message: "User Deleted" });
  } catch (error) {
    console.log(error);
  }
}

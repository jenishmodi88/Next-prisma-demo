import prisma from "../../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
    
  try {
    await prisma.user.delete({
      where: {
        id : +id,
      },
    });
    res.status(200).json({ message: "User Deleted" });
  } catch (error) {
    console.log(error);
  }
}

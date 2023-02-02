import prisma from "../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, username, email, phone, website, company } = req.body;

  try {
    await prisma.user.create({
      data: {
        name,
        username,
        email,
        phone: +phone,
        website,
        companyName:company,
      },
    });
    res.status(200).json({ message: "User Added" });
  } catch (error) {
    console.log(error);
  }
}

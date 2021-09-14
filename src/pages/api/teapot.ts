import { NextApiHandler } from "next";

const teapot: NextApiHandler = (_, res) => {
  res.statusCode = 418;
  res.json({ message: "I'm a teapot, Colin." });
};

export default teapot;

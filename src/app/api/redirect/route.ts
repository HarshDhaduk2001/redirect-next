import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const redirectUrl =
      process.env.RedirectURL || "http://localhost:3000/destination";
    res.writeHead(308, { Location: redirectUrl });
    res.end();
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export { handler as GET };

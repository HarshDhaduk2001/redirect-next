const handler = (req: any, res: any) => {
  if (req.method === "GET") {
    const redirectUrl =
      process.env.RedirectURL || "http://localhost:3000/destination";
    res.status(308).setHeader("Location", redirectUrl);
    res.end();
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export { handler as GET };

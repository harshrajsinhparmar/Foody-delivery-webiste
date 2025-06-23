

const { verifyToken } = require("../helpers");

function verifyTokenMiddleware(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  console.log("Bearer header:", bearerHeader);

  if (typeof bearerHeader !== "undefined") {
    const token = bearerHeader.split(" ")[1];
    console.log("Extracted token:", token);

    const data = verifyToken(token);
    console.log("Token verification result:", data);

    if (data) {
      next();
    } else {
      res.status(403).json({ message: "Token invalid" });
    }
  } else {
    res.status(403).json({ message: "Token missing" });
  }
}

module.exports = verifyTokenMiddleware;
import jwt from "jsonwebtoken";
export const verifyToken = (token) => jwt.verify(token, process.env.JWT);
export const generateToken = (payload, expiresIn = "10d") =>
  jwt.sign(payload, process.env.JWT, { expiresIn: expiresIn });

import express from "express";
import { auth } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/protected", auth, (req, res) => {
  res.json({ message: "Access granted to protected route", user: req.user });
});

export default router;

import express from "express";
import multer from "multer";
import { register, login } from "../controllers/authController.js";
import verifyToken from "../middleware/verifyToken.js";
import { getUserProfile } from "../controllers/userController.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/register", upload.single("profileImage"), register);
router.post("/login", login);
router.get("/profile", verifyToken, getUserProfile); // Protected route

export default router;

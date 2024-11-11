import express from 'express';
import multer from 'multer';
import { register, login } from '../controllers/authController.js';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });  // For image handling

router.post('/register', upload.single('profileImage'), register);
router.post('/login', login);

export default router;
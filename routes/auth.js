import express from 'express';
import { body } from 'express-validator';
import {
  login,
  register,
  logout,
  getProfile,
  updatePassword,
  forgotPassword,
  resetPassword
} from '../controllers/authController.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

// Validation rules
const loginValidation = [
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 6 })
];

const registerValidation = [
  body('name').notEmpty().trim(),
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 6 })
];

const passwordValidation = [
  body('currentPassword').isLength({ min: 6 }),
  body('newPassword').isLength({ min: 6 })
];

// Public routes
router.post('/login', loginValidation, login);
router.post('/register', registerValidation, register);
router.post('/forgot-password', 
  [body('email').isEmail().normalizeEmail()], 
  forgotPassword
);
router.post('/reset-password', 
  [body('password').isLength({ min: 6 })], 
  resetPassword
);

// Protected routes
router.post('/logout', authenticate, logout);
router.get('/profile', authenticate, getProfile);
router.put('/update-password', authenticate, passwordValidation, updatePassword);

export default router;
import { findUserById } from '../models/UserModel.js';

export const getUserProfile = async (req, res) => {
  try {
    const userId = req.user.id; // Assuming `req.user.id` is populated by `verifyToken`
    const user = await findUserById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ user });
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};

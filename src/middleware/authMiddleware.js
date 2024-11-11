import jwt from 'jsonwebtoken';

export const auth = (req, res, next) => {
    // Get token from headers
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    // Check if token is not provided
    if (!token) {
        return res.status(401).json({ error: 'No token provided. Access denied.' });
    }

    try {
        // Verify token and attach decoded payload to req.user
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;  // Add user info (e.g., userId) from token payload to request
        next();  // Continue to the next middleware or route handler
    } catch (error) {
        res.status(401).json({ error: 'Invalid token. Access denied.' });
    }
};
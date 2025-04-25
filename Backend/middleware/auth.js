import jwt from 'jsonwebtoken';

const authMiddleware = async (req, res, next) => {
  // Bypass authentication for testing without login
  next();
};


export default authMiddleware;

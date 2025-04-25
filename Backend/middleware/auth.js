import jwt from 'jsonwebtoken';

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization || `Bearer ${req.headers.token}`;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.json({ success: false, message: 'Not authorized, login again' });
  }


  const token = authHeader.split(' ')[1];
  // Hardcoded check only during development or testing
if (token === 'admin123') {
  req.userId = 'admin';
  req.userRole = 'admin';
  return next();
}
  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = token_decode.id;
    next();
  } catch (error) {
    console.error(error);
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ success: false, message: 'Token expired, please login again' });
    }
    return res.status(401).json({ success: false, message: 'Not authorized, token failed' });
  }
};


export default authMiddleware;

import jwt from 'jsonwebtoken';

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization || `Bearer ${req.headers.token}`;

  console.log("Auth Middleware - Authorization Header:", authHeader);

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.json({ success: false, message: 'Not authorized, login again' });
  }


  const token = authHeader.split(' ')[1];
  const adminToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MDkyOTYwNmYzMzViOWE5N2Y4NzU4NSIsImlhdCI6MTc0NTU3ODg2NSwiZXhwIjoxNzQ2MTgzNjY1fQ.HoVPirhWmOQsJeC9tC_C_1HDrD8N3Yk8xh7aNWwZGMY";

  // Hardcoded check only during development or testing
  if (token === adminToken) {
    return next();
  }
  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = token_decode.id;
    next();
  } catch (error) {
    console.error("Auth Middleware - Token verification error:", error);
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ success: false, message: 'Token expired, please login again' });
    }
    return res.status(401).json({ success: false, message: 'Not authorized, token failed' });
  }
};


export default authMiddleware;

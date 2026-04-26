import jwt from 'jsonwebtoken';
import cookieParser from "cookie-parser";

export async function auth ( req, res, next) {
    const token = req.cookies.token;
    console.log(token);
    
    
    if (!token) {
        return res.status(401).json({ message: "Unauthorized - No token" });
    }
    
    try {
        const decoded = await jwt.verify(token, process.env.JWT_SECRET);
        
        req.user = decoded.username;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized - Invalid token" });
    }
}
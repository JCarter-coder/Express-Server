import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export default async(req, res, next) => {
    try {
        // destructure the token
        const jwtToken = req.header('token');

        if (!token) {
            return res.status(403).send('not authorized');
        }

        const payload = jwt.verify(jwtToken, process.env.jwtSecret);

        req.user = payload.user;
        next();
    }
    catch (error) {
        console.error(error.message);
        return res.status(403).send('not authorized');
    }
}
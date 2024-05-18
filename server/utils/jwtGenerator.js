import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.secret;

function jwtGenerator(user_id) {
    const payload = {
        user: {
            id: user_id
        }
    }
    return jwt.sign(payload, JWT_SECRET);
}

export default jwtGenerator;

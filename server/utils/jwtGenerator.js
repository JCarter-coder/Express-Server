import express from 'express';
import bcrypt from 'bcrypt';
import pool from '../db.js';
import jwtGenerator from '../utils/jwtGenerator.js';

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        // destructure data
        const { name, email, password } = req.body;
        // check if user already exists
        const user = await pool.query('SELECT * FROM users WHERE user_email = $1', [
            email
        ]);
        if (user.rows.length !== 0) {
            res.status(402).send('user already exists');
        }
        // bcrypt the password
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const bcryptPassWord = await bcrypt.hash(password, salt);

        const newUser = await pool.query('INSERT INTO users( user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *', [
            // ensure to pass bcryptPassWord, NOT req.password
            name, email, bcryptPassWord
        ]);

        const token = jwtGenerator(newUser.rows[0].user_id);

        res.json({ token });
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send('Server error...');
    }
})

export default router;

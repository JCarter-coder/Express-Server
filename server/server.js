import express from "express";
import pool from './db.js';
import jwtAuthRoutes from './routes/jwtAuth.js';

const app = express();
app.use(express.json());

const PORT = 3000;

app.use('/api/auth', jwtAuthRoutes);

app.get('/', async (req, res) => {
    try {
        const user = await pool.query('SELECT * FROM users;')
        res.send(user.rows);
    } catch (error) {
        res.status(500).send('Server error');
    }
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})
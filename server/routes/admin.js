import express from 'express';
import pool from '../db.js';
import authorization from '../middleware/authorization.js';

const router = express.Router();

router.get('/admin', authorization, async(req, res) => {
    try {
        // get user id
        res.json(req.user);
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send('Server error from admin get route');
    }
})

export default router;
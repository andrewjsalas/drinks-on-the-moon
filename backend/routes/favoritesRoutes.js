const express = require('express');
const router = express.Router();
const pool = require('../db');
const { extractUserId } = require('./authMiddleware');

router.use(extractUserId);

router.get('/', async (req, res) => {
    try {
      const userId = req.userId; 
  
      const query = 'SELECT * FROM favorites WHERE user_id = $1';
      const values = [userId];
  
      const result = await pool.query(query, values);
      const favorites = result.rows;
  
      res.json({ favorites });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching favorites' });
    }
  });
  
  module.exports = router;
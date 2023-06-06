const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
const pool = require('../db');

router.post('/register', async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const query = 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *';
      const values = [name, email, hashedPassword];
  
      const result = await pool.query(query, values);
      const user = result.rows[0];
  
      res.json({ user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while registering the user' });
    }
  });
  
  router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const query = 'SELECT * FROM users WHERE email = $1';
      const values = [email];
  
      const result = await pool.query(query, values);
      const user = result.rows[0];
  
      if (!user) {
        res.status(401).json({ error: 'Invalid credentials' });
        return;
      }
  
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        res.status(401).json({ error: 'Invalid credentials' });
        return;
      }
  
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
      res.json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while logging in' });
    }
  });
  
  module.exports = router;
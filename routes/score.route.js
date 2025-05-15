/**
 * @swagger
 * tags:
 *   name: Scores
 *   description: Score management
 */

/**
 * @swagger
 * /api/scores:
 *   get:
 *     summary: Get all scores
 *     tags: [Scores]
 *     responses:
 *       200:
 *         description: A list of scores
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: Alice
 *                   score:
 *                     type: integer
 *                     example: 12
 */

/**
 * @swagger
 * /api/scores:
 *   post:
 *     summary: Submit a new score
 *     tags: [Scores]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - player
 *               - score
 *             properties:
 *               player:
 *                 type: string
 *                 example: Alice
 *               score:
 *                 type: integer
 *                 example: 15
 *     responses:
 *       201:
 *         description: Score submitted successfully
 *       400:
 *         description: Invalid input
 */

const express = require('express');
const router = express.Router();

let scores = [];

router.get('/scores', (req, res) => {
  res.json(scores);
});

router.post('/scores', (req, res) => {
  const { player, score } = req.body;
  if (!player || typeof score !== 'number') {
    return res.status(400).json({ error: 'Invalid input' });
  }

  const newScore = {
    id: scores.length + 1,
    name: player,
    score: score,
  };

  scores.push(newScore);
  res.status(201).json({ message: 'Score submitted successfully', score: newScore });
});

module.exports = router;

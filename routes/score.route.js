const express = require('express');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Scores
 *   description: Predefined list of player scores
 */

/**
 * @swagger
 * /api/scores:
 *   get:
 *     summary: Get predefined scores
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
 *                     example: 20
 */

router.get('/scores', (req, res) => {
  const scores = [
    { id: 1, name: 'Alice', score: 20 },
    { id: 2, name: 'Bob', score: 15 },
    { id: 3, name: 'Charlie', score: 10 },
    { id: 4, name: 'Diana', score: 25 }
  ];

  res.json(scores);
});

module.exports = router;

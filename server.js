const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files (like CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Dashboard Route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

// Tic Tac Toe Route
app.get('/tictactoe', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'tictactoe.html'));
});

// Simon Game Route
app.get('/simonGame', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Simon.html'));
});

app.listen(port, () => {
  console.log(`✅ Server is running at http://localhost:${port}`);
});

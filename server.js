const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const cors = require('cors');
//allow cors since it will reuquire it
app.use(cors());


app.use(express.static(path.join(__dirname, 'public')));
//swagger usage its optional
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const scoreRoutes = require('./routes/score.route.js');
app.use('/api', scoreRoutes);

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

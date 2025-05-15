const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Simple Score API',
      version: '1.0.0',
      description: 'Predefined scores for 4 players',
    },
    servers: [
      {
        url: 'https://grp-work-6lpj.onrender.com/',
      },
    ],
  },
  apis: ['./routes/*.js'], // Adjust if needed
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;

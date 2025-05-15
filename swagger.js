const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Simple Express API',
      version: '1.0.0',
      description: 'A basic Express API documented with Swagger',
    },
    servers: [
      {
        url: 'http://localhost:3000', // Or use your Render URL
      },
    ],
  },
  apis: ['./routes/*.js'], // Path to the files with Swagger annotations
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
/* */
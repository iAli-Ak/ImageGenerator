const express = require('express');
const path = require('path');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;

// Enable parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/openai', require('./routes/openaiRoutes'));

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'client/dist')));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

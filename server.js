import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import openaiRoutes from './routes/openaiRoutes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Enable parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/openai', openaiRoutes);

// Serve static files from the dist directory
app.use(express.static(path.join(process.cwd(), 'client/dist')));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

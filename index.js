import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import candidateRouter from './router.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 10000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Use the candidate router
app.use(candidateRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

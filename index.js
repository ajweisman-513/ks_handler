import express from 'express';
import bodyParser from 'body-parser';
import candidateController from './candidateController.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(candidateController);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { routes } from './routes/index.js';

dotenv.config();

const app = express()


app.use(cors());
app.use(express.json());

routes(app);

app.listen(process.env.HOST, () => {
  console.info(`Servidor rodadndo na porta ${process.env.HOST}`);
});
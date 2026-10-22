import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import produtoRoutes from './routes/produtoRoutes.js';

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // Permite receber JSON no body

// Rotas
app.use('/api', produtoRoutes);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
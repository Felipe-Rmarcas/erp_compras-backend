import express from 'express';
// Aqui importamos a função nova (criarProduto) junto com a antiga
import { listarProdutos, criarProduto } from '../controllers/produtoController.js';

const router = express.Router();

router.get('/produtos', listarProdutos);
router.post('/produtos', criarProduto); // Rota POST ativada!

export default router;
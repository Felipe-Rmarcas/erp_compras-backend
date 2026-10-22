import db from '../config/db.js';

export const listarProdutos = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM produtos');
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao buscar produtos' });
    }
};

export const criarProduto = async (req, res) => {
    const { nome, unidade_medida, classe, refrigerado } = req.body;

    try {
        const [result] = await db.query(
            'INSERT INTO produtos (nome, unidade_medida, classe, refrigerado) VALUES (?, ?, ?, ?)',
            [nome, unidade_medida, classe, refrigerado || false]
        );
        
        res.status(201).json({ 
            mensagem: 'Produto criado com sucesso!',
            id: result.insertId 
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao criar produto' });
    }
};
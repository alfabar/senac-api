// POST: endpoin para inserir novos alunos

// PUT: Endpoint para atualizar todos os dados de um aluno

// PATCH: Endpoint para atualizar todos/alguns dados de um aluno

// DELETE: ENDPOINT para excluir

import express from "express";
import cors from 'cors';
import { ler, inserir, lerUm, atualizar, excluir } from './src/aluno.js';

const app = express();
const porta = process.env.PORT || 3306;

app.use(cors());
/* habilitando o express a funcionar com dados JSON */
app.use(express.json());

/* habilitando o express a funcionar com dados de formularios */
app.use(express.urlencoded({ extended: true }));


/* ROTAS */
app.get('/', (req, res) => {
    res.send('Api de alunos com Node.js, Express e Mysql');
});


/// GET: ENDPOINT (rota) para dados de varios
app.get('/alunos', (req, res) => {
    ler(res);
    //res.send(`Dados de todos alunos`)
});


/// GET: ENDPOINT (rota) para dados de um aluno
app.get('/alunos/:id', (req, res) => {

    //res.send(`dADOS DE UM ALUNO`);
    const id = parseInt(req.params.id);
    lerUm(id, res);

});


//// Rotas de manipulação de dados 
app.post('/alunos', (req, res) => {

    // Capturando os dados a partir do corpo da requisição
    const novoAluno = req.body;
    inserir(novoAluno, res);
    //res.send(`inserido um aluno`);
});


//// Metodo antigo não sendo utilizado mais atualmente
/* app.put('/alunos/:id', (req, res) => {
    res.send(`Atualiza todos os dados de um aluno`);
}); */
app.patch('/alunos/:id', (req, res) => {

    //res.send(`Atualiza todos/alguns de um aluno`);
    const id = parseInt(req.params.id);
    const aluno = req.body;
    atualizar(id, aluno, res);

});



app.delete('/alunos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    excluir(id, res);
    //res.send(`Excluindo um aluno`);
});



///resposta de conexao do servidor
app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
});
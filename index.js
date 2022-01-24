import express from "express";

const app = express();
const porta = 2112;


app.get('/', (req, res) => {
    res.send('Api de alunos com Node.js, Express e Mysql');
});
/// GET: ENDPOINT (rota) para dados de varios
app.get('/alunos', (req, res) => {
    res.send(`Dados de todos alunos`)
});
/// GET: ENDPOINT (rota) para dados de um aluno
app.get('/alunos/:id', (req, res) => {
    res.send(`dADOS DE UM ALUNO`);
});


//// Rotas de manipulação de dados 
app.post('/alunos', (req, res) => {
    res.send(`inserido um aluno`);
});

//// Metodo antigo não sendo utilizado mais atualmente
/* app.put('/alunos/:id', (req, res) => {
    res.send(`Atualiza todos os dados de um aluno`);
}); */
app.patch('/alunos/:id', (req, res) => {
    res.send(`Atualiza todos/alguns de um aluno`);
});
app.delete('/alunos/:id', (req, res) => {
    res.send(`Excluindo um aluno`);
});



///resposta de conexao do servidor
app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
});




// POST: endpoin para inserir novos alunos

// PUT: Endpoint para atualizar todos os dados de um aluno

// PATCH: Endpoint para atualizar todos/alguns dados de um aluno

// DELETE: ENDPOINT para excluir
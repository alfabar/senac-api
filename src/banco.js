import mysql from 'mysql2';

const conexao = mysql.createConnection({
    /* host: 'localhost',
    user: 'root',
    password: '',
    database: 'escola' */

    /* Versão remoto */
    host: 'db4free.net',
    user: 'admin_api_tiago',
    password: 'Senac*123',
    database: 'escola_tiago'
});

conexao.connect(erro => {
    if (erro) {
        console.error(`Erro ao conectar: ${erro.message}`);
    } else {
        console.log(`Banco de dados conectado com sucesso`);
    }
});

export default conexao;
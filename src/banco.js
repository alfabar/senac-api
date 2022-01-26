import mysql from 'mysql2';

const conexao = mysql.createConnection({
    /* host: 'localhost',
    user: 'root',
    password: '',
    database: 'escola' */

    /* Versão remoto */
    host: '108.167.151.32',
    user: 'carr9069_apisenac',
    password: '@235689',
    database: 'carr9069_api-senac'
});

conexao.connect(erro => {
    if (erro) {
        console.error(`Erro ao conectar: ${erro.message}`);
    } else {
        console.log(`Banco de dados conectado com sucesso`);
    }
});

export default conexao;
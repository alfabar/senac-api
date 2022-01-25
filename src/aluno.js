import conexao from "./banco.js";

/* Funcoes para crud */

function ler(res) {


    /// Comando Sql a ser executado
    const sql = "SELECT * FROM alunos ORDER BY nome";

    /// Executa a query a partir da conexao
    conexao.query(sql, (erro, resultados) => {
        /// funcão com parametro de erro e resultado

        if (resultados.length === 0) {
            res.status(204).end();
            return;
        }

        /* Verificação basica de erro */
        if (erro) {
            // deu ruim , indica o status 400 e exibe o erro
            res.status(400).json(erro.code);
        } else {
            // Funcionou,então status 200 (ok) apresenta JSON
            res.status(200).json(resultados);

        }

    });

}

function inserir(alunos, res) {
    const sql = "INSERT INTO alunos SET ?";

    conexao.query(sql, alunos, (erro) => {
        if (erro) {
            res.status(400).json(erro.code);
        } else {
            res.status(201).json({ "status": "aluno inserido!" });
        }

    });
}

function lerUm(id, res) {
    const sql = "SELECT * FROM alunos WHERE id = ?";
    conexao.query(sql, id, (erro, resultados) => {

        if (resultados.length === 0) {
            res.status(204).end();
            return;
        }


        if (erro) {
            res.status(400).json(erro.code);
        } else {
            res.status(200).json(resultados[0])
        }


    });

}

function atualizar(id, aluno, res) {
    const sql = "UPDATE alunos SET ? WHERE id= ?";
    conexao.query(sql, [aluno, id], (erro, resultado) => {
        if (erro) {
            res.status(400).json(erro.code);
        } else {
            //Saida simples de sucesso
            //res.status(200).json({"status": "atualizado com sucesso"});

            // Saida mais detalhada
            res.status(200).json({...aluno, id });

        }
    });
}

export { ler, inserir, lerUm, atualizar };
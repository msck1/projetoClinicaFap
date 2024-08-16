import mysql from 'mysql2'

const config = {

    host: 'localhost', // localhost significa que o servidor mysql esta sendo hospedado na sua maquina
    user: 'root', // seu usuario do mysql workbench
    password: 'root', // sua senha do mysql workbench
    database: 'clinica' // o nome do banco no mysql workbench que vamos usar

}

// funcao que conecta ao banco de dados

function fazerConexao() {

    const conexao = mysql.createConnection(config); 
    conexao.connect((erro) => { 
        if (erro) {

            console.error("Erro ao conectar ao banco de dados", erro);
            throw erro;

        }
        console.log("Conexão feita com sucesso")
    });
    return conexao;
} 

export { fazerConexao };
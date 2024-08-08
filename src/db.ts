import mysql from 'mysql2'

const config = {

    host: 'localhost', // localhost significa que o servidor mysql esta sendo hospedado na sua maquina
    user: 'root', // seu usuario do mysql workbench
    password: 'root', // sua senha do mysql workbench
    database: 'clinica' // o nome do banco no mysql workbench que vamos usar

}

// funcao que conecta ao banco de dados

function fazerConexao() {

    const conexao = mysql.createConnection(config); // mysql é do modulo, usa a funcao createConnection com o parametro config 
    conexao.connect((erro) => { // tratamento de erros caso não se conecte e um console log caso consiga
        if (erro) {

            console.error("Erro ao conectar ao banco de dados", erro);
            throw erro;

        }
        console.log("Conexão feita com sucesso")
    });
    return conexao;
} 

export { fazerConexao };
// No arquivo db.ts, deve ficar apenas a const config e a funcao de fazer a conexa
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fazerConexao = fazerConexao;
const mysql2_1 = __importDefault(require("mysql2"));
const config = {
    host: 'localhost', // localhost significa que o servidor mysql esta sendo hospedado na sua maquina
    user: 'root', // seu usuario do mysql workbench
    password: 'root', // sua senha do mysql workbench
    database: 'clinica' // o nome do banco no mysql workbench que vamos usar
};
// funcao que conecta ao banco de dados
function fazerConexao() {
    const conexao = mysql2_1.default.createConnection(config); // mysql é do modulo, usa a funcao createConnection com o parametro config 
    conexao.connect((erro) => {
        if (erro) {
            console.error("Erro ao conectar ao banco de dados", erro);
            throw erro;
        }
        console.log("Conexão feita com sucesso");
    });
    return conexao;
}
// No arquivo db.ts, deve ficar apenas a const config e a funcao de fazer a conexa

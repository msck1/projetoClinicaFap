"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inserirMedico = inserirMedico;
const db_1 = require("../db");
class Medico {
    constructor() {
        // para fazer: constructor, getters e setters de acordo com o bd/der, funcoes crud
    }
}
// funcao de inserir,
function inserirMedico(nome_medico, especialidade_medico, crm_medico, callback) {
    const conexao = (0, db_1.fazerConexao)();
    const inserir = 'INSERT INTO medico (nome_medico, especialidade_medico, crm_medico) VALUES (?,?,?)';
    conexao.query(inserir, [nome_medico, especialidade_medico, crm_medico], (erro, resultado) => {
        if (erro) {
            callback(erro);
        }
        else {
            callback(null, resultado);
        }
    });
}
function listarMedicos() {
}
function listarMedicoPorCrm() {
}
function alterarMedicoPeloCrm() {
}
function excluirMedicoPeloCrm() {
}

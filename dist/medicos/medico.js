"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Medico = void 0;
exports.inserirMedico = inserirMedico;
exports.listarMedicoPeloCrm = listarMedicoPeloCrm;
exports.alterarMedicoPeloCrm = alterarMedicoPeloCrm;
exports.excluirMedicoPeloCrm = excluirMedicoPeloCrm;
exports.listarMedicoPelaEspecialidade = listarMedicoPelaEspecialidade;
const db_1 = require("../db");
class Medico {
    // Construtor da classe, instancia um novo Medico
    constructor(_id_medico, _nome_medico, _especialidade_medico, _crm_medico) {
        this.id_medico = _id_medico;
        this.nome_medico = _nome_medico;
        this.especialidade_medico = _especialidade_medico;
        this.crm_medico = _crm_medico;
    }
    // Métodos Setters
    setid_medico(_id_medico) {
        this.id_medico = _id_medico;
    }
    setnome_medico(_nome_medico) {
        this.nome_medico = _nome_medico;
    }
    setespecialidade_medico(_especialidade_medico) {
        this.especialidade_medico = _especialidade_medico;
    }
    setcrm_medico(_crm_medico) {
        this.crm_medico = _crm_medico;
    }
    // Métodos Getters
    getid_medico() {
        return this.id_medico;
    }
    getnome_medico() {
        return this.nome_medico;
    }
    getespecialidade_medico() {
        return this.especialidade_medico;
    }
    getcrm_medico() {
        return this.crm_medico;
    }
}
exports.Medico = Medico;
// Função para inserir um novo médico- Adiciona um médico com base nos dados fornecidos
function inserirMedico(medico, callback) {
    const conexao = (0, db_1.fazerConexao)(); // ou o erro sera null e o teremos o resultado do mysql
    const inserir = 'INSERT INTO medico (nome_medico, especialidade_medico, crm_medico) VALUES (?, ?, ?)';
    conexao.query(inserir, [medico.getnome_medico(), medico.getespecialidade_medico(), medico.getcrm_medico()], (erro, resultado) => {
        if (erro) { // com o erro da query ou o resultado
            callback(erro);
        }
        else {
            callback(null, resultado);
        }
    });
}
// Função para listar médicos pelo CRM - Busca médicos pelo CRM fornecido
function listarMedicoPeloCrm(crm_medicoBuscar, callback) {
    const conexao = (0, db_1.fazerConexao)();
    const query = 'SELECT * FROM medico WHERE crm_medico = ?';
    conexao.query(query, [crm_medicoBuscar], (erro, resultado) => {
        if (erro) {
            callback(erro);
        }
        else {
            callback(null, resultado);
        }
    });
}
// Função para listar médicos pela especialidade-Busca médicos a especialidade fornecida
function listarMedicoPelaEspecialidade(medico_especialidade, callback) {
    const conexao = (0, db_1.fazerConexao)();
    const query = 'SELECT * FROM medico WHERE especialidade_medico = ?';
    conexao.query(query, [medico_especialidade], (erro, resultado) => {
        if (erro) {
            callback(erro);
        }
        else {
            callback(null, resultado);
        }
    });
}
// Função para alterar as informações de um médico pelo CRM-Atualiza os dados do médico com base no CRM antigo
function alterarMedicoPeloCrm(crm_antigo, medico, callback) {
    const conexao = (0, db_1.fazerConexao)();
    const alterar = 'UPDATE medico SET nome_medico = ?, especialidade_medico = ?, crm_medico = ? WHERE crm_medico = ?';
    conexao.query(alterar, [medico.getnome_medico(), medico.getespecialidade_medico(), medico.getcrm_medico(), crm_antigo], (erro, resultado) => {
        if (erro) {
            callback(erro);
        }
        else {
            callback(null, resultado);
        }
    });
}
// Função para excluir um médico pelo CRM-Remove o médico com base no CRM fornecido
function excluirMedicoPeloCrm(crm_medicoExcluir, callback) {
    const conexao = (0, db_1.fazerConexao)();
    const excluir = 'DELETE FROM medico WHERE crm_medico = ?';
    conexao.query(excluir, crm_medicoExcluir, (erro, resultado) => {
        if (erro) {
            callback(erro);
        }
        else {
            callback(null, resultado);
        }
    });
}

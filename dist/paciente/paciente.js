"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paciente = void 0;
exports.inserirPaciente = inserirPaciente;
exports.alterarPacientePeloCpf = alterarPacientePeloCpf;
exports.listarPacientePeloCpf = listarPacientePeloCpf;
exports.excluirPacientePeloCpf = excluirPacientePeloCpf;
const db_1 = require("../db");
class Paciente {
    constructor(_idpaciente, _nome_paciente, _dataNascimento_paciente, _cpf_paciente) {
        this.idpaciente = _idpaciente;
        this.nome_paciente = _nome_paciente;
        this.cpf_paciente = _cpf_paciente;
        this.dataNascimento_paciente = _dataNascimento_paciente;
    }
    getIdPaciente() {
        return this.idpaciente;
    }
    setIdPaciente(_idpaciente) {
        this.idpaciente = _idpaciente;
    }
    getNomePaciente() {
        return this.nome_paciente;
    }
    setNomePaciente(_nome_paciente) {
        this.nome_paciente = _nome_paciente;
    }
    getCpfPaciente() {
        return this.cpf_paciente;
    }
    setCpfPaciente(_cpf_paciente) {
        this.cpf_paciente = _cpf_paciente;
    }
    getDataNascimentoPaciente() {
        return this.dataNascimento_paciente;
    }
    setDataNascimentoPaciento(_dataNascimento_paciente) {
        this.dataNascimento_paciente = _dataNascimento_paciente;
    }
}
exports.Paciente = Paciente;
function inserirPaciente(paciente, callback) {
    const conexao = (0, db_1.fazerConexao)();
    const inserir = `INSERT INTO paciente (nome_paciente,  dataNascimento_paciente, cpf_paciente) VALUES (?, ?, ?)`;
    conexao.query(inserir, [paciente.getNomePaciente(), paciente.getDataNascimentoPaciente(), paciente.getCpfPaciente()], (erro, resultado) => {
        if (erro) {
            callback(erro);
        }
        else {
            callback(null, resultado);
        }
    });
}
function listarPacientePeloCpf(cpf_pacienteBuscar, callback) {
    const conexao = (0, db_1.fazerConexao)();
    const query = `SELECT nome_paciente, CONVERT_TZ(dataNascimento_paciente, '+00:00', '-03:00') AS dataNascimento_paciente, cpf_paciente FROM paciente WHERE cpf_paciente = ?`;
    conexao.query(query, [cpf_pacienteBuscar], (erro, resultado) => {
        if (erro) {
            callback(erro);
        }
        else {
            callback(null, resultado);
        }
    });
}
function alterarPacientePeloCpf(cpf_antigo, paciente, callback) {
    const conexao = (0, db_1.fazerConexao)();
    const alterar = 'UPDATE paciente SET nome_paciente = ?, dataNascimento_paciente = ?, cpf_paciente = ? WHERE cpf_paciente = ?';
    conexao.query(alterar, [paciente.getNomePaciente(), paciente.getDataNascimentoPaciente(), paciente.getCpfPaciente(), cpf_antigo], (erro, resultado) => {
        if (erro) {
            callback(erro);
        }
        else {
            callback(null, resultado);
        }
    });
}
function excluirPacientePeloCpf(cpf_pacienteExcluir, callback) {
    const conexao = (0, db_1.fazerConexao)();
    const excluir = 'DELETE FROM paciente WHERE cpf_paciente = ?';
    conexao.query(excluir, [cpf_pacienteExcluir], (erro, resultado) => {
        if (erro) {
            callback(erro);
        }
        else {
            callback(null, resultado);
        }
    });
}

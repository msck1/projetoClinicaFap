"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telefone = void 0;
exports.inserirTelefonePaciente = inserirTelefonePaciente;
exports.listarTelefonePeloCpfpaciente = listarTelefonePeloCpfpaciente;
exports.alterarTelefonePeloCpf = alterarTelefonePeloCpf;
exports.excluirTelefonePeloCpfPaciente = excluirTelefonePeloCpfPaciente;
const db_1 = require("../db");
// Declaração da Classe Telefone
class Telefone {
    constructor(_idtelefone_paciente, _residencial_paciente, _celular_paciente, _paciente_id_paciente) {
        this.idtelefone_paciente = _idtelefone_paciente;
        this.residencial_paciente = _residencial_paciente;
        this.celular_paciente = _celular_paciente;
        this.paciente_id_paciente = _paciente_id_paciente;
    }
    // Setters
    setIdTelefonePaciente(_idtelefone_paciente) {
        this.idtelefone_paciente = _idtelefone_paciente;
    }
    setCelularPaciente(_celular_paciente) {
        this.celular_paciente = _celular_paciente;
    }
    setResidencialPaciente(_residencial_paciente) {
        this.residencial_paciente = _residencial_paciente;
    }
    setPacienteIdPaciente(_paciente_id_paciente) {
        this.paciente_id_paciente = _paciente_id_paciente;
    }
    // Getters
    getIdTelefonePaciente() {
        return this.idtelefone_paciente;
    }
    getCelularPaciente() {
        return this.celular_paciente;
    }
    getResidencialPaciente() {
        return this.residencial_paciente;
    }
    getPacienteIdPaciente() {
        return this.paciente_id_paciente;
    }
}
exports.Telefone = Telefone;
// Função de inserir
function inserirTelefonePaciente(telefone, cpf_paciente, callback) {
    const conexao = (0, db_1.fazerConexao)();
    const inserirTelefone = 'INSERT INTO telefone_paciente (celular_paciente, residencial_paciente, paciente_id_paciente) VALUES (?, ?, (SELECT id_paciente FROM paciente WHERE cpf_paciente = ?)))';
    conexao.query(inserirTelefone, [telefone.getCelularPaciente(), telefone.getResidencialPaciente(), cpf_paciente], (erro, resultado) => {
        conexao.end(); // Fechar a conexão após a operação
        if (erro) {
            callback(erro);
        }
        else {
            callback(null, resultado);
        }
    });
}
// Função de listar pelo cpf do Paciente
function listarTelefonePeloCpfpaciente(paciente_id_paciente, callback) {
    const conexao = (0, db_1.fazerConexao)();
    const query = 'SELECT * FROM telefone WHERE paciente_id_paciente = ?';
    conexao.query(query, [paciente_id_paciente], (erro, resultado) => {
        conexao.end(); // Fechar a conexão após a operação
        if (erro) {
            callback(erro);
        }
        else {
            callback(null, resultado);
        }
    });
}
//Função de alterar pelo Cpf do Paciente
function alterarTelefonePeloCpf(telefone, callback) {
    const conexao = (0, db_1.fazerConexao)();
    const alterarTelefone = 'UPDATE telefone SET idtelefone_paciente = ?, celular_paciente = ?, residencial_paciente = ? WHERE cpf_paciente = ?';
    conexao.query(alterarTelefone, [telefone.getPacienteIdPaciente(), telefone.getCelularPaciente(), telefone.getResidencialPaciente()], (erro, resultado) => {
        conexao.end(); // Fechar a conexão após a operação
        if (erro) {
            callback(erro);
        }
        else {
            callback(null, resultado);
        }
    });
}
// Função de excluir
function excluirTelefonePeloCpfPaciente(idtelefone_paciente, callback) {
    const conexao = (0, db_1.fazerConexao)();
    const excluirTelefone = 'DELETE FROM telefone WHERE cpf_paciente = ?';
    conexao.query(excluirTelefone, [idtelefone_paciente], (erro, resultado) => {
        conexao.end(); // Fechar a conexão após a operação
        if (erro) {
            callback(erro);
        }
        else {
            callback(null, resultado);
        }
    });
}

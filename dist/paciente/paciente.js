"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paciente = void 0;
exports.inserirPaciente = inserirPaciente;
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

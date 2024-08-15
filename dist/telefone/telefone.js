"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telefone = void 0;
exports.inserirTelefonePaciente = inserirTelefonePaciente;
exports.listarTelefonePeloCpfpaciente = listarTelefonePeloCpfpaciente;
exports.alterarTelefonePeloCpf = alterarTelefonePeloCpf;
exports.excluirTelefonePeloCpfPaciente = excluirTelefonePeloCpfPaciente;
const db_1 = require("../db");
// Declaração da Classe Telefone, modelo para armazenar e manipular informações de telefone de um paciente
class Telefone {
    // Construtor da classe, instancia um novo objeto Telefone
    constructor(_idtelefone_paciente, _residencial_paciente, _celular_paciente, _paciente_id_paciente) {
        this.idtelefone_paciente = _idtelefone_paciente;
        this.residencial_paciente = _residencial_paciente;
        this.celular_paciente = _celular_paciente;
        this.paciente_id_paciente = _paciente_id_paciente;
    }
    // Métodos Setters
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
    // Métodos Getters
    getIdTelefonePaciente() {
        return this.idtelefone_paciente; //retona o ID do telefone do paciente.
    }
    getCelularPaciente() {
        return this.celular_paciente; //retona o telefone celular do paciente.
    }
    getResidencialPaciente() {
        return this.residencial_paciente; //retona o telefone residencial do paciente.
    }
    getPacienteIdPaciente() {
        return this.paciente_id_paciente; //retona o ID do paciente.
    }
}
exports.Telefone = Telefone;
// Função de inserir - Insere um novo telefone de paciente
function inserirTelefonePaciente(telefone, cpf_paciente, callback) {
    const conexao = (0, db_1.fazerConexao)(); // Inicia a conexão com o banco de dados
    const inserirTelefone = 'INSERT INTO telefone_paciente (celular_telefone, residencial_telefone, paciente_idpaciente) VALUES (?, ?, (SELECT idpaciente FROM paciente WHERE cpf_paciente = ?))';
    conexao.query(inserirTelefone, [telefone.getCelularPaciente(), telefone.getResidencialPaciente(), cpf_paciente], (erro, resultado) => {
        if (erro) {
            callback(erro); // Retorna o erro para o callback
        }
        else {
            callback(null, resultado); // Retorna o resultado para o callback
        }
    });
}
// Função de listar pelo CPF do Paciente-Lista os telefones associados a um paciente com base no CPF fornecido
function listarTelefonePeloCpfpaciente(cpf_paciente, callback) {
    const conexao = (0, db_1.fazerConexao)(); //Inicia a conexão com o banco de dados
    const query = 'SELECT idtelefone_paciente, residencial_telefone, celular_telefone, idpaciente, nome_paciente FROM telefone_paciente INNER JOIN paciente ON idpaciente = paciente_idpaciente WHERE cpf_paciente = ?';
    conexao.query(query, [cpf_paciente], (erro, resultado) => {
        if (erro) {
            callback(erro); // Retorna o erro para o callback
        }
        else {
            callback(null, resultado); // Retorna o resultado para o callback
        }
    });
}
// Função de alterar pelo CPF do Paciente-Atualiza os números de telefone de um paciente com base no CPF fornecido
function alterarTelefonePeloCpf(telefone, cpf_paciente, callback) {
    const conexao = (0, db_1.fazerConexao)(); // Inicia a conexão com o banco de dados
    const alterarTelefone = 'UPDATE telefone_paciente JOIN paciente ON telefone_paciente.paciente_idpaciente = paciente.idpaciente SET residencial_telefone = ?, celular_telefone = ? WHERE cpf_paciente = ?';
    conexao.query(alterarTelefone, [telefone.getCelularPaciente(), telefone.getResidencialPaciente(), cpf_paciente], (erro, resultado) => {
        if (erro) {
            callback(erro); // Retorna o erro para o callback
        }
        else {
            callback(null, resultado); // Retorna o resultado para o callback
        }
    });
}
// Função de excluir-Exclui os registros de telefone de um paciente com base no CPF fornecido
function excluirTelefonePeloCpfPaciente(cpf_paciente, callback) {
    const conexao = (0, db_1.fazerConexao)(); // Inicia a conexão com o banco de dados
    const excluirTelefone = 'DELETE telefone_paciente FROM telefone_paciente JOIN paciente ON telefone_paciente.paciente_idpaciente = paciente.idpaciente WHERE paciente.cpf_paciente = ?';
    conexao.query(excluirTelefone, [cpf_paciente], (erro, resultado) => {
        if (erro) {
            callback(erro); // Retorna o erro para o callback
        }
        else {
            callback(null, resultado); // Retorna o resultado para o callback
        }
    });
}

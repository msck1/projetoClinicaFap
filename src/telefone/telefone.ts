import mysql from 'mysql2';
import { fazerConexao } from '../db';

// Declaração da Classe Telefone, modelo para armazenar e manipular informações de telefone de um paciente
class Telefone {
    private idtelefone_paciente: number; // ID do telefone
    private residencial_paciente: number; // Número de telefone residencial
    private celular_paciente: number; // Número de telefone celular
    private paciente_id_paciente: number; // ID do paciente relacionado ao telefone

    // Construtor da classe, instancia um novo objeto Telefone
    constructor(_idtelefone_paciente: number, _residencial_paciente: number, _celular_paciente: number, _paciente_id_paciente: number) {
        this.idtelefone_paciente = _idtelefone_paciente;
        this.residencial_paciente = _residencial_paciente;
        this.celular_paciente = _celular_paciente;
        this.paciente_id_paciente = _paciente_id_paciente;
    }

    // Métodos Setters

    setIdTelefonePaciente(_idtelefone_paciente: number) {  //Define o ID do telefone do paciente.
        this.idtelefone_paciente = _idtelefone_paciente;
    }
        setCelularPaciente(_celular_paciente: number) {//Define o número de telefone celular do paciente.
        this.celular_paciente = _celular_paciente;
    }
    setResidencialPaciente(_residencial_paciente: number) {//Define o número de telefone residencial do paciente.
        this.residencial_paciente = _residencial_paciente;
    }
    setPacienteIdPaciente(_paciente_id_paciente: number) {//Define o ID do paciente associado ao telefone.
        this.paciente_id_paciente = _paciente_id_paciente;
    }

    // Métodos Getters

    getIdTelefonePaciente() {//Obtém o ID do telefone do paciente
        return this.idtelefone_paciente;//retona o ID do telefone do paciente.
    }
       getCelularPaciente() {//Obtém o telefone celular do paciente
        return this.celular_paciente;//retona o telefone celular do paciente.
    }
        getResidencialPaciente() {//Obtém o telefone residencial do paciente
        return this.residencial_paciente;//retona o telefone residencial do paciente.
    }
    getPacienteIdPaciente() {//Obtém o ID do paciente
        return this.paciente_id_paciente;//retona o ID do paciente.
    }
}

// Função de inserir - Insere um novo telefone de paciente
function inserirTelefonePaciente(telefone: Telefone, cpf_paciente: string, callback: (erro: mysql.QueryError | null, resultado?: any) => void) {
    const conexao = fazerConexao(); // Inicia a conexão com o banco de dados
    const inserirTelefone = 'INSERT INTO telefone_paciente (celular_telefone, residencial_telefone, paciente_idpaciente) VALUES (?, ?, (SELECT idpaciente FROM paciente WHERE cpf_paciente = ?))';
    conexao.query(inserirTelefone, [telefone.getCelularPaciente(), telefone.getResidencialPaciente(), cpf_paciente], (erro, resultado) => {
        if (erro) {
            callback(erro); // Retorna o erro para o callback
        } else {
            callback(null, resultado); // Retorna o resultado para o callback
        }
    });
}

// Função de listar pelo CPF do Paciente-Lista os telefones associados a um paciente com base no CPF fornecido
function listarTelefonePeloCpfpaciente(cpf_paciente: string, callback: (erro: mysql.QueryError | null, resultado?: any) => void) {
    const conexao = fazerConexao(); //Inicia a conexão com o banco de dados
    const query = 'SELECT idtelefone_paciente, residencial_telefone, celular_telefone, idpaciente, nome_paciente FROM telefone_paciente INNER JOIN paciente ON idpaciente = paciente_idpaciente WHERE cpf_paciente = ?';
    conexao.query(query, [cpf_paciente], (erro, resultado) => {
        if (erro) {
            callback(erro); // Retorna o erro para o callback
        } else {
            callback(null, resultado); // Retorna o resultado para o callback
        }
    });
}

// Função de alterar pelo CPF do Paciente-Atualiza os números de telefone de um paciente com base no CPF fornecido
function alterarTelefonePeloCpf(telefone: Telefone, cpf_paciente: string, callback: (erro: mysql.QueryError | null, resultado?: any) => void) {
    const conexao = fazerConexao(); // Inicia a conexão com o banco de dados
    const alterarTelefone = 'UPDATE telefone_paciente JOIN paciente ON telefone_paciente.paciente_idpaciente = paciente.idpaciente SET residencial_telefone = ?, celular_telefone = ? WHERE cpf_paciente = ?';
    conexao.query(alterarTelefone, [telefone.getCelularPaciente(), telefone.getResidencialPaciente(), cpf_paciente], (erro, resultado) => {
        if (erro) {
            callback(erro); // Retorna o erro para o callback
        } else {
            callback(null, resultado); // Retorna o resultado para o callback
        }
    });
}

// Função de excluir-Exclui os registros de telefone de um paciente com base no CPF fornecido
function excluirTelefonePeloCpfPaciente(cpf_paciente: string, callback: (erro: mysql.QueryError | null, resultado?: any) => void) {
    const conexao = fazerConexao(); // Inicia a conexão com o banco de dados
    const excluirTelefone = 'DELETE telefone_paciente FROM telefone_paciente JOIN paciente ON telefone_paciente.paciente_idpaciente = paciente.idpaciente WHERE paciente.cpf_paciente = ?';
    conexao.query(excluirTelefone, [cpf_paciente], (erro, resultado) => {
        if (erro) {
            callback(erro); // Retorna o erro para o callback
        } else {
            callback(null, resultado); // Retorna o resultado para o callback
        }
    });
}

// Exporta as funções/métodos e a classe para uso em outros módulos futuros
export { inserirTelefonePaciente, listarTelefonePeloCpfpaciente, alterarTelefonePeloCpf, excluirTelefonePeloCpfPaciente, Telefone };





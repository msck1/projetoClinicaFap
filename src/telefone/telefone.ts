
import mysql from 'mysql2';
import { fazerConexao } from '../db';
import readline from 'readline-sync';

// Declaração da Classe Telefone
class Telefone {
    private idtelefone_paciente: number;
    private residencial_paciente: number;
    private celular_paciente: number;
    private paciente_id_paciente: number;

    constructor(
        _idtelefone_paciente: number,
        _residencial_paciente: number,
        _celular_paciente: number,
        _paciente_id_paciente: number
    ) {
        this.idtelefone_paciente = _idtelefone_paciente;
        this.residencial_paciente = _residencial_paciente;
        this.celular_paciente = _celular_paciente;
        this.paciente_id_paciente = _paciente_id_paciente;
    }

    // Setters
    setPacienteIdPaciente(_paciente_id_paciente: number) {
        this.paciente_id_paciente = _paciente_id_paciente;
    }

    setIdTelefonePaciente(_idtelefone_paciente: number) {
        this.idtelefone_paciente = _idtelefone_paciente;
    }

    setCelularPaciente(_celular_paciente: number) {
        this.celular_paciente = _celular_paciente;
    }

    setResidencialPaciente(_residencial_paciente: number) {
        this.residencial_paciente = _residencial_paciente;
    }

    // Getters
    getPacienteIdPaciente() {
        return this.paciente_id_paciente;
    }

    getIdTelefonePaciente() {
        return this.idtelefone_paciente;
    }

    getCelularPaciente() {
        return this.celular_paciente;
    }

    getResidencialPaciente() {
        return this.residencial_paciente;
    }
}

// Função para inserir
function inserirTelefonePaciente(telefone: Telefone, callback: (erro: mysql.QueryError | null, resultado?: any) => void) {
    const conexao = fazerConexao();
    const inserir = 'INSERT INTO telefone (paciente_id_paciente, celular_paciente, residencial_paciente) VALUES (?, ?, ?)';
    conexao.query(inserir, [
        telefone.getPacienteIdPaciente(),
        telefone.getCelularPaciente(),
        telefone.getResidencialPaciente()
], (erro, resultado) => {
        conexao.end();
        callback(erro, resultado);
    });
}

// Função para listar pelo Id do Paciente
function listarTelefonePorIdPaciente(paciente_id_paciente: number, callback: (erro: mysql.QueryError | null, resultado?: any) => void) {
    const conexao = fazerConexao();
    const query = 'SELECT * FROM telefone WHERE paciente_id_paciente = ?';
    conexao.query(query, [paciente_id_paciente], (erro, resultado) => {
        conexao.end();
        callback(erro, resultado);
    });
}

// Função para alterar
function alterarTelefonePorIdPaciente(telefone: Telefone, callback: (erro: mysql.QueryError | null, resultado?: any) => void) {
    const conexao = fazerConexao();
    const alterar = 'UPDATE telefone SET celular_paciente = ?, residencial_paciente = ? WHERE paciente_id_paciente = ?';
    conexao.query(alterar, [
        telefone.getCelularPaciente(),
        telefone.getResidencialPaciente(),
        telefone.getPacienteIdPaciente()
    ], (erro, resultado) => {
        conexao.end();
        callback(erro, resultado);
    });
}

// Função para excluir
function excluirTelefonePorIdPaciente(paciente_id_paciente: number, callback: (erro: mysql.QueryError | null, resultado?: any) => void) {
    const conexao = fazerConexao();
    const excluir = 'DELETE FROM telefone WHERE paciente_id_paciente = ?';
    conexao.query(excluir, [paciente_id_paciente], (erro, resultado) => {
        conexao.end();
        callback(erro, resultado);
    });
}

export { inserirTelefonePaciente, listarTelefonePorIdPaciente, alterarTelefonePorIdPaciente, excluirTelefonePorIdPaciente };
export { Telefone };

import mysql from 'mysql2';
import { fazerConexao } from '../db';

// Declaração da Classe Telefone
class Telefone {
    private idtelefone_paciente: number;
    private residencial_paciente: number;
    private celular_paciente: number;
    private paciente_id_paciente: number;

    constructor(_idtelefone_paciente: number, _residencial_paciente: number, _celular_paciente: number, _paciente_id_paciente: number) {
        this.idtelefone_paciente = _idtelefone_paciente;
        this.residencial_paciente = _residencial_paciente;
        this.celular_paciente = _celular_paciente;
        this.paciente_id_paciente = _paciente_id_paciente;
    }

    // Setters
   
        setIdTelefonePaciente(_idtelefone_paciente: number) {
        this.idtelefone_paciente = _idtelefone_paciente;
    }

        setCelularPaciente(_celular_paciente: number) {
        this.celular_paciente = _celular_paciente;
    }

        setResidencialPaciente(_residencial_paciente: number) {
        this.residencial_paciente = _residencial_paciente;
    }
        setPacienteIdPaciente(_paciente_id_paciente: number) {
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

// Função de inserir
function inserirTelefonePaciente(telefone: Telefone, cpf_paciente:string , callback: (erro: mysql.QueryError | null, resultado?: any) => void) {
    const conexao = fazerConexao();
    const inserirTelefone = 'INSERT INTO telefone_paciente (celular_telefone, residencial_telefone, paciente_idpaciente) VALUES (?, ?, (SELECT idpaciente FROM paciente WHERE cpf_paciente = ?))';
    conexao.query(inserirTelefone, [telefone.getCelularPaciente(), telefone.getResidencialPaciente(), cpf_paciente], (erro, resultado) => {

        if (erro) {
            callback(erro);
        } else {
            callback(null, resultado);
        }
    });
}

// Função de listar pelo cpf do Paciente
function listarTelefonePeloCpfpaciente(cpf_paciente: string, callback: (erro: mysql.QueryError | null, resultado?: any) => void) {
    const conexao = fazerConexao();
    const query = 'SELECT idtelefone_paciente, residencial_telefone, celular_telefone, idpaciente, nome_paciente FROM telefone_paciente INNER JOIN paciente ON idpaciente = paciente_idpaciente WHERE cpf_paciente = ?';
    conexao.query(query, [cpf_paciente], (erro, resultado) => {
        
        if (erro) {
            callback(erro);
        } else {
            callback(null, resultado);
        }
    });
}

//Função de alterar pelo Cpf do Paciente
function alterarTelefonePeloCpf(telefone: Telefone, cpf_paciente: string, callback: (erro: mysql.QueryError | null, resultado?: any) => void) {
    const conexao = fazerConexao();
    const alterarTelefone = 'UPDATE telefone_paciente JOIN paciente ON telefone_paciente.paciente_idpaciente = paciente.idpaciente SET residencial_telefone = ?, celular_telefone = ? WHERE cpf_paciente = ?';
    conexao.query(alterarTelefone, [ telefone.getCelularPaciente(), telefone.getResidencialPaciente(), cpf_paciente], (erro, resultado) => {
        
        if (erro) {
            callback(erro);
        } else {
            callback(null, resultado);
        }
    });
}

// Função de excluir
function excluirTelefonePeloCpfPaciente(cpf_paciente: string, callback: (erro: mysql.QueryError | null, resultado?: any) => void) {
    const conexao = fazerConexao();
    const excluirTelefone = 'DELETE telefone_paciente FROM telefone_paciente JOIN paciente ON telefone_paciente.paciente_idpaciente = paciente.idpaciente WHERE paciente.cpf_paciente = ?';
    conexao.query(excluirTelefone, [cpf_paciente], (erro, resultado) => {
        
        if (erro) {
            callback(erro);
        } else {
            callback(null, resultado);
        }
    });
}



export { inserirTelefonePaciente, listarTelefonePeloCpfpaciente, alterarTelefonePeloCpf, excluirTelefonePeloCpfPaciente, Telefone };
//SISTEMA PARA IMPLEMENTAR E GFERENCIAAR OS MÉDICOS, PACIENTES E CONSULTAS DE UMA CLÍNICA.
//CÓDIGO PARA CLASSE DE MEDICO PARA O PROGRAMA. 

import mysql from 'mysql2';
import { fazerConexao } from '../db'; // Importa a função para estabelecer a conexão com o banco de dados

// Declaração da Classe Medico-Representa um modelo para médico com: ID, nome, especialidade e CRM
class Medico {
    private id_medico: number; // ID único do médico
    private nome_medico: string; // Nome do médico
    private especialidade_medico: string; // Especialidade do médico
    private crm_medico: string; // CRM do médico

    // Construtor da classe- Instancia um novo objeto Medico
    constructor(_id_medico: number, _nome_medico: string, _especialidade_medico: string, _crm_medico: string) {
        this.id_medico = _id_medico;
        this.nome_medico = _nome_medico;
        this.especialidade_medico = _especialidade_medico;
        this.crm_medico = _crm_medico;
    }

    // Métodos Setters

    public setid_medico(_id_medico: number): void { //Define o ID do médico.
        this.id_medico = _id_medico;
    }
    public setnome_medico(_nome_medico: string): void { //Define o nome do médico.
        this.nome_medico = _nome_medico;
    }
    public setespecialidade_medico(_especialidade_medico: string): void { //Define o especialidade do médico.
        this.especialidade_medico = _especialidade_medico;
    }
    public setcrm_medico(_crm_medico: string): void { //Define o CRM do médico.
        this.crm_medico = _crm_medico;
    }

    // Métodos Getters
    public getid_medico(): number { //Retorna o ID do médico.
        return this.id_medico;
    }
    public getnome_medico(): string { //Retorna o nome do médico.
        return this.nome_medico;
    }
    public getespecialidade_medico(): string { //Retorna a especialidade do médico.
        return this.especialidade_medico;
    }
    public getcrm_medico(): string { //Retorna o CRM do médico.
        return this.crm_medico;
    }
}

// Função para inserir um novo médico- Adiciona um médico com base nos dados fornecidos
function inserirMedico(medico: Medico, callback: (erro: mysql.QueryError | null, resultado?: any) => void) {
    const conexao = fazerConexao(); // Inicia a conexão com o banco de dados
    const inserir = 'INSERT INTO medico (nome_medico, especialidade_medico, crm_medico) VALUES (?, ?, ?)'; // Consulta SQL para inserir um novo médico
    conexao.query(inserir, [medico.getnome_medico(), medico.getespecialidade_medico(), medico.getcrm_medico()], (erro, resultado) => {
        if (erro) {
            callback(erro); // Retorna o erro para o callback
        } else {
            callback(null, resultado); // Retorna o resultado para o callback
        }
    });
}

// Função para listar médicos pelo CRM - Busca médicos pelo CRM fornecido
function listarMedicoPeloCrm(crm_medicoBuscar: string, callback: (erro: mysql.QueryError | null, resultado?: any) => void) {
    const conexao = fazerConexao(); // Inicia a conexão com o banco de dados
    const query = 'SELECT * FROM medico WHERE crm_medico = ?'; // Consulta o BD para buscar médicos pelo CRM
    conexao.query(query, [crm_medicoBuscar], (erro, resultado) => {
        if (erro) {
            callback(erro); // Retorna o erro para o callback
        } else {
            callback(null, resultado); // Retorna o resultado para o callback
        }
    });
}

// Função para listar médicos pela especialidade-Busca médicos a especialidade fornecida
function listarMedicoPelaEspecialidade(medico_especialidade: string, callback: (erro: mysql.QueryError | null, resultado?: any) => void) {
    const conexao = fazerConexao(); // Inicia a conexão com o banco de dados
    const query = 'SELECT * FROM medico WHERE especialidade_medico = ?'; // Consulta BD para buscar médicos pela especialidade
    conexao.query(query, [medico_especialidade], (erro, resultado) => {
        if (erro) {
            callback(erro); // Retorna o erro para o callback
        } else {
            callback(null, resultado); // Retorna o resultado para o callback
        }
    });
}

// Função para alterar as informações de um médico pelo CRM-Atualiza os dados do médico com base no CRM antigo
function alterarMedicoPeloCrm(crm_antigo: string, medico: Medico, callback: (erro: mysql.QueryError | null, resultado?: any) => void) {
    const conexao = fazerConexao(); // Inicia a conexão com o banco de dados
    const alterar = 'UPDATE medico SET nome_medico = ?, especialidade_medico = ?, crm_medico = ? WHERE crm_medico = ?'; // Consulta SQL para atualizar os dados do médico
    conexao.query(alterar, [medico.getnome_medico(), medico.getespecialidade_medico(), medico.getcrm_medico(), crm_antigo], (erro, resultado) => {
        if (erro) {
            callback(erro); // Retorna o erro para o callback
        } else {
            callback(null, resultado); // Retorna o resultado para o callback
        }
    });
}

// Função para excluir um médico pelo CRM-Remove o médico com base no CRM fornecido
function excluirMedicoPeloCrm(crm_medicoExcluir: string, callback: (erro: mysql.QueryError | null, resultado?: any) => void) {
    const conexao = fazerConexao(); // Inicia a conexão com o banco de dados
    const excluir = 'DELETE FROM medico WHERE crm_medico = ?'; // Consulta o BD para excluir o médico pelo CRM
    conexao.query(excluir, crm_medicoExcluir, (erro, resultado) => {
        if (erro) {
            callback(erro); // Retorna o erro para o callback
        } else {
            callback(null, resultado); // Retorna o resultado para o callback
        }
    });
}

// Exporta as funções e a classe para uso em outros módulos 
export { inserirMedico, listarMedicoPeloCrm, alterarMedicoPeloCrm, excluirMedicoPeloCrm, listarMedicoPelaEspecialidade, Medico };

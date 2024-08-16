import mysql from 'mysql2'; 
import { fazerConexao } from '../db'; 

class Medico {
    private id_medico: number; 
    private nome_medico: string; 
    private especialidade_medico: string; 
    private crm_medico: string; 

    // Construtor da classe, instancia um novo Medico
    constructor(_id_medico: number, _nome_medico: string, _especialidade_medico: string, _crm_medico: string) {
        this.id_medico = _id_medico;
        this.nome_medico = _nome_medico;
        this.especialidade_medico = _especialidade_medico;
        this.crm_medico = _crm_medico;
    }

    // Métodos Setters

    public setid_medico(_id_medico: number): void {
        this.id_medico = _id_medico;
    }
    public setnome_medico(_nome_medico: string): void { 
        this.nome_medico = _nome_medico;
    }
    public setespecialidade_medico(_especialidade_medico: string): void { 
        this.especialidade_medico = _especialidade_medico;
    }
    public setcrm_medico(_crm_medico: string): void { 
        this.crm_medico = _crm_medico;
    }

    // Métodos Getters
    public getid_medico(): number { 
        return this.id_medico;
    }
    public getnome_medico(): string { 
        return this.nome_medico;
    }
    public getespecialidade_medico(): string { 
        return this.especialidade_medico;
    }
    public getcrm_medico(): string { 
        return this.crm_medico;
    }
}

// Função para inserir um novo médico- Adiciona um médico com base nos dados fornecidos
function inserirMedico(medico: Medico, callback: (erro: mysql.QueryError | null, resultado?: any) => void) { // callback que sera um erro com uma mensagem de erro do mysql  
    const conexao = fazerConexao();                                                                           // ou o erro sera null e o teremos o resultado do mysql
    const inserir = 'INSERT INTO medico (nome_medico, especialidade_medico, crm_medico) VALUES (?, ?, ?)'; 
    conexao.query(inserir, [medico.getnome_medico(), medico.getespecialidade_medico(), medico.getcrm_medico()], (erro, resultado) => { // apos a execucao daquery, o callback é chamado
        if (erro) {                                                                                                                    // com o erro da query ou o resultado
            callback(erro); 
        } else {
            callback(null, resultado); 
        }
    });
}

// Função para listar médicos pelo CRM - Busca médicos pelo CRM fornecido
function listarMedicoPeloCrm(crm_medicoBuscar: string, callback: (erro: mysql.QueryError | null, resultado?: any) => void) { 
    const conexao = fazerConexao(); 
    const query = 'SELECT * FROM medico WHERE crm_medico = ?'; 
    conexao.query(query, [crm_medicoBuscar], (erro, resultado) => { 
        if (erro) {
            callback(erro); 
        } else {
            callback(null, resultado); 
        }
    });
}

// Função para listar médicos pela especialidade-Busca médicos a especialidade fornecida
function listarMedicoPelaEspecialidade(medico_especialidade: string, callback: (erro: mysql.QueryError | null, resultado?: any) => void) {
    const conexao = fazerConexao(); 
    const query = 'SELECT * FROM medico WHERE especialidade_medico = ?'; 
    conexao.query(query, [medico_especialidade], (erro, resultado) => {
        if (erro) {
            callback(erro); 
        } else {
            callback(null, resultado); 
        }
    });
}

// Função para alterar as informações de um médico pelo CRM-Atualiza os dados do médico com base no CRM antigo
function alterarMedicoPeloCrm(crm_antigo: string, medico: Medico, callback: (erro: mysql.QueryError | null, resultado?: any) => void) {
    const conexao = fazerConexao(); 
    const alterar = 'UPDATE medico SET nome_medico = ?, especialidade_medico = ?, crm_medico = ? WHERE crm_medico = ?';
    conexao.query(alterar, [medico.getnome_medico(), medico.getespecialidade_medico(), medico.getcrm_medico(), crm_antigo], (erro, resultado) => {
        if (erro) {
            callback(erro); 
        } else {
            callback(null, resultado); 
        }
    });
}

// Função para excluir um médico pelo CRM-Remove o médico com base no CRM fornecido
function excluirMedicoPeloCrm(crm_medicoExcluir: string, callback: (erro: mysql.QueryError | null, resultado?: any) => void) {
    const conexao = fazerConexao(); 
    const excluir = 'DELETE FROM medico WHERE crm_medico = ?'; 
    conexao.query(excluir, crm_medicoExcluir, (erro, resultado) => {
        if (erro) {
            callback(erro); 
        } else {
            callback(null, resultado); 
        }
    });
}

// Exporta as funções e a classe 
export { inserirMedico, listarMedicoPeloCrm, alterarMedicoPeloCrm, excluirMedicoPeloCrm, listarMedicoPelaEspecialidade, Medico };
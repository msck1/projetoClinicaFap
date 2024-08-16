import mysql from 'mysql2'; 
import { fazerConexao } from '../db'; 

class Consulta {

    private idconsulta: number; 
    private dataHora_consulta: string; 
    private consulta_descricao: string; 
    private forma_pagamento: string; 
    private medico_id_medico: number; 
    private paciente_id_paciente: number; 

    // Construtor da classe, Instancia uma nova Consulta 
    constructor (_idconsulta: number, _dataHora_consulta: string, _consulta_descricao: string, _forma_pagamento: string, _medico_id_medico: number, _paciente_id_paciente: number) {
        this.idconsulta = _idconsulta;
        this.dataHora_consulta = _dataHora_consulta;
        this.consulta_descricao = _consulta_descricao;
        this.forma_pagamento = _forma_pagamento;
        this.medico_id_medico = _medico_id_medico;
        this.paciente_id_paciente = _paciente_id_paciente;
    }

    // Métodos Setters
    public setidconsulta(_idconsulta: number) {
        this.idconsulta = _idconsulta;
    }
    public setdataHora_consulta(_dataHora_consulta: string) { 
        this.dataHora_consulta = _dataHora_consulta;
    }                 
    public setconsulta_descricao(_consulta_descricao: string) { 
        this.consulta_descricao = _consulta_descricao;
    }
    public setformaa_pagamento(_forma_pagamento: string) { 
        this.forma_pagamento = _forma_pagamento;
    }
    public setmedico_id_medico(_medico_id_medico: number) { 
        this.medico_id_medico = _medico_id_medico;
    }            
    public setpaciente_id_paciente(_paciente_id_paciente: number) { 
        this.paciente_id_paciente = _paciente_id_paciente;
    }

     // Métodos Getters
    public getidconsulta(): number { 
        return this.idconsulta;
    }
    public getdataHora_consulta(): string { 
        return this.dataHora_consulta;
    }
    public getconsulta_descricao(): string { 
        return this.consulta_descricao;
    }
    public getforma_pagamento(): string { 
        return this.forma_pagamento;
    }
    public getmedico_id_medico(): number { 
        return this.medico_id_medico;
    }
    public getpaciente_id_paciente(): number { 
        return this.paciente_id_paciente;
    }
}

// Função para inserir/agendar uma nova consulta-Adiciona uma consulta ao banco de dados com base nos dados fornecidos
function inserirConsulta(consulta: Consulta, crm_medico: string, cpf_paciente: string, callback: (erro: mysql.QueryError | null, resultado?: any) => void) {
    const conexao = fazerConexao(); 
    const inserirConsulta = `INSERT INTO consulta (dataHora_consulta, consulta_descricao, forma_pagamento, medico_id_medico, paciente_idpaciente) VALUES 
    (?, ?, ?, (SELECT id_medico FROM medico WHERE crm_medico = ?), (SELECT idpaciente FROM paciente WHERE cpf_paciente = ?))`;
    conexao.query(inserirConsulta, [consulta.getdataHora_consulta(), consulta.getconsulta_descricao(), consulta.getforma_pagamento(), crm_medico, cpf_paciente], (erro, resultado) => {
        if (erro) {
            callback(erro); 
        } else {
            callback(null, resultado); 
        }
    });
}

// Função para listar consultas pelo CPF do paciente-Busca consultas no banco de dados com base no CPF do paciente
function listarConsultaPeloCPF(cpf_paciente: string, callback: (erro: mysql.QueryError | null, resultado?: any) => void) {
    const conexao = fazerConexao(); 
    const buscarConsulta = `SELECT idconsulta, CONVERT_TZ(dataHora_consulta, '+00:00', '-03:00') AS dataHora_consulta, consulta_descricao, 
    forma_pagamento, medico_id_medico, paciente_idpaciente, nome_paciente, nome_medico FROM consulta INNER JOIN paciente ON idpaciente = paciente_idpaciente 
    INNER JOIN medico ON id_medico = medico_id_medico WHERE cpf_paciente = ?`;
    conexao.query(buscarConsulta, [cpf_paciente], (erro, resultado) => {
        if (erro) {
            callback(erro); 
        } else {
            callback(null, resultado);
        }
    });
}

// Função para listar consultas pelo CRM do médico-Busca consultas no banco de dados com base no CRM do médico
function listarConsultaPeloCRM(crm_medico: string, callback: (erro: mysql.QueryError | null, resultado?: any) => void) {
    const conexao = fazerConexao(); 
    const buscarConsulta = `SELECT idconsulta, CONVERT_TZ(dataHora_consulta, '+00:00', '-03:00') AS dataHora_consulta, consulta_descricao, 
    forma_pagamento, medico_id_medico, paciente_idpaciente, nome_paciente, nome_medico FROM consulta INNER JOIN paciente ON idpaciente = paciente_idpaciente 
    INNER JOIN medico ON id_medico = medico_id_medico WHERE crm_medico = ?`;
    conexao.query(buscarConsulta, [crm_medico], (erro, resultado) => {
        if (erro) {
            callback(erro); 
        } else {
            callback(null, resultado); 
        }
    });
}

// Função para alterar uma consulta pelo CPF do paciente- Atualiza os detalhes da consulta com base no CPF do paciente
function alterarConsultaPeloCPF(consulta: Consulta, cpf_paciente: string, callback: (erro: mysql.QueryError | null, resultado?: any) => void) {
    const conexao = fazerConexao(); 
    const alterarConsulta = `UPDATE consulta JOIN paciente ON consulta.paciente_idpaciente = paciente.idpaciente SET dataHora_consulta = ?, 
    consulta_descricao = ?, forma_pagamento = ? WHERE paciente.cpf_paciente = ?`;
    conexao.query(alterarConsulta, [consulta.getdataHora_consulta(), consulta.getconsulta_descricao(), consulta.getforma_pagamento(), cpf_paciente], (erro, resultado) => {
        if (erro) {
            callback(erro); 
        } else {
            callback(null, resultado); 
        }
    });
}

// Função para excluir/cancelar uma consulta pelo CPF do paciente-Remove uma consulta do banco de dados com base no CPF do paciente
function excluirConsultaPeloCPF(cpf_pacienteExcluir: string, callback: (erro: mysql.QueryError | null, resultado?: any) => void) {
    const conexao = fazerConexao(); 
    const excluirConsulta = `DELETE consulta FROM consulta JOIN paciente ON consulta.paciente_idpaciente = paciente.idpaciente WHERE paciente.cpf_paciente = ?`;
    conexao.query(excluirConsulta, [cpf_pacienteExcluir], (erro, resultado) => {
        if (erro) {
            callback(erro); 
        } else {
            callback(null, resultado); 
        }
    });
}
// Exporta as funções e a classe 
export { inserirConsulta, listarConsultaPeloCPF, alterarConsultaPeloCPF, excluirConsultaPeloCPF, listarConsultaPeloCRM, Consulta };



